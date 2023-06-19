import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    const splitWork = work.split('\n').map(str => <p className=' font-meidum w-full md:text-sm' >{str} </p> );

    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
         <motion.div
         initial={{y:50}}
         whileInView={{y:0}}
         transition={{duration:0.5, type:"spring"}}
         >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
                <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <div className='flex flex-col pt=12'> 
                {splitWork}
            </div>

        </motion.div>
    </li>)
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref} className='w-[75] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top0 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '>
                <Details 
                position='Senior Software Technical Support Specialist' 
                company='Itracks'
                companyLink='https://www.itracks.com'
                time='2016-Present'
                address='Saskatoon, Sk'
                work={'I delivered comprehensive live and asynchronous technical support for all itracks software applications. Collaborated closely with clients to ensure seamless project setup and adaptation using in house software/solutions. Actively participated in all recent software testing and evaluation initiatives. \n- Developed client satisfaction evaluation tool with regular reporting, enhancing user experience \n- Recognized as Operations Employee of the Year for outstanding dedication and performance.'}
                />
                <Details 
                position='Intern (contract)' 
                company='Association jeunesse Fransaskois'
                companyLink='https://www.ajf.ca'
                time='2015-2016'
                address='Saskatoon, Sk'
                work={'Spearheaded the planning and implementation of core programs and experiences for youth and community members. Designed and delivered impactful workshops. Created compelling media content to promote and advertise organization events \n- Established efficient workflows that became the standard operating procedures within the organization. \n- Recognized for outstanding work in the community, requested for TV interviews to showcase contributions.'}
                />
                <Details 
                position='Computer specialist' 
                company='Lond Drugs'
                companyLink='https://www.londondrugs.com'
                time='2013-2015'
                address='Saskatoon, Sk'
                work={'Provided exceptional sales and assistance for computer products, peripheral devices, and audio/video equipment, ensuring customer satisfaction both over the phone and in-store. Offered technical services to customers, troubleshooting and resolving issues effectively. Offered over the phone and in stores technical services. \n- Demonstrated a strong sales track record, leading to the opportunity to sell high-ticket audio/video equipment. \n '}
                />
            </ul>
        </div>
    </div>

  )
}

export default Experience