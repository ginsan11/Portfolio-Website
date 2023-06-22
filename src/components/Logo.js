import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion";

// MotionLink is a motion-enhanced version of the Link component
const MotionLink = motion(Link);

// Logo component represents the logo element
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
    <MotionLink href="/"
    className='w-16 h-16 bg-dark text-light flex items-center justify-center
    rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light
    '
    whileHover={{
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:1, repeat: Infinity}
    }}
    >
    HM</MotionLink>
    </div>
  )
}

export default Logo