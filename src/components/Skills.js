import React from 'react'
import {motion} from "framer-motion"

/**
 * Skill component represents an individual skill.
 * It receives name, x, and y as props.
 * @param {string} name - The name of the skill.
 * @param {string} x - The x-coordinate for positioning the skill.
 * @param {string} y - The y-coordinate for positioning the skill.
 * @returns JSX element representing an individual skill.
 */
const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark
        cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y, transition : {duration:1.5}}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

// Skills component represents the section displaying various skills
const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-skillsCircle dark:bg-skillsCircleDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-skillsCirclelg lg:dark:bg-skillsCircleDarklg
        md:bg-skillsCirclemd md:dark:bg-skillsCircleDarkmd
        sm:bg-skillsCirclesm sm:dark:bg-skillsCircleDarksm'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
            cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>
            {/* Render individual skill components */}
            <Skill name='CSS' x="-5vw" y="-10vw" />
            <Skill name='HTML' x="-20vw" y="2vw" />
            <Skill name='JavaScript' x="25vw" y="6vw" />
            <Skill name='ReactJS' x="0vw" y="12vw" />
            <Skill name='NextJS' x="0vw" y="-20vw" />
            <Skill name='TypeScript' x="22vw" y="-5vw" />
            <Skill name='SQL' x="-25vw" y="-10vw" />
            <Skill name='Tailwind/Bulma CSS' x="18vw" y="18vw" />
            <Skill name='Web Design' x="-15vw" y="18vw" />
            <Skill name='Python' x="15vw" y="-16vw" />
            <Skill name='Django' x="10vw" y="1vw" />
            <Skill name='Node.js' x="-35vw" y="-2vw" />



        </div>
    </>
  )
}

export default Skills