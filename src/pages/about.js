import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        } 
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>HervéM | About Page</title>
            <meta name='description' content='any description I want' />
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText className="mb-16 lg:!text-2xl sm:!text-6xl xs:!text-4xl sm:mb-8" text="The secret of getting ahead is getting started!" />
                <div className='grid w-full grid-cols-8 gap-16 sm:gab-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me </h2>
                <p className='font-medium'>
                            Hi, I&apos;m Hervé, a web developer With 9+ years of experience in technology-focused roles.
                            My expertise encompasses a diverse range of technologies, 
                            including backend development with frameworks like node.js, efficient database management utilizing PostgresSQL/SQL 
                            and frontend design with HTML/CSS
                </p>
                        <p className='my-4 font-medium'>
                        I have honed my interpersonal skills through my participation in debate tournaments and winning sports championships. 
                        These experiences have enriched my aptitude for problem-solving, collaboration, composure during high-pressure, and communication of intricate concepts. 

                        </p>
                        <p className='font-medium'>
                            Whether I&apos;m working on a website, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward for the opportunity to be part of your team and bring passion and skills to your next project.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-8 border-solid border-dark
        border-l-2 border-t-2 border-r-6 border-b-6
                        bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]  bg-dark dark:bg-light' />
                        <Image src={profilePic} alt='Codebucks' className='w-full h-auto rounded-2 ' priority/>
                    </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={50} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm'>Satsfied Clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={9} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm'>Years in the tech industry</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={6} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of coding experience</h2>
                        </div>
                    </div>
                </div>
                <Skills/>
                <Experience/>
                <Education/>

            </Layout>
        </main>  
    </>
  )
}

export default about