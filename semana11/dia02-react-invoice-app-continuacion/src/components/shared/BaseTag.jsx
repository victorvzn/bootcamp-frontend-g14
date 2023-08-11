import React from 'react'

const BaseTag = ({ label, type }) => {
  return (
    <div className={`py-3 rounded-md text-center capitalize font-extrabold min-w-[120px] bg-${type}-400/20`}>
      <span className={`text-3xl mr-2 text-${type}-400`}>•</span>
      {label}
    </div>
  )
}

export default BaseTag