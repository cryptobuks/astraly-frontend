export const ZKP_TOKEN_ABI = [
  {
    members: [
      {
        name: 'low',
        offset: 0,
        type: 'felt',
      },
      {
        name: 'high',
        offset: 1,
        type: 'felt',
      },
    ],
    name: 'Uint256',
    size: 2,
    type: 'struct',
  },
  {
    data: [
      {
        name: 'from_',
        type: 'felt',
      },
      {
        name: 'to',
        type: 'felt',
      },
      {
        name: 'value',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'Transfer',
    type: 'event',
  },
  {
    data: [
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: 'spender',
        type: 'felt',
      },
      {
        name: 'value',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'Approval',
    type: 'event',
  },
  {
    inputs: [
      {
        name: 'name',
        type: 'felt',
      },
      {
        name: 'symbol',
        type: 'felt',
      },
      {
        name: 'decimals',
        type: 'felt',
      },
      {
        name: 'initial_supply',
        type: 'Uint256',
      },
      {
        name: 'recipient',
        type: 'felt',
      },
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: '_cap',
        type: 'Uint256',
      },
    ],
    name: 'constructor',
    outputs: [],
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'cap',
    outputs: [
      {
        name: 'res',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: 'name',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: 'symbol',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: 'totalSupply',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        name: 'decimals',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'account',
        type: 'felt',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: 'spender',
        type: 'felt',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        name: 'remaining',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_vault_address',
        type: 'felt',
      },
    ],
    name: 'set_vault_address',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'recipient',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'sender',
        type: 'felt',
      },
      {
        name: 'recipient',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'spender',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'spender',
        type: 'felt',
      },
      {
        name: 'added_value',
        type: 'Uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'spender',
        type: 'felt',
      },
      {
        name: 'subtracted_value',
        type: 'Uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'to',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    type: 'function',
  },
]

export const XZKP_TOKEN_ABI = [
  {
    members: [
      {
        name: 'low',
        offset: 0,
        type: 'felt',
      },
      {
        name: 'high',
        offset: 1,
        type: 'felt',
      },
    ],
    name: 'Uint256',
    size: 2,
    type: 'struct',
  },
  {
    members: [
      {
        name: 'amount',
        offset: 0,
        type: 'Uint256',
      },
      {
        name: 'reward_debt',
        offset: 2,
        type: 'Uint256',
      },
    ],
    name: 'UserInfo',
    size: 4,
    type: 'struct',
  },
  {
    data: [
      {
        name: 'from_',
        type: 'felt',
      },
      {
        name: 'to',
        type: 'felt',
      },
      {
        name: 'value',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'Transfer',
    type: 'event',
  },
  {
    data: [
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: 'spender',
        type: 'felt',
      },
      {
        name: 'value',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'Approval',
    type: 'event',
  },
  {
    data: [
      {
        name: 'implementation',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'Upgraded',
    type: 'event',
  },
  {
    data: [
      {
        name: 'caller',
        type: 'felt',
      },
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'Deposit',
    type: 'event',
  },
  {
    data: [
      {
        name: 'caller',
        type: 'felt',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'Withdraw',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'new_fee_percent',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'FeePercentUpdated',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'new_harvest_window',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'HarvestWindowUpdated',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'new_harvest_delay',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'HarvestDelayUpdated',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'new_harvest_delay',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'HarvestDelayUpdateScheduled',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'new_target_float_percent',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'TargetFloatPercentUpdated',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'strategies_len',
        type: 'felt',
      },
      {
        name: 'strategies',
        type: 'felt*',
      },
    ],
    keys: [],
    name: 'Harvest',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'strategy_address',
        type: 'felt',
      },
      {
        name: 'underlying_amount',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'StrategyDeposit',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'strategy_address',
        type: 'felt',
      },
      {
        name: 'underlying_amount',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'StrategyWithdrawal',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'strategy_address',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'StrategyTrusted',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'strategy_address',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'StrategyDistrusted',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'FeesClaimed',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'strategy_address',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'WithdrawalStackPushed',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'strategy_address',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'WithdrawalStackPopped',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'stack_len',
        type: 'felt',
      },
      {
        name: 'stack',
        type: 'felt*',
      },
    ],
    keys: [],
    name: 'WithdrawalStackSet',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'index',
        type: 'felt',
      },
      {
        name: 'old_strategy',
        type: 'felt',
      },
      {
        name: 'new_strategy',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'WithdrawalStackIndexReplaced',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'index1',
        type: 'felt',
      },
      {
        name: 'index2',
        type: 'felt',
      },
      {
        name: 'new_strategy1',
        type: 'felt',
      },
      {
        name: 'new_strategy2',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'WithdrawalStackIndexesSwapped',
    type: 'event',
  },
  {
    inputs: [],
    name: 'getWithdrawalStack',
    outputs: [
      {
        name: 'strategies_withdrawal_stack_len',
        type: 'felt',
      },
      {
        name: 'strategies_withdrawal_stack',
        type: 'felt*',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalFloat',
    outputs: [
      {
        name: 'float',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'lp_token',
        type: 'felt',
      },
    ],
    name: 'totalFloatLP',
    outputs: [
      {
        name: 'float',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalStrategyHoldings',
    outputs: [
      {
        name: 'holdings',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feePercent',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'harvestDelay',
    outputs: [
      {
        name: 'delay',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'harvestWindow',
    outputs: [
      {
        name: 'window',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'targetFloatPercent',
    outputs: [
      {
        name: 'percent',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lockedProfit',
    outputs: [
      {
        name: 'res',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastHarvest',
    outputs: [
      {
        name: 'time',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastHarvestWindowStart',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nextHarvestDelay',
    outputs: [
      {
        name: 'delay',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        name: 'name',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        name: 'symbol',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: 'totalSupply',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        name: 'decimals',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'account',
        type: 'felt',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: 'spender',
        type: 'felt',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        name: 'remaining',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAssets',
    outputs: [
      {
        name: 'totalManagedAssets',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'asset',
    outputs: [
      {
        name: 'assetTokenAddress',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    name: 'convertToShares',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    name: 'convertToAssets',
    outputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'receiver',
        type: 'felt',
      },
    ],
    name: 'maxDeposit',
    outputs: [
      {
        name: 'maxAssets',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'receiver',
        type: 'felt',
      },
    ],
    name: 'maxMint',
    outputs: [
      {
        name: 'maxShares',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'owner',
        type: 'felt',
      },
    ],
    name: 'maxWithdraw',
    outputs: [
      {
        name: 'maxAssets',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    name: 'previewWithdraw',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'owner',
        type: 'felt',
      },
    ],
    name: 'maxRedeem',
    outputs: [
      {
        name: 'maxShares',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    name: 'previewRedeem',
    outputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    data: [
      {
        name: 'depositor',
        type: 'felt',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
      {
        name: 'lp_address',
        type: 'felt',
      },
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'DepositLP',
    type: 'event',
  },
  {
    data: [
      {
        name: 'caller',
        type: 'felt',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: 'lp_token',
        type: 'felt',
      },
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'WithdrawLP',
    type: 'event',
  },
  {
    data: [
      {
        name: 'newRewardPerBlock',
        type: 'Uint256',
      },
      {
        name: 'newEndBlock',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'NewRewardPerBlockAndEndBlock',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'harvestAmount',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'HarvestRewards',
    type: 'event',
  },
  {
    inputs: [
      {
        name: 'user',
        type: 'felt',
      },
      {
        name: 'token',
        type: 'felt',
      },
    ],
    name: 'getUserDeposit',
    outputs: [
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'lp_token',
        type: 'felt',
      },
    ],
    name: 'isTokenWhitelisted',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    name: 'previewDeposit',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'lock_time',
        type: 'felt',
      },
    ],
    name: 'previewDepositForTime',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'lp_token',
        type: 'felt',
      },
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'lock_time',
        type: 'felt',
      },
    ],
    name: 'previewDepositLP',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    name: 'previewMint',
    outputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
      {
        name: 'lock_time',
        type: 'felt',
      },
    ],
    name: 'previewMintForTime',
    outputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCurrentBoostValue',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'user',
        type: 'felt',
      },
    ],
    name: 'getUserStakeInfo',
    outputs: [
      {
        name: 'unlock_time',
        type: 'felt',
      },
      {
        name: 'tokens_len',
        type: 'felt',
      },
      {
        name: 'tokens',
        type: 'felt*',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTokensMask',
    outputs: [
      {
        name: 'tokens_mask',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEmergencyBreaker',
    outputs: [
      {
        name: 'address',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getImplementation',
    outputs: [
      {
        name: 'address',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'lp_token',
        type: 'felt',
      },
      {
        name: 'input',
        type: 'Uint256',
      },
    ],
    name: 'previewWithdrawLP',
    outputs: [
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDefaultLockTime',
    outputs: [
      {
        name: 'lock_time',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getHarvestTaskContract',
    outputs: [
      {
        name: 'address',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'canHarvest',
    outputs: [
      {
        name: 'yes_no',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardPerBlock',
    outputs: [
      {
        name: 'reward',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'startBlock',
    outputs: [
      {
        name: 'block',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'endBlock',
    outputs: [
      {
        name: 'block',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastRewardBlock',
    outputs: [
      {
        name: 'block',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'accTokenPerShare',
    outputs: [
      {
        name: 'res',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'user',
        type: 'felt',
      },
    ],
    name: 'userInfo',
    outputs: [
      {
        name: 'info',
        type: 'UserInfo',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'user',
        type: 'felt',
      },
    ],
    name: 'calculatePendingRewards',
    outputs: [
      {
        name: 'rewards',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_from',
        type: 'felt',
      },
      {
        name: '_to',
        type: 'felt',
      },
    ],
    name: 'getMultiplier',
    outputs: [
      {
        name: 'multiplier',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'name',
        type: 'felt',
      },
      {
        name: 'symbol',
        type: 'felt',
      },
      {
        name: 'asset_addr',
        type: 'felt',
      },
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: '_reward_per_block',
        type: 'Uint256',
      },
      {
        name: 'start_reward_block',
        type: 'felt',
      },
      {
        name: 'end_reward_block',
        type: 'felt',
      },
    ],
    name: 'initializer',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'new_implementation',
        type: 'felt',
      },
    ],
    name: 'upgrade',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'lp_token',
        type: 'felt',
      },
      {
        name: 'mint_calculator_address',
        type: 'felt',
      },
      {
        name: 'is_NFT',
        type: 'felt',
      },
    ],
    name: 'addWhitelistedToken',
    outputs: [
      {
        name: 'token_mask',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'lp_token',
        type: 'felt',
      },
    ],
    name: 'removeWhitelistedToken',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'address',
        type: 'felt',
      },
    ],
    name: 'setEmergencyBreaker',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
      {
        name: 'lock_time_days',
        type: 'felt',
      },
    ],
    name: 'depositForTime',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'lp_token',
        type: 'felt',
      },
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
      {
        name: 'lock_time_days',
        type: 'felt',
      },
    ],
    name: 'depositLP',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
    ],
    name: 'mint',
    outputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
      {
        name: 'lock_time_days',
        type: 'felt',
      },
    ],
    name: 'mintForTime',
    outputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
      {
        name: 'owner',
        type: 'felt',
      },
    ],
    name: 'redeem',
    outputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
      {
        name: 'owner',
        type: 'felt',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'lp_token',
        type: 'felt',
      },
      {
        name: 'assets',
        type: 'Uint256',
      },
      {
        name: 'receiver',
        type: 'felt',
      },
      {
        name: 'owner',
        type: 'felt',
      },
    ],
    name: 'withdrawLP',
    outputs: [
      {
        name: 'shares',
        type: 'Uint256',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'recipient',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'sender',
        type: 'felt',
      },
      {
        name: 'recipient',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'spender',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'new_lock_time_days',
        type: 'felt',
      },
    ],
    name: 'setDefaultLockTime',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'new_boost_value',
        type: 'felt',
      },
    ],
    name: 'setStakeBoost',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'fee',
        type: 'felt',
      },
    ],
    name: 'setFeePercent',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'window',
        type: 'felt',
      },
    ],
    name: 'setHarvestWindow',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'new_delay',
        type: 'felt',
      },
    ],
    name: 'setHarvestDelay',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'new_float',
        type: 'felt',
      },
    ],
    name: 'setTargetFloatPercent',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'address',
        type: 'felt',
      },
    ],
    name: 'setHarvestTaskContract',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'strategies_len',
        type: 'felt',
      },
      {
        name: 'strategies',
        type: 'felt*',
      },
    ],
    name: 'harvest',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'strategy_address',
        type: 'felt',
      },
      {
        name: 'underlying_amount',
        type: 'Uint256',
      },
    ],
    name: 'depositIntoStrategy',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'strategy_address',
        type: 'felt',
      },
      {
        name: 'underlying_amount',
        type: 'Uint256',
      },
    ],
    name: 'withdrawFromStrategy',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'strategy_address',
        type: 'felt',
      },
    ],
    name: 'trustStrategy',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'strategy_address',
        type: 'felt',
      },
    ],
    name: 'distrustStrategy',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'claimFees',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'strategy',
        type: 'felt',
      },
    ],
    name: 'pushToWithdrawalStack',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [],
    name: 'popFromWithdrawalStack',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'stack_len',
        type: 'felt',
      },
      {
        name: 'stack',
        type: 'felt*',
      },
    ],
    name: 'setWithdrawalStack',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'index',
        type: 'felt',
      },
      {
        name: 'address',
        type: 'felt',
      },
    ],
    name: 'replaceWithdrawalStackIndex',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'index1',
        type: 'felt',
      },
      {
        name: 'index2',
        type: 'felt',
      },
    ],
    name: 'swapWithdrawalStackIndexes',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_reward_per_block',
        type: 'Uint256',
      },
      {
        name: 'new_end_block',
        type: 'felt',
      },
    ],
    name: 'updateRewardPerBlockAndEndBlock',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [],
    name: 'harvestRewards',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'new_owner',
        type: 'felt',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    type: 'function',
  },
]

