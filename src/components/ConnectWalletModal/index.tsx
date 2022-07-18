import { UnsupportedChainIdError, useStarknetReact } from '@web3-starknet-react/core'
import cx from 'classnames'
import React, { useEffect } from 'react'

import Modal from '../Modal'
import { SUPPORTED_WALLETS } from 'constants/wallet'

import styles from './styles.module.scss'

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET'

const Option = ({ onClick = null, header, icon, active = false }: any) => {
  return (
    <div onClick={onClick} className={cx(styles.option, active && styles.active)}>
      <img src={icon} className={styles.icon} alt="option-icon" />
      <div className={styles.header}>{header}</div>
    </div>
  )
}

const ConnectWalletModal = ({ visible, onClose }: any) => {
  const { activate, active, connector, error, deactivate } = useStarknetReact()

  const usePrevious = (a: any) => {
    return a
  }
  // close modal when a connection is successful
  const activePrevious = usePrevious(active)
  const connectorPrevious = usePrevious(connector)
  useEffect(() => {
    if (
      visible &&
      ((active && !activePrevious) || (connector && connector !== connectorPrevious && !error))
    ) {
      onClose()
    }
  }, [active, error, connector, visible, activePrevious, connectorPrevious])

  const tryActivation = async (connector: any) => {
    const conn = typeof connector === 'function' ? await connector() : connector

    Object.keys(SUPPORTED_WALLETS).map((key) => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        return SUPPORTED_WALLETS[key].name
      }
      return true
    })

    conn &&
      activate(conn, undefined, true).catch((error) => {
        console.log(error)
        if (error instanceof UnsupportedChainIdError) {
          activate(conn) // a little janky...can't use setError because the connector isn't set
        }
      })
  }

  const getOptions = () => {
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option: any = SUPPORTED_WALLETS[key]

      return (
        <Option
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            option.connector === connector ? null : tryActivation(option.connector)
          }}
          key={key}
          active={option.connector === connector}
          header={option.name}
          icon={option.icon}
        />
      )
    })
  }

  const getModalContent = () => {
    if (error instanceof UnsupportedChainIdError) {
      return (
        <div>
          <div className={styles.text}>Please connect to {isMainnet ? 'Ethereum' : 'Goerli'}.</div>
          <div>
            <div className={styles.switchBtn} onClick={deactivate}>
              Disconnect
            </div>
          </div>
        </div>
      )
    }
    return getOptions()
  }

  return (
    <Modal
      visible={visible}
      secondTitle={error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Choose a wallet '}
      desc={
        error instanceof UnsupportedChainIdError
          ? 'Please connect to Starknet'
          : 'Connect with one of our available wallet providers.'
      }
      onClose={onClose}
      small>
      {getModalContent()}
    </Modal>
  )
}

export default ConnectWalletModal
