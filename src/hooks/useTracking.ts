import { useCallback } from 'react'
import { track, TrackEvent } from 'utils/analytics'

export const MenuType = {
  TRANSFER: 'TRANSFER',
  SELECT_TOKEN: 'SELECT_TOKEN',
  ACCOUNT: 'ACCOUNT',
}

export const useTracking = (events: any) => {
  if (typeof events === 'string') {
    events = [events]
  }

  const trackEvent = useCallback((event) => (data: any) => track(event, data), [])

  return events.map(trackEvent, [events])
}

export const useMenuTracking = () => {
  const [trackAccountMenu, trackTransferMenu, trackSelectTokenMenu] = useTracking([
    TrackEvent.ACCOUNT_MENU,
    TrackEvent.TRANSFER_MENU,
    TrackEvent.SELECT_TOKEN_MENU,
  ])

  return useCallback((menu) => {
    switch (menu) {
      case MenuType.ACCOUNT:
        trackAccountMenu()
        break
      case MenuType.SELECT_TOKEN:
        trackSelectTokenMenu()
        break
      case MenuType.TRANSFER:
      default:
        trackTransferMenu()
        break
    }
  }, [])
}

export const useLoginTracking = () => {
  return useTracking([TrackEvent.LOGIN_SCREEN, ...Object.values(TrackEvent.LOGIN)])
}

export const useAccountTracking = () => {
  return useTracking([...Object.values(TrackEvent.ACCOUNT)])
}
