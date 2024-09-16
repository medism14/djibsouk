import React from 'react'
import PubLoading from './PubLoading';

export default function LeftPubCard() {
  return (
    <div className='absolute left-[0px] lg:w-[200px] bg-[--light-bold] h-full ml-[10px] rounded-lg pt-[30px]'>
      <PubLoading />
    </div>  
  )
}
