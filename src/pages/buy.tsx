import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useStarknetReact } from '@web3-starknet-react/core'
import { useFaucetContract } from 'contracts'
import { ethers } from 'ethers'
import { uint256 } from 'starknet'
import { Contracts } from 'constants/networks'
import { RootState } from 'stores/reduxStore'
import { WalletIcon, SwapIcon } from 'components/ui/Icons/Icons'
import Chevron from 'assets/icons/Chevron.svg?inline'
import { useTransactions } from 'context/TransactionsProvider'
import LotteryTicket from 'assets/animations/lottery-ticket.gif'

import BlockLabel from 'components/ui/BlockLabel'
import BaseInput from 'components/ui/inputs/BaseInput'
import BaseButton from 'components/ui/buttons/BaseButton'
import Hexagon from 'components/ui/Hexagon'
import Vertical from 'components/ui/Separator/Vertical'

import ArrowDown from 'assets/icons/ArrowDown.svg?inline'

const isMainnet = process.env.REACT_APP_ENV === 'MAINNET'
const CHAIN = isMainnet ? 'SN_MAIN' : 'SN_GOERLI'

const BuyPageContainer = () => {
  // return <BuyPage />
  const { account, connector } = useStarknetReact()
  const [mintAmount, setMintAmount] = useState('0')
  const [roundTimer, setRoundTimer] = useState('...')
  const [unlockTime, setUnlockTime] = useState(0)
  const [allowed, setAllowed] = useState(true)

  const { getWait, getAmount, getUnlockTime, allowedToWithdraw, faucetTransfer } =
    useFaucetContract()

  const { authToken } = useSelector((state: RootState) => state.ConnectWallet)
  const { addTransaction } = useTransactions()
  const handleTransfer = async () => {
    try {
      const tx = await faucetTransfer()
      addTransaction(tx, 'Mint Tokens', fetchInfo, () => {})
    } catch (error) {
      console.error(error)
    }
  }

  const handleToWallet = async () => {
    try {
      const _address = Contracts[CHAIN].token
      await (window as any).starknet?.request({
        type: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: _address,
          },
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  const fetchInfo = async () => {
    try {
      const _amount = await getAmount()
      const _formattedAmount = ethers.utils.formatUnits(
        uint256.uint256ToBN(_amount.res).toString(),
        'ether'
      )
      setMintAmount(_formattedAmount)

      const _allowedToWithdraw = await allowedToWithdraw(account?.address)
      setAllowed(_allowedToWithdraw.success.toNumber() as boolean)

      const _unlockTime = await getUnlockTime(account?.address)
      setUnlockTime(_unlockTime.res.toNumber())
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (account) fetchInfo()
  }, [account])

  useEffect(() => {
    const _interval = setInterval(() => {
      const _remainingTime = new Date(unlockTime * 1000).getTime() - new Date().getTime()
      // const days = Math.floor(_remainingTime / (1000 * 60 * 60 * 24))
      const hours = Math.floor((_remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((_remainingTime % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((_remainingTime % (1000 * 60)) / 1000)
      setRoundTimer(`${hours}h${minutes}m${seconds}s`)
    }, 1000)

    return () => clearInterval(_interval)
  }, [unlockTime])

  return (
    <div className="g-container">
      <div className="lg:flex gap-6 mb-10">
        <div className="col-end-3 col-start-1 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
            <div className="block">
              <div className="block--contrast">
                <BlockLabel label="You have" value="100" onClick={() => {}} />
                <BaseInput label="ETH" value="1" onChange={() => {}} />
              </div>
              <div className="flex items-center justify-center -my-4 text-primaryClear">
                <Hexagon>
                  <ArrowDown />
                </Hexagon>
              </div>

              <div className="block__item">
                <div className="text-primaryClear">You reseive</div>
                <BaseInput label="ZKP" value="1000" onChange={() => {}} />
              </div>
            </div>

            <div className="block xl:col-span-2">
              <div className="block--contrast">
                <div className="font-bold mb-2 text-primaryClear">Buy information</div>

                <div className="flex items-center justify-between text-16 mb-0.5">
                  <div className="text-primaryClear">Token price</div>
                  <div className="font-heading text-primary">$ 0.01</div>
                </div>

                <div className="flex items-center justify-between text-16 mb-0.5">
                  <div className="text-primaryClear">Schedule to claim ZKP</div>
                  <div className="font-heading text-primary">100 ZKP every 6 hour</div>
                </div>
              </div>

              <div className="block__item">
                <BaseButton onClick={() => {}}>Claim tokens</BaseButton>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-6 left-0">
            <Vertical />
          </div>
        </div>

        <div className="block">
          <div className="block--contrast flex flex-col items-center">
            <div className="title--medium mt-1">Trade NFT Lottery!</div>
            <div className="title--small mt-1">You can buy and sell NFT lottery tickets!</div>
            <img src={LotteryTicket.src} alt="lottery-ticket" width="250" />
          </div>
          <div className="block__item">
            <a
              href={`https://testnet.aspect.co/collection/${Contracts['SN_GOERLI'].lottery_token}`}
              target="_blank"
              rel="noreferrer">
              <BaseButton>
                <SwapIcon className={'mr-3'} />
                Trade NFT tickets
              </BaseButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyPageContainer
