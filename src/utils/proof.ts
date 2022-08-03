import { number } from 'starknet'
import Web3 from 'web3'
import { provider } from 'web3-core';

export const createProofData = async (
  blockNumber = 14987112,
  tokenAddress = '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
  tokenBalanceMin: number.BigNumberish,
  publicEthAddress: string,
  privateEthAddress: string,
  l2AccountAddress: string,
  rpcProvider: provider
): Promise<any> => {
  try {
    const w3 = new Web3(rpcProvider) // Inject browser provider (user wallet)

    const slot = String(0).padEnd(64, '0')
    const key = privateEthAddress.slice(2).padEnd(64, '0').toLowerCase()
    const position = w3.utils.keccak256(key + slot)
    const block = await w3.eth.getBlock(blockNumber)
    const proof = await w3.eth.getProof(tokenAddress, [position], blockNumber)
    const balance = await w3.eth.getStorageAt(tokenAddress, position)

    console.log('Generating proof of balance', balance)

    // Sign a message demonstrating control over the storage slot
    // Pad the message with zeros to align 64bit word size in Cairo
    const stateRoot = w3.utils.toHex(block.stateRoot)
    const storageKey = w3.utils.toHex(proof['storageProof'][0]['key']).slice(2)

    l2AccountAddress = l2AccountAddress.startsWith('0x')
      ? l2AccountAddress.slice(2)
      : l2AccountAddress
    const msg = `000000000000000000000000000000${publicEthAddress.slice(2)}${stateRoot.slice(
      2
    )}${storageKey}00000000${l2AccountAddress}`

    // TODO: sign with connected account
    const signedMessage = await w3.eth.sign(msg, w3.defaultAccount as string)

    const return_proof: any = { ...proof }
    return_proof['blockNumber'] = blockNumber
    return_proof['publicEthAddress'] = publicEthAddress
    return_proof['tokenBalanceMin'] = tokenBalanceMin
    return_proof['stateRoot'] = stateRoot
    return_proof['storageSlot'] = slot
    return_proof['signature'] = {
      message: '0x' + msg,
      messageHash: w3.utils.toHex(signedMessage || '')
    }

    return return_proof
  } catch (error) {
    console.error(error)
    return false
  }
}
