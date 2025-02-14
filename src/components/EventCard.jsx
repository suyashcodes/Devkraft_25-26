import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EventCard = ({ image, redirectLink, text, name }) => {

    const [width, setWidth] = useState(window.innerWidth)

    function handleResize() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    

    const cardVariants = {
        initial: {
            backgroundColor: '#fff0',
            scale: 1,
            padding: '20px',
            color: 'white'
        },
        whileHover: {
            backgroundColor: '#fff',
            padding: '20px',
            scale: 1.03,
            color: 'black'
        }
    }

    const decorationVariants = {
        initial: {
            backgroundColor: width <= 600 ? '#282523' : '#fff',
        },
        whileHover: {
            backgroundColor: '#282523',
        }
    }


    const learnMoreVariants = {
        initial: {
            scale: width > 600 ? 0 : 1,
        },
        whileHover: {
            scale:  1,
            x: -2
        }
    }


    const imageVariants = {
        initial: {
            scale: 1,
            x: 0
        },
        whileHover: {
            scale: 1.03,
            x: -15,
            y: -10,
            boxShadow: '0px 0px 30px 4px #000'
        }
    }


    return (
        <motion.div
            className='w-[450px] rounded-[30px]  flex flex-col justify-start items-center gap-y-[20px] cursor-pointer'
            variants={cardVariants}
            initial={'initial'}
            whileHover={'whileHover'}
        >
            <p className='text-[18px]  w-full text-left px-[10px] text-orange-500'>{name}</p>
            <div className='w-full max-w-[450px] h-[450px]'>
                <motion.img className='object-contain w-full h-full rounded-[20px] bg-black' src={image} alt="" 
                    variants={imageVariants}
                />
            </div>
            <p className='text-[13px] w-full min-h-[170px] text-center px-[10px]'>{text}</p> 

            <div className={`flex relative  w-full items-center justify-end gap-[10px] ${width <= 600 ? 'mt-[20px]': ''} `}>
                <motion.div
                    className='bg-white w-[57px] h-[3px] rounded-[20px]'
                    variants={decorationVariants}
                ></motion.div>

                <motion.div
                    className='bg-white w-[10px] h-[3px] rounded-[20px]'
                    variants={decorationVariants}
                ></motion.div>

                <motion.div
                    className='absolute bottom-[10px] text-orange-700 right-0 text-[12px] cursor-pointer'
                    href={redirectLink}
                    variants={learnMoreVariants}
                ><Link to={redirectLink} target='_blank' >Learn more</Link> </motion.div>
            </div>

        </motion.div>
    )
}




export default EventCard
