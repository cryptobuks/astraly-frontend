import { NetworkStat } from './types'
import React from 'react'

const NetworkStatItem: React.FC<NetworkStat> = (stat) => {
  return (
    <div className="NetworkStatItem">
      <div className="title">{stat.title}</div>
      <div className="amount">{stat.amount}</div>
    </div>
  )
}

export default NetworkStatItem
