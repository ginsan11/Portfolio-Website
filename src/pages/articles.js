import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import { motion, useMotionValue } from 'framer-motion'
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import article4 from "../../public/images/articles/smooth scrolling in reactjs.png"
import article5 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png"
import { useState } from 'react'
import ImgSlider from '@/components/imgSlider'




const FramerImage = motion(Image);

/**
 * MovingImg component represents a moving image.
 * It receives title, img, link, and srcset as props.
 * @param {string} title - The title of the image.
 * @param {string} img - The source URL of the image.
 * @param {string} link - The link URL of the image.
 * @param {Array} srcset - The array of source URLs for the image.
 * @returns JSX element representing a moving image.
 */
const MovingImg = ({title, img, link, srcset}) => {

    const [trigger, setTrigger] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(evemt){
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }

    function handleMouseLeave(evemt){
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)    
    }

    return (
    <div>
        <button onClick={() => setTrigger(true)}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
            style={{x:x, y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration: 0.2}}}
            priority
            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg'/>
        </button>
        <ImgSlider trigger={trigger} setTrigger={setTrigger} srcset = {srcset}/>
    </div>


    )
}

/**
 * Article component represents an individual article.
 * It receives img, title, date, link, and srcset as props.
 * @param {string} img - The source URL of the article image.
 * @param {string} title - The title of the article.
 * @param {string} date - The date of the article.
 * @param {string} link - The link URL of the article.
 * @param {Array} srcset - The array of source URLs for the article image.
 * @returns JSX element representing an individual article.
 */
export const Article = ({img, title, date, link, srcset}) => {
    return (
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light'
        >
            <MovingImg title={title} img={img} link={link} srcset={srcset} />
            <span className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
        </motion.li>
    )
}

/**
 * FeaturedArticle component represents a featured article.
 * It receives img, title, time, summary, and link as props.
 * @param {string} img - The source URL of the featured article image.
 * @param {string} title - The title of the featured article.
 * @param {string} time - The time required to read the featured article.
 * @param {string} summary - The summary of the featured article.
 * @param {string} link - The link URL of the featured article.
 * @returns JSX element representing a featured article.
 */
const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl
        border-r-8 border-b-8
        dark:border-light dark:bg-dark dark:text-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
            <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                />
            </Link>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'> {title}  </h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
    const set1 = [
        { src: "https://i.imgur.com/Nm2dhpw.png"},
        { src: "https://i.imgur.com/eaCDyhX.png"},
        { src: "https://i.imgur.com/x4BtQNb.png"},
        { src: "https://i.imgur.com/qkcYrS8.png"},
        { src: "https://i.imgur.com/t2lEAuE.png"}
    ]
    
  return (
    <>
        <Head>
        <title>HervéM | Article Page</title>
        <meta name='description' content='any description I want' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World! " className='mb-16'/>
                <ul className='grid grid-cols-2 gap-16'>
                    <FeaturedArticle
                    img={article1}
                    title='Build A Custom Pagination Component In Reactjs From Scratch'
                    summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                    time='9 min read'
                    link='/'
                    />
                    <FeaturedArticle
                    img={article2}
                    title='Build A Custom Pagination Component In Reactjs From Scratch'
                    summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                    time='9 min read'
                    link='/'
                    />
                </ul>
                <h2 className='font-bold text-4xl w-fill text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <Article
                    title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                    date='March 22, 2023'
                    srcset={set1}
                    link='/'
                    img={article3}
                    />
                    <Article
                    title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                    date='March 22, 2023'
                    srcset={set1}
                    link='/'
                    img={article4}
                    />
                    <Article
                    title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                    date='March 22, 2023'
                    link='/'
                    img={article5}
                    />
                    <Article
                    title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                    date='March 22, 2023'
                    srcset={set1}
                    link='/'
                    img={article6}
                    />
                </ul>
            </Layout>

        </main>
    </>
  )
}

export default articles