export const LOTTERY_TOKEN_ABI = [
  {
    members: [
      {
        name: 'low',
        offset: 0,
        type: 'felt',
      },
      {
        name: 'high',
        offset: 1,
        type: 'felt',
      },
    ],
    name: 'Uint256',
    size: 2,
    type: 'struct',
  },
  {
    data: [
      {
        name: 'operator',
        type: 'felt',
      },
      {
        name: 'from_',
        type: 'felt',
      },
      {
        name: 'to',
        type: 'felt',
      },
      {
        name: 'id',
        type: 'Uint256',
      },
      {
        name: 'value',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    data: [
      {
        name: 'operator',
        type: 'felt',
      },
      {
        name: 'from_',
        type: 'felt',
      },
      {
        name: 'to',
        type: 'felt',
      },
      {
        name: 'ids_len',
        type: 'felt',
      },
      {
        name: 'ids',
        type: 'Uint256*',
      },
      {
        name: 'values_len',
        type: 'felt',
      },
      {
        name: 'values',
        type: 'Uint256*',
      },
    ],
    keys: [],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    data: [
      {
        name: 'account',
        type: 'felt',
      },
      {
        name: 'operator',
        type: 'felt',
      },
      {
        name: 'approved',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    data: [
      {
        name: 'value_len',
        type: 'felt',
      },
      {
        name: 'value',
        type: 'felt*',
      },
      {
        name: 'id',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'URI',
    type: 'event',
  },
  {
    inputs: [
      {
        name: 'uri_len',
        type: 'felt',
      },
      {
        name: 'uri',
        type: 'felt*',
      },
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: '_ido_factory_address',
        type: 'felt',
      },
    ],
    name: 'constructor',
    outputs: [],
    type: 'constructor',
  },
  {
    inputs: [
      {
        name: 'interfaceId',
        type: 'felt',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        name: 'is_supported',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'id',
        type: 'felt',
      },
    ],
    name: 'uri',
    outputs: [
      {
        name: 'uri_len',
        type: 'felt',
      },
      {
        name: 'uri',
        type: 'felt*',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'account',
        type: 'felt',
      },
      {
        name: 'id',
        type: 'Uint256',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'accounts_len',
        type: 'felt',
      },
      {
        name: 'accounts',
        type: 'felt*',
      },
      {
        name: 'ids_len',
        type: 'felt',
      },
      {
        name: 'ids',
        type: 'Uint256*',
      },
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        name: 'balances_len',
        type: 'felt',
      },
      {
        name: 'balances',
        type: 'Uint256*',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'account',
        type: 'felt',
      },
      {
        name: 'operator',
        type: 'felt',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        name: 'is_approved',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'operator',
        type: 'felt',
      },
      {
        name: 'approved',
        type: 'felt',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'uri_len',
        type: 'felt',
      },
      {
        name: 'uri',
        type: 'felt*',
      },
    ],
    name: 'setURI',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_from',
        type: 'felt',
      },
      {
        name: 'to',
        type: 'felt',
      },
      {
        name: 'id',
        type: 'Uint256',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
      {
        name: 'data_len',
        type: 'felt',
      },
      {
        name: 'data',
        type: 'felt*',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_from',
        type: 'felt',
      },
      {
        name: 'to',
        type: 'felt',
      },
      {
        name: 'ids_len',
        type: 'felt',
      },
      {
        name: 'ids',
        type: 'Uint256*',
      },
      {
        name: 'amounts_len',
        type: 'felt',
      },
      {
        name: 'amounts',
        type: 'Uint256*',
      },
      {
        name: 'data_len',
        type: 'felt',
      },
      {
        name: 'data',
        type: 'felt*',
      },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'to',
        type: 'felt',
      },
      {
        name: 'id',
        type: 'Uint256',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
      {
        name: 'data_len',
        type: 'felt',
      },
      {
        name: 'data',
        type: 'felt*',
      },
    ],
    name: 'mint',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'to',
        type: 'felt',
      },
      {
        name: 'ids_len',
        type: 'felt',
      },
      {
        name: 'ids',
        type: 'Uint256*',
      },
      {
        name: 'amounts_len',
        type: 'felt',
      },
      {
        name: 'amounts',
        type: 'Uint256*',
      },
      {
        name: 'data_len',
        type: 'felt',
      },
      {
        name: 'data',
        type: 'felt*',
      },
    ],
    name: 'mintBatch',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'id',
        type: 'Uint256',
      },
      {
        name: 'data_len',
        type: 'felt',
      },
      {
        name: 'data',
        type: 'felt*',
      },
    ],
    name: 'claimLotteryTickets',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_from',
        type: 'felt',
      },
      {
        name: 'id',
        type: 'Uint256',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_from',
        type: 'felt',
      },
      {
        name: 'id',
        type: 'Uint256',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
      {
        name: 'nb_quest',
        type: 'felt',
      },
      {
        name: 'merkle_proof_len',
        type: 'felt',
      },
      {
        name: 'merkle_proof',
        type: 'felt*',
      },
    ],
    name: 'burn_with_quest',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'address',
        type: 'felt',
      },
    ],
    name: 'set_xzkp_contract_address',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'address',
        type: 'felt',
      },
    ],
    name: 'set_ido_factory_address',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'balance',
        type: 'Uint256',
      },
    ],
    name: '_balance_to_tickets',
    outputs: [
      {
        name: 'amount_to_claim',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'sig_len',
        type: 'felt',
      },
      {
        name: 'sig',
        type: 'felt*',
      },
    ],
    name: 'checkKYCSignature',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
]

