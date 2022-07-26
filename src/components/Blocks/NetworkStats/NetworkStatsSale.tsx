import { Sale } from './types'
import React from 'react'

const NetworkStatsSale: React.FC<Sale> = (sale) => {
  return (
    <div className="NetworkStatsSale">
      <div className="icon"></div>
      <div className="name">
        {sale.name} {sale.tokenName}
      </div>
      <div className="token-price">{sale.idoPrice}</div>
      <div>{sale.currentPrice}</div>
      <div>{sale.ath}</div>
      <div>{sale.registrations}</div>
      <div>{sale.totalRaised}</div>
      <div>{sale.totalTokens}</div>
      <div>{sale.saleEnded}</div>
      <div>{Math.round(sale.currentPrice / sale.idoPrice)}</div>
    </div>
  )
}

export default NetworkStatsSale
