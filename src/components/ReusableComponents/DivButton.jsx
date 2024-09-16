import React from 'react'

export default function DivButton({ width, icon, name, className, onClick }) {
  return (
    <div onClick={onClick} className={`${width == "full" ? 'w-full' : "w-auto"} flex space-x-[10px] justify-center items-center rounded-lg bg-[--secondary] text-base transition-all duration-300 hover:bg-[--secondary-modif] cursor-pointer ${className}`}>
      {icon}
      <span className="font-[700]">{name}</span>
    </div>
  )
}
