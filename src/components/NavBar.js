import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import {motion} from "framer-motion";
import { useRouter } from 'next/router';
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon, MoonIcon } from './Icon';
import useThemeSwitcher from './hooks/useThemeSwitcher';

/**
 * CustomLink component for desktop navigation.
 * It receives href, title, and className as props.
 * @param {string} href - The URL to navigate to.
 * @param {string} title - The title or label for the link.
 * @param {string} className - Additional CSS classes for the link.
 * @returns JSX element representing a custom link for desktop navigation.
 */
const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

/**
 * CustomLinkMobile component for mobile navigation.
 * It receives href, title, className, and toggle as props.
 * @param {string} href - The URL to navigate to.
 * @param {string} title - The title or label for the link.
 * @param {string} className - Additional CSS classes for the link.
 * @param {function} toggle - Function to toggle the mobile navigation.
 * @returns JSX element representing a custom link for mobile navigation.
 */
const CustomLinkMobile = ({href, title, className="", toggle}) => {
    const router = useRouter();
  // Handle click event for navigation item
    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}> 
            {title}

            <span className={`
            h-[1px] inline-block bg-light  absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)
  // Handle click event for mobile navigation toggle
    const handleClick = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'
        >
                {/* Mobile navigation toggle */}
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick} >
                {/* Hamburger icon */}
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5 '}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className='w-full flex justify-between items-center lg:hidden'>
                {/* Desktop navigation */}
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4'/>
                    <CustomLink href="/about" title="About" className='mx-4'/>
                    <CustomLink href="/projects" title="Projects" className='mx-4'/>
                </nav>
                <nav className='flex items-center justify-center flex-wrap'> 
                {/* Social media icons */}
                    <motion.a href="https://github.com/ginsan11" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className='w-6 mx-3'
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/herv%C3%A9-mununu-a8aa94279/" target={"_blank"}
                    whileHover={{y:-2}}
                    whileTap={{scale:0.9}}
                    className='w-6 mx-3'
                    >
                        <LinkedInIcon />
                    </motion.a>
                {/* Theme switch button */}
                <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `}
                >
                {/* Toggle between sun and moon icons based on current mode */}
                    {
                        mode === "dark" ? 
                        <SunIcon className={"fill-dark"} />
                        : <MoonIcon className={"fill-dark"} />

                    }
                </button>
                
                </nav>
            </div>
            {/* Mobile navigation */}
            {
                isOpen ?
                
                <motion.div 
                initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
                animate={{scale:1, opacity:1}}
                className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
                '>
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomLinkMobile href="/" title="Home" className='' toggle={handleClick}/>
                        <CustomLinkMobile href="/about" title="About" className='' toggle={handleClick}/>
                        <CustomLinkMobile href="/projects" title="Projects" className='' toggle={handleClick}/>
                    </nav>
                    {/* Social media icons */}
                    <nav className='flex items-center justify-center flex-wrap mt-2'> 
                        <motion.a href="https://twitter.com" target={"_blank"}
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}
                        className='w-6 mr-3 sm:mx-1'
                        >
                            <TwitterIcon /> 
                        </motion.a>
                        <motion.a href="https://Github.com" target={"_blank"}
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}
                        className='w-6 mx-3 sm:mx-1 bg-light dark:bg-dark rounded-full'
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a href="https://Linkedin.com" target={"_blank"}
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}
                        className='w-6 mx-3 sm:mx-1'
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a href="https://Pinterest.com" target={"_blank"}
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}
                        className='w-6 mx-3 sm:mx-1 bg-light rounded-full'
                        >
                            <PinterestIcon />
                        </motion.a>
                        <motion.a href="https://Dribbble.com" target={"_blank"}
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}
                        className='w-6 ml-3 sm:mx-1'
                        >
                            <DribbbleIcon />
                        </motion.a>
                        {/* Theme switch button */}
                    <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
                    >
                         {/* Toggle between sun and moon icons based on current mode */}
                        {
                            mode === "dark" ? 
                            <SunIcon className={"fill-dark"} />
                            : <MoonIcon className={"fill-dark"} />

                        }
                    </button>
                    
                    </nav>
                </motion.div>
                
                : null
            }


            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
               <Logo /> 
            </div>
            </header>
    )
}

export default Navbar