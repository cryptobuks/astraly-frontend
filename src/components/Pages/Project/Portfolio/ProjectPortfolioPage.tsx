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
import { Area, AreaChart, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'
import { add, differenceInCalendarDays, format } from 'date-fns'

const dateFormatter = (date: number) => {
  return format(new Date(date), 'dd/MMM')
}

const toPercent = (decimal: number) => `${decimal / 10}%`

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p className="text-12 font-heading text-black">{toPercent(payload[0].value)}</p>
        <p className="text-black">Released on {format(new Date(label), 'dd/MMM HH:mm')}</p>
      </div>
    )
  }

  return null
}

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

  // const [ticks, setTicks] = useState<number[]>([])
  const [graphData, setGraphData] = useState<any[] | null>(null)
  // const [domain, setDomain] = useState<any>(null)

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

      const _percents: number[] = []
      const _unlockTimes: Date[] = []
      for (let index = 1; index <= _numberVestingPortions.res; index++) {
        const _percent = await getVestingPercent(project?.idoId.toString(), index)
        const _unlockTime = await getVestingUnlockTime(project?.idoId.toString(), index)
        const _prevPercent = index === 1 ? 0 : _percents[index - 2]
        _percents.push(Number(uint256ToBN(_percent.res)) + _prevPercent)
        _unlockTimes.push(new Date(Number(_unlockTime.res) * 1000))
      }
      console.log(_percents, _unlockTimes)
      setVestingPercents(_percents)
      setUnlockTimes(_unlockTimes)

      // Update Graph Data
      // const _ticks = getTicks(
      //   _unlockTimes[0],
      //   _unlockTimes[_numberVestingPortions.res - 1],
      //   _unlockTimes.length
      // )
      // setTicks(_ticks)
      const _data = [
        ..._unlockTimes.map((_time, index) => {
          return {
            date: _time.getTime(),
            vestingPercent: _percents[index],
          }
        }),
      ]
      setGraphData(_data)
      // const _domain = [
      //   (dataMin: any) => dataMin,
      //   () => _unlockTimes[_numberVestingPortions.res - 1].getTime(),
      // ]
      // setDomain(_domain)

      setLoading(false)
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
            <div>
              {loading || !graphData ? (
                <Spinner color="#8F00FF" />
              ) : (
                <AreaChart
                  width={730}
                  height={250}
                  data={graphData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8F00FF" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8F00FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" tickFormatter={dateFormatter} />
                  <YAxis tickFormatter={toPercent} />
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="vestingPercent"
                    stroke="#8F00FF"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              )}
            </div>
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
