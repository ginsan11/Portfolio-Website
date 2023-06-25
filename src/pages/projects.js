import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icon'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/SLongC.png"
import project2 from "../../public/images/projects/YXEHomePage.png"
import project3 from "../../public/images/projects/UnityGP.png"
import diff from "../../public/images/projects/diff.png"
import blender from "../../public/images/projects/blender.png"
import { motion } from 'framer-motion'
import {Article} from './articles'
import { useState } from 'react'
import ImgSlider from '@/components/imgSlider'


const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github, srcset}) => {
    const [trigger, setTrigger] = useState(false)


    return (
        <article className='rounded-br-2xl w-full flex items-center justify-between rounded-3xl border-8 border-solid border-dark
        border-l-2 border-t-2 border-r-6 border-b-6 bg-light dark:border-light dark:bg-dark shadow-2x1 p-12 relative
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light' />
            <button onClick={() => setTrigger(true)}
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </button>
            <ImgSlider trigger={trigger} setTrigger={setTrigger} srcset = {srcset}/>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>

                <p className='sm:text-sm my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link className='w-10' href={github} target='_blank'><GithubIcon /> </Link>
                    {/*<Link
                        className='sm:px-4 sm:text-base ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold'
    href={link} target='_blank'>Visit Project</Link>*/}

                </div>



            </div>

        </article>
    )

}


const Project = ({type, title, img, link, github}) => {
    return (

        <article className='w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative
        dark:bg-dark dark:border-light xs:p-4'>
            <div className='md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] rounded-br-3xl absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>


                <div className='w-full mt-2 flex items-center justify-between dark:text-light'>

                    <Link
                        className='md:text-base text-lg font-semibold underline dark:text-light'
                        href={link}
                        target='_blank'>
                        Visit
                    </Link>
                    <Link className='w-8 md:w-6' href={github} target='_blank'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>

        </article>
    )
  }
  


const projects = () => {


    const set1 = [
        { src: "https://i.imgur.com/gX3s31m.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/3If7lKo.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/qQxAATo.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/wFgdvwl.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/gkPHScF.png", width: 2048, height: 1365 }
    ]

    const set2 = [
        { src: "https://i.imgur.com/Nm2dhpw.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/eaCDyhX.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/x4BtQNb.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/qkcYrS8.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/t2lEAuE.png", width: 2048, height: 1365 }
    ]

    const set3 = [
        { src: "https://i.imgur.com/q33JRuY.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/dWlOXop.png", width: 2048, height: 1365 },
        { src: "https://i.imgur.com/Z5ELseR.png", width: 2048, height: 1365 }
    ]

    const set4 = [    {
        type: "video",
        width: 1920,
        height: 1080,
        sources: [
          {
            src: "https://drive.google.com/uc?export=download&id=1gTy9XFR-8_Grr6YCBXUxGMuRvFxJixB3",
            type: "video/mp4"
          }
        ]
    },
    { src: "https://i.imgur.com/q7wji2s.png", width: 2048, height: 1365 },
    { src: "https://i.imgur.com/QfTd8EG.png", width: 2048, height: 1365 },
    { src: "https://i.imgur.com/shaiByA.png", width: 2048, height: 1365 }

    ]
    const set5 = [    {
        type: "video",
        width: 1920,
        height: 1080,
        sources: [
          {
            src: "https://drive.google.com/uc?export=download&id=1kw9rNa2CgEXzhbA4k05npqvcGFvkNa8z",
            type: "video/mp4"
          }
        ]
    },
    {
        type: "video",
        width: 1920,
        height: 1080,
        sources: [
          {
            src: "https://drive.google.com/uc?export=download&id=1-YQJ8XhvGKXlzzbQLe3LKf4mFcbhC8Qi",
            type: "video/mp4"
          }
        ]
    }
    ]

    return (
        <>
            <Head>
                <title>HervéM | Projects Page </title>
                <meta name='description' content='about us' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>

                <Layout className='pt-16'>
                    <AnimatedText text="Dream big and dare to fail!"
                        className='mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '
                    />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title={"Sask Long Covid (Node/React)"}
                                summary="The Sask Long COVID project spearheaded by Professor/Shareholder Nathaniel Osgood, aimed to provide users access to a medical history of their Long Covid Symtpoms. 
                                I developed a Postgres SQL backend for handling user login and medical data, implementing security measures against potential attacks like SQL injections. Leveraging TypeScript, the backend facilitated secure login, data formatting, password encryption, and a user registration system. The frontend was built using React and HTML. Every element of the application has a container setup for its use. **Only early version available**"
                                img={project1}
                                github={"https://gitfront.io/r/user-8776012/w7sgf9Rkj7b9/LongCovidApp/"}
                                link="https://gitfront.io/r/user-8776012/w7sgf9Rkj7b9/LongCovidApp/"
                                srcset={set1}
                                type={"Featured Project"}
                            />
                        </div>

                        <div className='col-span-12 sm:col-span-12'>
                            <FeaturedProject title={"YXE Food Bank (Django)"}
                                img={project2}
                                github={"https://github.com/ginsan11/yxefoodbank"}
                                summary="The YXE Food Bank project, is virtual Food Bank website crafted using Python (Django), JavaScript, HTML, and Bulma CSS. Featured a registration and login system, fortified with Django's Token Authentication system. Users can add items to their cart, place orders, and even access their order history. The website also includes a comprehensive admin management system. To facilitate seamless payment processing, Stripe integration was implemented using a dummy API key."
                                link="https://github.com/ginsan11/yxefoodbank"
                                srcset={set2}
                                type={"Featured Project"} />
                        </div>

                        <div className='col-span-12 sm:col-span-12'>
                            <FeaturedProject title={"Crossy Road game made in Unity with C#"}
                                img={project3}
                                summary="The Three-dimensional Crossy Road project, is a game developed using C# and the Unity engine. This game features procedurally generated maps and levels, accompanied by a customized physics system tailored to enhance gameplay. I implemented enemy behavior logic, enabling responsive reactions to the dynamically changing environment. Although the project remains unfinished, it serves as a testament to my versatility and proficiency in working with diverse programming languages such as C#. "
                                github={"https://github.com/ginsan11/SPK"}
                                link="/"
                                srcset={set3}
                                type={"Featured Project"} />
                        </div>
                    </div>
                    <h2 className='font-bold text-4xl w-fill text-center my-16 mt-32 dark:text-light'>Other Digital Hobbies/Interests</h2>
                    <ul>
                        <Article
                        title="Working on AI stable diffusion, and achieving consistent frame to frame rendering. I've also trained a model on myself using various methods."
                        date=''
                        srcset={set4}
                        link='/'
                        img={diff}
                        />
                        <Article
                        title='Self-taught blender video animation, and have completed a couple projects'
                        date=''
                        srcset={set5}
                        link='/'
                        img={blender}
                        />
                        <Article
                        title='Self-taught music production and have  produced a couple tracks for local artists'
                        date=''
                        link='/'
                        />
                    </ul>
                </Layout>


            </main>
        </>
    )
}

export default projects