export const FAUCET_ABI = [
  {
    members: [
      {
        name: 'low',
        offset: 0,
        type: 'felt',
      },
      {
        name: 'high',
        offset: 1,
        type: 'felt',
      },
    ],
    name: 'Uint256',
    size: 2,
    type: 'struct',
  },
  {
    inputs: [],
    name: 'get_amount',
    outputs: [
      {
        name: 'res',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_wait',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'account',
        type: 'felt',
      },
    ],
    name: 'get_unlock_time',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'owner',
        type: 'felt',
      },
      {
        name: '_token_address',
        type: 'felt',
      },
      {
        name: '_withdrawal_amount',
        type: 'Uint256',
      },
      {
        name: '_wait_time',
        type: 'felt',
      },
    ],
    name: 'constructor',
    outputs: [],
    type: 'constructor',
  },
  {
    inputs: [
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    name: 'set_amount',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'wait',
        type: 'felt',
      },
    ],
    name: 'set_wait',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [],
    name: 'faucet_transfer',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'address',
        type: 'felt',
      },
    ],
    name: 'allowedToWithdraw',
    outputs: [
      {
        name: 'success',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export const IDO_FACTORY_ABI = [
  {
    data: [
      {
        name: 'id',
        type: 'felt',
      },
      {
        name: 'address',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'IDO_Created',
    type: 'event',
  },
  {
    inputs: [
      {
        name: 'id',
        type: 'felt',
      },
    ],
    name: 'get_ido_launch_date',
    outputs: [
      {
        name: 'launch_date',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'id',
        type: 'felt',
      },
    ],
    name: 'get_ido_address',
    outputs: [
      {
        name: 'address',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_random_number_generator_address',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_lottery_ticket_contract_address',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_payment_token_address',
    outputs: [
      {
        name: 'payment_token_address',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'id',
        type: 'felt',
      },
    ],
    name: 'get_merkle_root',
    outputs: [
      {
        name: 'merkle_root',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_ido_contract_class_hash',
    outputs: [
      {
        name: 'class_hash',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_ido_contract_class_hash',
        type: 'felt',
      },
      {
        name: 'owner_',
        type: 'felt',
      },
    ],
    name: 'constructor',
    outputs: [],
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'create_ido',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'rnd_nbr_gen_adr',
        type: 'felt',
      },
    ],
    name: 'set_random_number_generator_address',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'task_addr',
        type: 'felt',
      },
    ],
    name: 'set_task_address',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_lottery_ticket_contract_address',
        type: 'felt',
      },
    ],
    name: 'set_lottery_ticket_contract_address',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_pmt_tkn_addr',
        type: 'felt',
      },
    ],
    name: 'set_payment_token_address',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_merkle_root',
        type: 'felt',
      },
      {
        name: '_id',
        type: 'felt',
      },
    ],
    name: 'set_merkle_root',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'new_class_hash',
        type: 'felt',
      },
    ],
    name: 'set_ido_contract_class_hash',
    outputs: [],
    type: 'function',
  },
]

