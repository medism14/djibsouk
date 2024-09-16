import React from 'react'
import PubLoading from './PubLoading'

export default function LeftPubCard() {
  return (
    <div className='absolute right-[0px] lg:w-[200px] bg-[--light-bold] h-full mr-[10px] rounded-lg pt-[30px]'>
      <PubLoading />
    </div>
  )
}
