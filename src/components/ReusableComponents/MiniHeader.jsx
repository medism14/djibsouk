import React from 'react'
import logo from "../../assets/djibsouk.png"

export default function MiniHeader() {
  return (
    <div className="bg-[--light] border border-2 border-[--text-color] flex justify-center py-[5px]">
        <img src={logo} alt="Logo" className="w-[100px]" />
    </div>
  )
}
