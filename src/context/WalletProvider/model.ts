import { BigNumberish } from 'starknet/utils/number'

export type TBalances = {
  [address: string]: {
    raw: BigNumberish
    normalized: number
  }
}
export type TAllowances = {
  [address: string]: {
    raw: BigNumberish
    normalized: number
  }
}
export type TPrices = {
  [address: string]: {
    raw: BigNumberish
    normalized: number
  }
}

export type TWalletContext = {
  balances: TBalances
  allowances: TAllowances
  prices: TPrices
}

export const WALLET_PROVIDER_INITIAL_STATE: TWalletContext = {
  balances: {},
  allowances: {},
  prices: {},
}
