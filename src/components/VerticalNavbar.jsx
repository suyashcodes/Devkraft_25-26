import React from 'react'
import { motion } from 'framer-motion'

const VerticalNavbar = ({ colors, links }) => {


    const buttonsVariants = {
        initial: {
            scale: 1,
            color: colors.primary
        },
        whileHover: {
            scale: 1.3,
            color: colors.secondary
        }
    }

    return (
        <div className='fixed left-0 top-0 s600:w-[100px]  desktop:w-[180px] h-full' style={{
            backgroundColor: colors.background
        }}>
            <div className='w-full h-[150px] gap-[15px]  flex flex-col justify-center items-center'>
                <img className='w-[80%]' src="/images/events/techfeud.png" alt="" />
            </div>

            <ul className='flex-1 text-[130%] h-full flex flex-col items-center justify-evenly pb-[100px]'>

                <motion.li
                    className='py-[5px] w-[90px] s800:py-[10px] s800:w-[110px] text-[white] rounded-[3px] flex justify-center items-center cursor-pointer' 
                    style={{
                        backgroundColor: colors.primary,
                        rotate: '270deg'
                    }}
                    initial={{
                        gap: '10px',
                        scale: 1
                    }}
                    whileHover={{
                        gap: '20px',
                        scale: 1.1
                    }}

                >
                    <p style={{
                        color: colors.buttonText
                    }} >Team</p>
                    <img className='w-[15px]' 
                        src="/icons/arrow.svg" 
                        alt="" 
                        style={{
                            filter: colors.buttonText == 'white' ? '' : 'invert(100%)'
                        }}
                    />
                </motion.li>

                
                {
                    links.map((item, i) => {
                        return (
                            <li
                                className='rotate-[270deg] '
                                key={i}>
                                <motion.a
                                    className='inline-block '
                                    href={item.link}
                                    variants={buttonsVariants}
                                    initial={'initial'}
                                    whileHover={'whileHover'}
                                >{item.name}
                                </motion.a>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )
}

export default VerticalNavbar
