import splitbee from '@splitbee/web'
import { getLogger } from './logger'

export const TrackEvent = {
  /**
   * Menus
   */
  SELECT_TOKEN_MENU: 'SELECT_TOKEN_MENU',
  ACCOUNT_MENU: 'ACCOUNT_MENU',
  TRANSFER_MENU: 'TRANSFER_MENU',

  /**
   * Account menu
   */
  ACCOUNT: {
    TX_LINK_CLICK: 'ACCOUNT_MENU/tx_link_click',
    ACCOUNT_LINK_CLICK: 'ACCOUNT_MENU/account_link_click',
    VIEW_TRANSFERS_LOG: 'ACCOUNT_MENU/view_transfers_log',
    COMPLETE_TRANSFER_CLICK: 'ACCOUNT_MENU/complete_transfer',
    ADDRESS_COPIED: 'ACCOUNT_MENU/address_copied',
  },

  /**
   * Login screen
   */
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  LOGIN: {
    DOWNLOAD_CLICK: 'LOGIN_SCREEN/download_click',
    WALLET_CLICK: 'LOGIN_SCREEN/wallet_click',
    LOGIN_ERROR: 'LOGIN_SCREEN/login_error',
  },

  /**
   * Tabs
   */
  DISCORD_TAB_CLICK: 'discord_tab_click',
}

const logger = getLogger('Analytics')

export const track = async (event: any, data: any) => {
  logger.debug('Sending track event...', { event, data })
  await splitbee.track(event, data)
  logger.debug('Track event sent.')
}

export const setUser = async (data: any) => {
  logger.debug('Set user', data)
  await splitbee.user.set(data)
}
