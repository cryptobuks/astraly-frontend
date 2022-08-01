import { ethers } from 'ethers'
import { Provider } from 'starknet'
import { number } from 'starknet'
import Web3 from 'web3'

const isMainnet = process.env.REACT_APP_ENV === 'MAINNET'

const networkName = isMainnet ? 'mainnet-alpha' : 'goerli-alpha'
const provider = new Provider({ network: networkName })

export const createProofData = async (
  blockNumber = 14987112,
  tokenAddress = '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
  tokenBalanceMin: number.BigNumberish,
  publicEthAddress: string,
  privateEthAddress: string,
  rpcHttp: string
): Promise<any> => {
  try {
    const w3 = new Web3(new Web3.providers.HttpProvider(rpcHttp))

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

    const msg = `"000000000000000000000000000000${publicEthAddress.slice(2)}${stateRoot.slice(
      2
    )}${storageKey}00000000"`
    // TODO: sign with connected account
    const signedMessage = w3.eth.accounts.sign(msg, '0x')

    const return_proof: any = { ...proof }
    return_proof['blockNumber'] = blockNumber
    return_proof['publicEthAddress'] = publicEthAddress
    return_proof['tokenBalanceMin'] = tokenBalanceMin
    return_proof['stateRoot'] = stateRoot
    return_proof['storageSlot'] = slot
    return_proof['signature'] = {
      message: '0x' + msg,
      messageHash: w3.utils.toHex(signedMessage.messageHash || ''),
      r: signedMessage.r,
      s: signedMessage.s,
      v: signedMessage.v,
    }

    return return_proof
  } catch (error) {
    console.error(error)
    return false
  }
}
