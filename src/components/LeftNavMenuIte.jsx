import React from 'react'

const LeftNavMenuIte = ({text, icon, className, action}) => {
  return (
    <div onClick={action} className={"text-white text-sm cursor-pointer h-10 flex items-center mb-[1px] rounded-lg hover:bg-white/[0.15] " + className}>
      
      <span className="text-xl ml-3 mr-5">{icon}</span>
      {text}
    </div>
  )
}

export default LeftNavMenuIte