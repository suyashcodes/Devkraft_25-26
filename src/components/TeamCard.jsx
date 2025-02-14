import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TeamCard = ({ image, redirectLink, text, name, role }) => {

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
            backgroundColor: role ? '#fff' : '#fff0',
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
            scale: 1,
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
            className='w-[300px] m-auto rounded-[30px]  flex flex-col justify-start items-center gap-y-[10px] cursor-pointer'
            variants={cardVariants}
            initial={'initial'}
            whileHover={'whileHover'}
        >
            <div className='w-[250px] h-[280px]'>
                <motion.img className=' w-full h-full object-cover rounded-[20px]' src={image || '/icons/placeholder_profile.png'} alt=""
                    variants={imageVariants}
                    loading='lazy'
                />
            </div>
            <div className='text-[18px]  w-full text-left items-begin px-[10px] flex flex-col justify-between gap-[10px]'>
                <p className='text-orange-600'>{name}</p>
                {role && <p className='rounded-md text-[13px] p-[2px] w-fit bg-orange-500'>{role}</p>}
            </div>
            {/* <p className='text-[13px] w-full  text-left px-[10px]'>{text}</p> */}

            <div className={`flex relative  w-full items-center justify-end gap-[5px] mt-[20px] `}>
                <motion.div
                    className='bg-white w-[57px] h-[3px] rounded-[20px]'
                    variants={decorationVariants}
                ></motion.div>

                <motion.div
                    className='bg-white w-[10px] h-[3px] rounded-[20px]'
                    variants={decorationVariants}
                ></motion.div>

                {/* <motion.div
                    className='absolute bottom-[10px] text-orange-700 right-0 text-[12px] cursor-pointer'
                    href={redirectLink}
                    variants={learnMoreVariants}
                ><Link to={redirectLink} target='_blank' >li</Link> </motion.div> */}
            </div>

        </motion.div>
    )
}

export default TeamCard
