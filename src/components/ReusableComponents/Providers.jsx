import React from 'react'
import googleProvider from "../../assets/googleProvider.png";
import facebookProvider from "../../assets/facebookProvider.png";

export default function Providers({ className }) {
  return (
    <div className={`flex justify-center space-x-[20px] ${className}`}>
      <img src={googleProvider} alt="Google provider" className="cursor-pointer w-[225px]" />
      <img src={facebookProvider} alt="Google provider" className="cursor-pointer w-[225px]" />
    </div>
  )
}
