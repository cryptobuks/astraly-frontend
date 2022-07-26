import React, { PropsWithChildren } from 'react'

const FaqItem: React.FC<PropsWithChildren<{ question: string }>> = ({ question, children }) => {
  return (
    <div className="FaqItem mb-6">
      <div className="question">{question}</div>
      <div className="response">{children}</div>
    </div>
  )
}

export default FaqItem
