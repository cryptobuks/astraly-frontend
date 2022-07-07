import { Contracts } from 'constants/networks'
import useContract from 'hooks/useContract'
import { AccountInterface, Call, number, validateAndParseAddress } from 'starknet'
import { toFelt } from 'starknet/dist/utils/number'
import { parseInputAmountToUint256ExecuteCall } from 'utils'
// import { parseInputAmountToUint256, parseInputAmountToUint256ExecuteCall } from 'utils'

import { IDO_FACTORY_ABI, IDO_CONTRACT_ABI } from './abi'
// import {getHigherGWEI} from 'utils';

const isMainnet = process.env.REACT_APP_ENV === 'MAINNET'
const CHAIN = isMainnet ? 'SN_MAIN' : 'SN_GOERLI'

export const useIDOContract = () => {
  const { getContract } = useContract()

  const getIDOFactoryContract = async () => getContract(Contracts[CHAIN].factory, IDO_FACTORY_ABI)

  const getIDOContract = async (id: number.BigNumberish) => {
    const factory = await getIDOFactoryContract()

    const _idoAddress = await factory.call('get_ido_address', [toFelt(id)])
    const _address = validateAndParseAddress(_idoAddress.address)

    return getContract(_address, IDO_CONTRACT_ABI)
  }

  const getUserInfo = async (address: string | undefined, id: number.BigNumberish) => {
    const contract = await getIDOContract(id)

    return await contract.call('get_user_info', [address])
  }

  const getNumberVestingPortions = async (id: number.BigNumberish) => {
    const contract = await getIDOContract(id)

    return await contract.call('get_number_of_vesting_portions', [])
  }

  const getVestingPercent = async (id: number.BigNumberish, portionId: number.BigNumberish) => {
    const contract = await getIDOContract(id)

    return await contract.call('get_vesting_portion_percent', [portionId])
  }

  const getVestingUnlockTime = async (id: number.BigNumberish, portionId: number.BigNumberish) => {
    const contract = await getIDOContract(id)

    return await contract.call('get_vestion_portion_unlock_time', [portionId])
  }

  const withdrawTokens = async (id: number.BigNumberish, portionIds: number.BigNumberish[]) => {
    const contract = await getIDOContract(id)

    if (portionIds.length === 1) {
      return await contract.invoke('withdraw_tokens', [toFelt(portionIds[0])])
    } else {
      return await contract.invoke('withdraw_multiple_portions', [portionIds.map((i) => toFelt(i))])
    }
  }

  const claimNFTs = async (id: number.BigNumberish) => {
    const contract = await getIDOContract(id)

    return await contract.invoke('withdraw_tokens', [])
  }

  const getCurrentSale = async (id: number.BigNumberish) => {
    const contract = await getIDOContract(id)

    return await contract.call('get_current_sale', [])
  }

  const participate = async (
    amount: string,
    id: number.BigNumberish,
    account: AccountInterface
  ) => {
    const contract = await getIDOContract(id)

    const _approveTx: Call = {
      contractAddress: Contracts[CHAIN].eth,
      entrypoint: 'approve',
      calldata: [contract.address, ...parseInputAmountToUint256ExecuteCall(amount)],
    }

    const _depositTx: Call = {
      contractAddress: contract.address,
      entrypoint: 'participate',
      calldata: [...parseInputAmountToUint256ExecuteCall(amount)],
    }

    return await account.execute([_approveTx, _depositTx])
  }

  return {
    getUserInfo,
    participate,
    getCurrentSale,
    withdrawTokens,
    getNumberVestingPortions,
    getVestingPercent,
    getVestingUnlockTime,
    claimNFTs,
  }
}
