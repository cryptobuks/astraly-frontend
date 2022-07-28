import { NetworkStat, Sale } from './types'
import NetworkStatItem from './NetworkStatItem'
import NetworkStatsSale from './NetworkStatsSale'
import styles from './NetworkStats.module.scss'
import classnames from 'classnames'

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
          <div className={classnames(styles.StatsGrid, 'grid gap-6 mb-16 max-w-[1340px]')}>
            {stats.map((x, index) => (
              <NetworkStatItem {...x} key={index} />
            ))}
          </div>

          <h3 className="font-heading text-24 t-dark font-bold mb-11">Past Sales</h3>
          <div
            className={classnames(styles.StatSale, 'px-6 h-[66px] items-center text-12 font-bold')}>
            <div>Project Name</div>
            <div>IDO Token Price</div>
            <div>Current Price</div>
            <div>ATH</div>
            <div>No. Registrations</div>
            <div>Total Raised</div>
            <div>Total Tokens Sold</div>
            <div>Sale Ended At</div>
            <div className="text-right">ROI</div>
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
