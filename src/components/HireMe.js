import React from 'react'
import { CircularText} from './Icon';
import Link from 'next/link';



export const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4
    flex  items-center justify-center overflow-hidden  md:right-8 md:left-auto md:top-0 md:bottom-auto
    md:absolute sm:right-0
    '>
      <div className='w-48 h-auto flex items-center justify-center relative
      '>
        <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />
        <Link href="mailto:hervmun@gmail.com" className='flex items-center justify-center 
        asbolute -translate-x-24 w-16 h-16 rounded-full shrink-0 grow-0  text-center
         bg-dark text-light shadow-md border border-solid border-dark
          font-semibold hover:bg-light hover:text-dark
         dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
         '>
          Hire me
        </Link>
      </div>
    </div>
  )
}
 