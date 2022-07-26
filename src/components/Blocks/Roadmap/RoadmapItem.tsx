import React, { PropsWithChildren } from 'react'

const RoadmapItem: React.FC<PropsWithChildren<{ date: string; title: string }>> = ({
  date,
  title,
  children,
}) => {
  return (
    <div className="RoadmapItem flex mb-16">
      <div className="left font-heading text-right w-[320px]">
        <div className="date text-16">{date}</div>
        <div className="title text-24 t-dark">{title}</div>
      </div>
      <div className="separator"></div>
      <div className="content">{children}</div>
    </div>
  )
}

export default RoadmapItem
