import { useStakingContract } from 'contracts'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

interface Stat {
  title: string
  value: string
}

const Stat = ({ title, value }: Stat) => {
  return (
    <div className="flex items-center gap-2 mx-3 mt-0.5">
      <p className="text-black text-12">{title}</p>
      <div className="text-primary text-12">{value}</div>
    </div>
  )
}

const StatsBar = () => {
  // const { account } = useStarknetReact()
  const [currentAPY, setCurrentAPY] = useState(0)
  const [zkpStaked, setZKPStaked] = useState('0')
  const [zkpLPStaked, setZKPLPStaked] = useState('0')

  const { getStakingAPY, getZKPStaked, getZKPLPStaked } = useStakingContract()

  const fetchAPY = async () => {
    try {
      const apr = await getStakingAPY()
      const num_periods = 365 // Compound Daily
      // console.log(apr)
      const apy = (1 + apr / num_periods) ** num_periods - 1
      // console.log(apy)
      setCurrentAPY(apr)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchTotalStaked = async () => {
    try {
      const zkp_staked = await getZKPStaked()
      setZKPStaked(zkp_staked)

      const zkpLP_staked = await getZKPLPStaked()
      setZKPLPStaked(zkpLP_staked)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchAPY()
    fetchTotalStaked()
  }, [])

  return (
    <div className="uppercase">
      <Marquee
        style={{
          background: 'white',
          width: '100vw',
          height: '24px',
        }}
        gradient={false}>
        <Stat title="Average APY" value={`${currentAPY.toFixed(3)} %`} />
        {/* <Stat title="Total Value Staked" value="$ xxx" /> */}
        <Stat title="ASTR Staked" value={`${Number(zkpStaked).toFixed(2)} ASTR`} />
        <Stat title="ASTR-LP Staked" value={`${Number(zkpLPStaked).toFixed(2)} ASTR-LP`} />
        {/* <Stat title="Unique Stakers" value="20,000" /> */}
        <Stat title="Average APY" value={`${currentAPY.toFixed(3)} %`} />
        {/* <Stat title="Total Value Staked" value="$ x" /> */}
        <Stat title="ASTR Staked" value={`${Number(zkpStaked).toFixed(2)} ASTR`} />
        <Stat title="ASTR-LP Staked" value={`${Number(zkpLPStaked).toFixed(2)} ASTR-LP`} />
        {/* <Stat title="Unique Stakers" value="20,000" /> */}
        <Stat title="Average APY" value={`${currentAPY.toFixed(3)} %`} />
        {/* <Stat title="Total Value Staked" value="$ x" /> */}
        <Stat title="ASTR Staked" value={`${Number(zkpStaked).toFixed(2)} ASTR`} />
        <Stat title="ASTR-LP Staked" value={`${Number(zkpLPStaked).toFixed(2)} ASTR-LP`} />
        {/* <Stat title="Unique Stakers" value="20,000" /> */}
      </Marquee>
    </div>
  )
}

export default StatsBar