export const IDO_CONTRACT_ABI = [
  {
    members: [
      {
        name: 'low',
        offset: 0,
        type: 'felt',
      },
      {
        name: 'high',
        offset: 1,
        type: 'felt',
      },
    ],
    name: 'Uint256',
    size: 2,
    type: 'struct',
  },
  {
    members: [
      {
        name: 'token',
        offset: 0,
        type: 'felt',
      },
      {
        name: 'is_created',
        offset: 1,
        type: 'felt',
      },
      {
        name: 'raised_funds_withdrawn',
        offset: 2,
        type: 'felt',
      },
      {
        name: 'leftover_withdrawn',
        offset: 3,
        type: 'felt',
      },
      {
        name: 'tokens_deposited',
        offset: 4,
        type: 'felt',
      },
      {
        name: 'sale_owner',
        offset: 5,
        type: 'felt',
      },
      {
        name: 'token_price',
        offset: 6,
        type: 'Uint256',
      },
      {
        name: 'amount_of_tokens_to_sell',
        offset: 8,
        type: 'Uint256',
      },
      {
        name: 'total_tokens_sold',
        offset: 10,
        type: 'Uint256',
      },
      {
        name: 'total_winning_tickets',
        offset: 12,
        type: 'Uint256',
      },
      {
        name: 'total_raised',
        offset: 14,
        type: 'Uint256',
      },
      {
        name: 'sale_end',
        offset: 16,
        type: 'felt',
      },
      {
        name: 'tokens_unlock_time',
        offset: 17,
        type: 'felt',
      },
      {
        name: 'lottery_tickets_burn_cap',
        offset: 18,
        type: 'Uint256',
      },
      {
        name: 'number_of_participants',
        offset: 20,
        type: 'Uint256',
      },
    ],
    name: 'Sale',
    size: 22,
    type: 'struct',
  },
  {
    members: [
      {
        name: 'amount_bought',
        offset: 0,
        type: 'Uint256',
      },
      {
        name: 'amount_paid',
        offset: 2,
        type: 'Uint256',
      },
      {
        name: 'time_participated',
        offset: 4,
        type: 'felt',
      },
      {
        name: 'last_portion_withdrawn',
        offset: 5,
        type: 'felt',
      },
    ],
    name: 'Participation',
    size: 6,
    type: 'struct',
  },
  {
    members: [
      {
        name: 'time_starts',
        offset: 0,
        type: 'felt',
      },
      {
        name: 'time_ends',
        offset: 1,
        type: 'felt',
      },
      {
        name: 'number_of_purchases',
        offset: 2,
        type: 'Uint256',
      },
    ],
    name: 'Purchase_Round',
    size: 4,
    type: 'struct',
  },
  {
    members: [
      {
        name: 'registration_time_starts',
        offset: 0,
        type: 'felt',
      },
      {
        name: 'registration_time_ends',
        offset: 1,
        type: 'felt',
      },
      {
        name: 'number_of_registrants',
        offset: 2,
        type: 'Uint256',
      },
    ],
    name: 'Registration',
    size: 4,
    type: 'struct',
  },
  {
    members: [
      {
        name: 'time_starts',
        offset: 0,
        type: 'felt',
      },
    ],
    name: 'Distribution_Round',
    size: 1,
    type: 'struct',
  },
  {
    data: [
      {
        name: 'user_address',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'tokens_sold',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user_address',
        type: 'felt',
      },
      {
        name: 'winning_lottery_tickets',
        type: 'Uint256',
      },
      {
        name: 'amount_burnt',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'user_registered',
    type: 'event',
  },
  {
    data: [
      {
        name: 'new_price',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'token_price_set',
    type: 'event',
  },
  {
    data: [
      {
        name: 'allocation',
        type: 'Uint256',
      },
      {
        name: 'sold',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'allocation_computed',
    type: 'event',
  },
  {
    data: [
      {
        name: 'user_address',
        type: 'felt',
      },
      {
        name: 'amount',
        type: 'Uint256',
      },
    ],
    keys: [],
    name: 'tokens_withdrawn',
    type: 'event',
  },
  {
    data: [
      {
        name: 'sale_owner_address',
        type: 'felt',
      },
      {
        name: 'token_price',
        type: 'Uint256',
      },
      {
        name: 'amount_of_tokens_to_sell',
        type: 'Uint256',
      },
      {
        name: 'sale_end',
        type: 'felt',
      },
      {
        name: 'tokens_unlock_time',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'sale_created',
    type: 'event',
  },
  {
    data: [
      {
        name: 'registration_time_starts',
        type: 'felt',
      },
      {
        name: 'registration_time_ends',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'registration_time_set',
    type: 'event',
  },
  {
    data: [
      {
        name: 'purchase_time_starts',
        type: 'felt',
      },
      {
        name: 'purchase_time_ends',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'purchase_round_time_set',
    type: 'event',
  },
  {
    data: [
      {
        name: 'dist_time_starts',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'distribtion_round_time_set',
    type: 'event',
  },
  {
    data: [
      {
        name: 'new_ido_contract_address',
        type: 'felt',
      },
    ],
    keys: [],
    name: 'IDO_Created',
    type: 'event',
  },
  {
    inputs: [
      {
        name: '_admin_address',
        type: 'felt',
      },
    ],
    name: 'constructor',
    outputs: [],
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'get_ido_launch_date',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_current_sale',
    outputs: [
      {
        name: 'res',
        type: 'Sale',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'account',
        type: 'felt',
      },
    ],
    name: 'get_user_info',
    outputs: [
      {
        name: 'participation',
        type: 'Participation',
      },
      {
        name: 'tickets',
        type: 'Uint256',
      },
      {
        name: 'allocations',
        type: 'Uint256',
      },
      {
        name: 'is_registered',
        type: 'felt',
      },
      {
        name: 'has_participated',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_purchase_round',
    outputs: [
      {
        name: 'res',
        type: 'Purchase_Round',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_registration',
    outputs: [
      {
        name: 'res',
        type: 'Registration',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_distribution_round',
    outputs: [
      {
        name: 'res',
        type: 'Distribution_Round',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'portion_id',
        type: 'felt',
      },
    ],
    name: 'get_vesting_portion_percent',
    outputs: [
      {
        name: 'res',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'portion_id',
        type: 'felt',
      },
    ],
    name: 'get_vestion_portion_unlock_time',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'get_number_of_vesting_portions',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_unlocking_times_len',
        type: 'felt',
      },
      {
        name: '_unlocking_times',
        type: 'felt*',
      },
      {
        name: '_percents_len',
        type: 'felt',
      },
      {
        name: '_percents',
        type: 'Uint256*',
      },
      {
        name: '_max_vesting_time_shift',
        type: 'felt',
      },
    ],
    name: 'set_vesting_params',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_token_address',
        type: 'felt',
      },
      {
        name: '_sale_owner_address',
        type: 'felt',
      },
      {
        name: '_token_price',
        type: 'Uint256',
      },
      {
        name: '_amount_of_tokens_to_sell',
        type: 'Uint256',
      },
      {
        name: '_sale_end_time',
        type: 'felt',
      },
      {
        name: '_tokens_unlock_time',
        type: 'felt',
      },
      {
        name: '_portion_vesting_precision',
        type: 'Uint256',
      },
      {
        name: '_lottery_tickets_burn_cap',
        type: 'Uint256',
      },
    ],
    name: 'set_sale_params',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_sale_token_address',
        type: 'felt',
      },
    ],
    name: 'set_sale_token',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_registration_time_starts',
        type: 'felt',
      },
      {
        name: '_registration_time_ends',
        type: 'felt',
      },
    ],
    name: 'set_registration_time',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_purchase_time_starts',
        type: 'felt',
      },
      {
        name: '_purchase_time_ends',
        type: 'felt',
      },
    ],
    name: 'set_purchase_round_params',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_dist_time_starts',
        type: 'felt',
      },
    ],
    name: 'set_dist_round_params',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'amount',
        type: 'Uint256',
      },
      {
        name: 'account',
        type: 'felt',
      },
      {
        name: 'nb_quest',
        type: 'felt',
      },
    ],
    name: 'register_user',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [],
    name: 'calculate_allocation',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'tickets_burnt',
        type: 'Uint256',
      },
      {
        name: 'nb_quest',
        type: 'felt',
      },
    ],
    name: 'draw_winning_tickets',
    outputs: [
      {
        name: 'res',
        type: 'Uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'amount_paid',
        type: 'Uint256',
      },
    ],
    name: 'participate',
    outputs: [
      {
        name: 'res',
        type: 'felt',
      },
    ],
    type: 'function',
  },
  {
    inputs: [],
    name: 'deposit_tokens',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'portion_id',
        type: 'felt',
      },
    ],
    name: 'withdraw_tokens',
    outputs: [],
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'portion_ids_len',
        type: 'felt',
      },
      {
        name: 'portion_ids',
        type: 'felt*',
      },
    ],
    name: 'withdraw_multiple_portions',
    outputs: [],
    type: 'function',
  },
]

export const MULTICALL_ABI = [
  {
    inputs: [
      {
        name: 'calls_len',
        type: 'felt',
      },
      {
        name: 'calls',
        type: 'felt*',
      },
    ],
    name: 'aggregate',
    outputs: [
      {
        name: 'block_number',
        type: 'felt',
      },
      {
        name: 'result_len',
        type: 'felt',
      },
      {
        name: 'result',
        type: 'felt*',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export default {
  ZKP_TOKEN_ABI,
  XZKP_TOKEN_ABI,
  LOTTERY_TOKEN_ABI,
  FAUCET_ABI,
  IDO_CONTRACT_ABI,
  IDO_FACTORY_ABI,
  MULTICALL_ABI,
}
