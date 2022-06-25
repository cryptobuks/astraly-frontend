import { useStarknetReact } from '@web3-starknet-react/core'
import ToastActions from 'actions/toast.actions'
import { ToastState } from 'components/ui/Toast/utils'
import { Contracts } from 'constants/networks'
import { useTokenContract } from 'contracts'
import { useLotteryTokenContract } from 'contracts/lottery'
import { useMulticallContract } from 'contracts/multicall'
import { formatUnits } from 'ethers/lib/utils'
import { useAppDispatch } from 'hooks/hooks'
import React, { useEffect } from 'react'
import { AddTransactionResponse, Provider, Result } from 'starknet'
import { uint256ToBN } from 'starknet/dist/utils/uint256'
import useDeepCompareEffect from 'use-deep-compare-effect'

import { getVoyagerLink } from 'utils'
import { useBlock } from '../BlockProvider'

import { WalletContext } from './context'
import { TAllowances, TBalances, TPrices, WALLET_PROVIDER_INITIAL_STATE } from './model'
// import transactionsReducer from './reducer'

interface WalletProviderProps {
  children: React.ReactNode
}

const WalletProvider = ({ children }: WalletProviderProps): JSX.Element => {
  const { library, account, chainId } = useStarknetReact()

  const [balances, set_balances] = React.useState<TBalances>(WALLET_PROVIDER_INITIAL_STATE.balances)
  // const [allowances, set_allowances] = React.useState<TAllowances>(
  //   WALLET_PROVIDER_INITIAL_STATE.allowances
  // )
  // const [prices, set_prices] = React.useState<TPrices>(WALLET_PROVIDER_INITIAL_STATE.prices)

  const { getETHBalance, getLPBalance, getZKPBalance, getXZKPBalance } = useTokenContract()
  // const { aggregateCalls } = useMulticallContract()

  const provider = account
    ? library
    : new Provider({ network: chainId === 1 ? 'mainnet-alpha' : 'goerli-alpha' })

  React.useEffect((): void => {
    if (!account) {
      set_balances(WALLET_PROVIDER_INITIAL_STATE.balances)
      // set_allowances(WALLET_PROVIDER_INITIAL_STATE.allowances)
    }
  }, [account])

  const getWalletStatus = React.useCallback(async (): Promise<void> => {
    const userAddress = account?.address || '0x0000000000000000000000000000000000000000'
    const chain = chainId === 1 ? 'SN_MAIN' : 'SN_GOERLI'
    const lpTokens = [Contracts[chain].lp_token]

    const lpCalls = lpTokens.map((lp) => getLPBalance(userAddress, lp))
    const calls = [
      getETHBalance(userAddress),
      getZKPBalance(userAddress),
      getXZKPBalance(userAddress),
      ...lpCalls,
    ]

    // TODO: use multicall contract
    const results: Result[] = await Promise.all(calls)

    const _balances = {
      [Contracts['SN_GOERLI'].eth]: {
        raw: results[0],
        normalized: formatUnits(uint256ToBN(results[0].balance).toString(), 'ether'),
      },
      [Contracts['SN_GOERLI'].token]: {
        raw: results[1],
        normalized: formatUnits(uint256ToBN(results[1].balance).toString(), 'ether'),
      },
      [Contracts['SN_GOERLI'].staking]: {
        raw: results[2],
        normalized: formatUnits(uint256ToBN(results[2].balance).toString(), 'ether'),
      },
      [Contracts['SN_GOERLI'].lp_token]: {
        raw: results[3],
        normalized: formatUnits(uint256ToBN(results[3].balance).toString(), 'ether'),
      },
    }

    set_balances(_balances)

    // const result = await aggregateCalls(calls)
  }, [provider, account, chainId])

  const updateUserData = React.useCallback(async (): Promise<void> => {
    const userAddress = account?.address || '0x0000000000000000000000000000000000000000'
    const chain = chainId === 1 ? 'SN_MAIN' : 'SN_GOERLI'
    const lpTokens = [Contracts[chain].lp_token]

    const lpCalls = lpTokens.map((lp) => getLPBalance(userAddress, lp))
    const calls = [
      getETHBalance(userAddress),
      getZKPBalance(userAddress),
      getXZKPBalance(userAddress),
      ...lpCalls,
    ]

    // TODO: use multicall contract
    const results: Result[] = await Promise.all(calls)

    const _balances = {
      [Contracts['SN_GOERLI'].eth]: {
        raw: results[0],
        normalized: formatUnits(uint256ToBN(results[0].balance).toString(), 'ether'),
      },
      [Contracts['SN_GOERLI'].token]: {
        raw: results[1],
        normalized: formatUnits(uint256ToBN(results[1].balance).toString(), 'ether'),
      },
      [Contracts['SN_GOERLI'].staking]: {
        raw: results[2],
        normalized: formatUnits(uint256ToBN(results[2].balance).toString(), 'ether'),
      },
      [Contracts['SN_GOERLI'].lp_token]: {
        raw: results[3],
        normalized: formatUnits(uint256ToBN(results[3].balance).toString(), 'ether'),
      },
    }

    set_balances(_balances)
  }, [provider, account, chainId, balances])

  React.useEffect((): void => {
    getWalletStatus()
  }, [getWalletStatus])

  return (
    <WalletContext.Provider
      value={{ balances, updateUserData }}
      // eslint-disable-next-line react/no-children-prop
      children={children}
    />
  )
}

export default WalletProvider
