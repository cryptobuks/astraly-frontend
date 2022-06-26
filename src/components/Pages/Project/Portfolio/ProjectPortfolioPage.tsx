import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Project } from '../../../../interfaces'
import ProjectLayout from '../ProjectLayout'
import InvestmentOverview from '../../../ui/Investment/InvestmentOverview'
import { useQuery } from '@apollo/client'
import { PROJECT } from '../../../../api/gql/querries'
import { useIDOContract } from 'contracts'
import BaseButton from 'components/ui/buttons/BaseButton'
import { SendIcon } from 'components/ui/Icons/Icons'
import { useTransactions } from 'context/TransactionsProvider'
import { useAppDispatch } from 'hooks/hooks'
import ToastActions from 'actions/toast.actions'
import { ToastState } from 'components/ui/Toast/utils'
import { Spinner } from '@chakra-ui/react'
import { uint256ToBN } from 'starknet/utils/uint256'

const ProjectPortfolioPage = () => {
  const router = useRouter()
  const { pid } = router.query
  const [project, setProject] = useState<Project | undefined>(undefined)
  const { data } = useQuery(PROJECT, {
    variables: {
      idoId: pid,
    },
  })
  const {
    getNumberVestingPortions,
    getVestingPercent,
    withdrawTokens,
    getUserInfo,
    getVestingUnlockTime,
  } = useIDOContract()
  const { addTransaction } = useTransactions()

  const [selectedPortions, setSelectedPortions] = useState<number[]>([1])
  const [vestingPercents, setVestingPercents] = useState<number[]>([])
  const [unlockTimes, setUnlockTimes] = useState<Date[]>([])

  const [withdrawing, setWithdrawing] = useState(false)
  const [loading, setLoading] = useState(false)

  const currentPortion = useMemo(
    () =>
      unlockTimes.reduce(
        (prev, cur, curIndex) => (cur.getTime() <= new Date().getTime() ? curIndex + 1 : prev),
        0
      ),
    [unlockTimes]
  )

  const dispatch = useAppDispatch()

  const updateVestingInfo = useCallback(async () => {
    try {
      setLoading(true)
      const _numberVestingPortions = await getNumberVestingPortions(project?.idoId.toString())

      const _percents = []
      const _unlockTimes = []
      for (let index = 1; index <= _numberVestingPortions.res; index++) {
        const _percent = await getVestingPercent(project?.idoId.toString(), index)
        const _unlockTime = await getVestingUnlockTime(project?.idoId.toString(), index)
        _percents.push(Number(uint256ToBN(_percent.res)))
        _unlockTimes.push(new Date(Number(_unlockTime.res) * 1000))
      }
      console.log(_percents, _unlockTimes)
      setVestingPercents(_percents)
      setUnlockTimes(_unlockTimes)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }, [getNumberVestingPortions, getVestingPercent, getVestingUnlockTime])

  const handleWithdraw = async () => {
    try {
      setWithdrawing(true)
      const tx = await withdrawTokens(project?.idoId.toString(), [1])
      addTransaction(
        tx,
        'Withdraw Tokens',
        () => undefined,
        () => undefined
      )
      setWithdrawing(false)
    } catch (error) {
      console.error(error)
      dispatch(
        ToastActions.addToast({
          title: String(error),
          action: <div className="font-heading text-12 text-primary">Try again</div>,
          state: ToastState.ERROR,
          autoClose: true,
        })
      )
      setWithdrawing(false)
    }
  }

  useEffect(() => {
    data && setProject(data.project)
  }, [data])

  useEffect(() => {
    if (project) {
      updateVestingInfo()
    }
  }, [project])

  if (!project) {
    return <></>
  }

  return (
    <>
      <ProjectLayout project={project}>
        <div className="block">
          <div className="block--contrast">
            <div className="title--medium mb-6">Distribution Info</div>
            <div className="text-primaryClear">{loading ? <Spinner /> : 'hey'}</div>
          </div>
          <div className="block__item">
            <BaseButton onClick={handleWithdraw} disabled={withdrawing}>
              <SendIcon className={'mr-2'} />
              {withdrawing ? <Spinner /> : 'Withdraw'}
            </BaseButton>
          </div>
        </div>
      </ProjectLayout>
    </>
  )
}

export default ProjectPortfolioPage
