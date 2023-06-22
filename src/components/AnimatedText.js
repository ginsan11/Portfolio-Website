import React from "react";
import {motion} from "framer-motion";

// Define the animation variants for the quote container
const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren: 0.08, 
        }
    }
}

// Define the animation variants for a single word
const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1, 
        }
    }
}

// AnimatedText component receives text and className as props
const AnimatedText = ({text, className=""}) => {
    return(
        <div className= 'w-full mx-auto py-2 items-center justify-center text-center overflow-hidden sm:py-0'>
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
            variants={quote}
            initial="initial"
            animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                    <motion.span key={word+'-'+index} className="inline-block"
                    variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText