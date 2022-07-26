import { NetworkStat, Sale } from './types'
import NetworkStatItem from './NetworkStatItem'
import NetworkStatsSale from './NetworkStatsSale'

const stats: NetworkStat[] = [
  {
    title: 'Successful Sales',
    amount: '12',
  },
  {
    title: 'Raised on Astraly',
    amount: '$20,498,468',
  },
  {
    title: 'Total $ASTR Raised',
    amount: '21,475 ASTR',
  },
  {
    title: 'Total Participants',
    amount: '3232',
  },
  {
    title: 'Registered Users',
    amount: '22,323',
  },
  {
    title: 'Total KYCs',
    amount: '$20,498,468',
  },
  {
    title: 'Registered ZK Validators',
    amount: '475',
  },
  {
    title: 'Verified Wallets',
    amount: '1234',
  },
]

const sales: Sale[] = [
  {
    icon: '',
    name: 'ZKLend',
    tokenName: 'ZKL',
    idoPrice: 0.02,
    currentPrice: 0.12,
    ath: 'TBA',
    registrations: 1232,
    totalRaised: '$2,203,32',
    totalTokens: '5,000,000',
    saleEnded: '5,000,000',
  },
  {
    icon: '',
    name: 'ZKLend',
    tokenName: 'ZKL',
    idoPrice: 0.02,
    currentPrice: 0.12,
    ath: 'TBA',
    registrations: 1232,
    totalRaised: '$2,203,32',
    totalTokens: '5,000,000',
    saleEnded: '5,000,000',
  },
  {
    icon: '',
    name: 'ZKLend',
    tokenName: 'ZKL',
    idoPrice: 0.02,
    currentPrice: 0.12,
    ath: 'TBA',
    registrations: 1232,
    totalRaised: '$2,203,32',
    totalTokens: '5,000,000',
    saleEnded: '5,000,000',
  },
]

const NetworkStatsBlock = () => {
  return (
    <div className="ui-page-block">
      <div className="g-container">
        <h2 className="t-block-title t-dark">Network Stats</h2>
        <div className="ml-10">
          <div className="grid">
            {stats.map((x, index) => (
              <NetworkStatItem {...x} key={index} />
            ))}
          </div>

          {sales.map((x, index) => (
            <NetworkStatsSale {...x} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NetworkStatsBlock
