import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { Project } from '../../../../interfaces'
import ProjectLayout from '../ProjectLayout'
import AllocationInfo from '../Main/AllocationInfo'
import BlockLabel from '../../../ui/BlockLabel'
import BaseInput from '../../../ui/inputs/BaseInput'
import ArrowDown from 'assets/icons/ArrowDown.svg?inline'
import BaseButton from '../../../ui/buttons/BaseButton'
import { useStarknetReact } from '@web3-starknet-react/core'
import { ethers } from 'ethers'
import { useTokenContract, useIDOContract } from 'contracts'
import { Result, uint256 } from 'starknet'
import { useTransactions } from 'context/TransactionsProvider'
import { Spinner } from '@chakra-ui/react'
import { useAppDispatch } from 'hooks/hooks'
import ToastActions from 'actions/toast.actions'
import { ToastState } from 'components/ui/Toast/utils'
import { useQuery } from '@apollo/client'
import { PROJECT } from '../../../../api/gql/querries'

const ProjectBuyPage = () => {
  const router = useRouter()
  const { account } = useStarknetReact()
  const { pid } = router.query
  const [project, setProject] = useState<Project | undefined>(undefined)
  const { data } = useQuery(PROJECT, {
    variables: {
      idoId: pid,
    },
  })

  const [ethValue, setEthValue] = useState('0')
  const [ethBalance, setETHBalance] = useState('0')
  const [zkpValue, setZkpValue] = useState('0')
  const [userInfo, setUserInfo] = useState<Result | null>(null)
  const [currentSale, setCurrentSale] = useState<Result | null>(null)
  // const [allocation, setAllocation] = useState(0)
  const [purchasing, setPurchasing] = useState(false)
  const [loading, setLoading] = useState(false)
  const { getETHBalance } = useTokenContract()
  const { participate, getCurrentSale, getUserInfo } = useIDOContract()

  const { addTransaction } = useTransactions()

  const allocation = useMemo(() => {
    if (!currentSale) return null
    const _totalWinningTickets = Number(uint256.uint256ToBN(currentSale.res.total_winning_tickets))
    const _amountToSell = Number(
      ethers.utils.formatUnits(
        uint256.uint256ToBN(currentSale.res.amount_of_tokens_to_sell).toString(),
        'ether'
      )
    )
    const _allocation = Math.floor(_amountToSell / _totalWinningTickets)
    return _allocation
  }, [currentSale])

  const dispatch = useAppDispatch()

  const handleParticipate = async () => {
    if (!account?.address) return

    try {
      setPurchasing(true)
      const tx = await participate(ethValue, project?.idoId.toString(), account)
      addTransaction(tx, 'Participate', updateBalance, () => {})
      setPurchasing(false)
    } catch (error) {
      dispatch(
        ToastActions.addToast({
          title: String(error),
          action: <div className="font-heading text-12 text-primary">Try again</div>,
          state: ToastState.ERROR,
          autoClose: true,
        })
      )
      console.error(error)
      setPurchasing(false)
    }
  }

  const updateBalance = async () => {
    try {
      setLoading(true)
      const _balance = await getETHBalance(account?.address)
      const _formattedBalance = ethers.utils.formatUnits(
        uint256.uint256ToBN(_balance.balance).toString(),
        'ether'
      )
      setETHBalance(_formattedBalance)

      const _userInfo = await getUserInfo(account?.address, project?.idoId.toString())
      setUserInfo(_userInfo)

      const _currentSale = await getCurrentSale(project?.idoId.toString())
      setCurrentSale(_currentSale)

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  const updateValuesETH = (ethValue: string) => {
    if (!project) return
    setEthValue(ethValue)
    const _zkpValue = Number(ethValue) / project.tokenPrice
    setZkpValue(_zkpValue.toString())
  }

  const updateValuesOther = (otherValue: string) => {
    if (!project) return
    const _ethValue = Number(otherValue) * project.tokenPrice
    setEthValue(_ethValue.toString())
    setZkpValue(otherValue)
  }

  useEffect(() => {
    if (account?.address && project) {
      updateBalance()
    }
  }, [account, project])

  useEffect(() => {
    data && setProject(data.project)
  }, [data])

  if (!project) {
    return <></>
  }

  return (
    <>
      <ProjectLayout project={project}>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
          <div className="block">
            <div className="block--contrast">
              <BlockLabel
                label={'You pay'}
                value={Number(ethBalance).toFixed(3)}
                onClick={() => updateValuesETH(ethBalance.toString())}
              />
              <BaseInput
                label={'ETH'}
                value={ethValue}
                onChange={(e) => updateValuesETH(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center -my-3 text-primaryClear">
              <ArrowDown />
            </div>

            <div className="block__item">
              <div className="text-primaryClear">You receive</div>
              <BaseInput
                label={'ASTR'}
                value={zkpValue}
                onChange={(e) => updateValuesOther(e.target.value)}
              />
            </div>
          </div>

          <div className="block xl:col-span-2">
            <div className="block--contrast">
              <div className="font-bold mb-2 text-primaryClear">Buy information</div>

              <div className="flex items-center justify-between text-16 mb-0.5">
                <div className="text-primaryClear">Token price</div>
                <div className="font-heading text-primary">ETH {project.tokenPrice}</div>
              </div>
              <div className="flex items-center justify-between text-16">
                <div className="text-primaryClear">Your allocation</div>
                <div className="font-heading text-primary">
                  ${project.ticker}{' '}
                  {allocation && userInfo ? (
                    uint256.uint256ToBN(userInfo.tickets).toNumber() * allocation
                  ) : (
                    <Spinner />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between text-16">
                <div className="text-primaryClear">Your amount bought</div>
                <div className="font-heading text-primary">
                  ${project.ticker}{' '}
                  {userInfo ? (
                    uint256.uint256ToBN(userInfo.participation.amount_bought).toString()
                  ) : (
                    <Spinner />
                  )}
                </div>
              </div>
            </div>

            <div className="block__item">
              <BaseButton
                onClick={handleParticipate}
                disabled={
                  purchasing ||
                  (userInfo && allocation
                    ? uint256.uint256ToBN(userInfo?.participation?.amount_bought).toNumber() > 0 ||
                      uint256.uint256ToBN(userInfo.tickets).toNumber() * allocation === 0
                    : false)
                }>
                {purchasing ? <Spinner /> : 'Participate'}
              </BaseButton>
            </div>
          </div>
        </div>
        <AllocationInfo />
      </ProjectLayout>
    </>
  )
}

export default ProjectBuyPage
