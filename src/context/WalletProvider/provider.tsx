import { useStarknetReact } from '@web3-starknet-react/core'
import ToastActions from 'actions/toast.actions'
import { ToastState } from 'components/ui/Toast/utils'
import { Contracts } from 'constants/networks'
import { useTokenContract } from 'contracts'
import { useLotteryTokenContract } from 'contracts/lottery'
import { useAppDispatch } from 'hooks/hooks'
import React, { useEffect } from 'react'
import { AddTransactionResponse, Provider } from 'starknet'
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
  const [allowances, set_allowances] = React.useState<TAllowances>(
    WALLET_PROVIDER_INITIAL_STATE.allowances
  )
  const [prices, set_prices] = React.useState<TPrices>(WALLET_PROVIDER_INITIAL_STATE.prices)

  const { getETHBalance, getLPBalance, getZKPBalance, getXZKPBalance } = useTokenContract()
  const { getTicketsBalance } = useLotteryTokenContract()

  React.useEffect((): void => {
    if (!account) {
      set_balances(WALLET_PROVIDER_INITIAL_STATE.balances)
      set_allowances(WALLET_PROVIDER_INITIAL_STATE.allowances)
    }
  }, [account])

  const getWalletStatus = React.useCallback(async (): Promise<void> => {
    const userAddress = account?.address || '0x0000000000000000000000000000000000000000'
    const provider = new Provider({ network: chainId === 1 ? 'mainnet-alpha' : 'goerli-alpha' })
    const chain = chainId === 1 ? 'SN_MAIN' : 'SN_GOERLI'
    const lpTokens = [Contracts[chain].lp_token]

    const lpCalls = lpTokens.map((lp) => getLPBalance(userAddress, lp))
    const calls = [
      getETHBalance(userAddress),
      ...lpCalls,
      getZKPBalance,
      getXZKPBalance,
      getTicketsBalance,
    ]

    const results = provider.callContract()
  }, [])

  return (
    <WalletContext.Provider
      value={{ balances, allowances, prices }}
      // eslint-disable-next-line react/no-children-prop
      children={children}
    />
  )
}

export default WalletProvider
