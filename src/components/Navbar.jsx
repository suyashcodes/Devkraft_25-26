import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Navbar = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const [menuActivated, setMenuActivated] = useState(false)
    const navbarAnimationController = useAnimation()
    const navbarButtonsAnimationController = useAnimation()

    const expandMenuLine1Controller = useAnimation()
    const expandMenuLine2Controller = useAnimation()
    const expandMenuLine3Controller = useAnimation()

    function expandNavbar() {
        navbarAnimationController.start({
            height: menuActivated ? 80 : 250
        })
        navbarButtonsAnimationController.start({
            display: menuActivated ? 'none' : 'flex',
            y: menuActivated ? -150 : 0,
            transition: {
                duration: 0.5,
                type: 'spring',

            }
        })
        setMenuActivated(!menuActivated)

        // menu
        expandMenuLine1Controller.start({
            rotateZ: menuActivated ? 0 : -45,
            x: menuActivated ? 0 : -5,
            y: menuActivated ? 0 : 9,
            width: menuActivated ?  24 : 15
        })

        expandMenuLine2Controller.start({
            // display: menuActivated ? 'block' : 'none',
            scale: menuActivated ? 1 : 0
        })

        expandMenuLine3Controller.start({
            rotateZ:  menuActivated ? 0 : 45,
            x:  menuActivated ? 0 : 4,
            y:  menuActivated ? 0 : -5,
            width:  menuActivated ? 24 : 15
        })
    }

    function handleResize() {
        setWidth(window.innerWidth)
        if (window.innerWidth <= 600) {
            setMenuActivated(false)

            navbarAnimationController.start({
                height: 80
            })

            navbarButtonsAnimationController.start({
                display: 'none' ,
                y: -100
            })
        }
        else {
            setMenuActivated(true)

            navbarAnimationController.start({
                height: 150
            })

            navbarButtonsAnimationController.start({
                display: 'flex' ,
                y: 0
            })
        }
    }

    useEffect(() => {
      handleResize()
    }, [])
    

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    const buttonsVariants = {
        initial: {
            scale: 1,
            color: '#ea580c'
        },
        whileHover: {
            scale: 1.3,
            color: '#ffb48d'
        }
    }



    

    return (
        <motion.nav
            className={` w-full  py-[10px] s600:py-0 ${width <= 600 && menuActivated ? 'h-[250px] items-start' : 'h-[80px]'} s600:h-[150px] ${width <= 600 ? 'fixed' : 'sticky'} top-0 right-0 z-[50]  bg-[#282523bf] s600:bg-[#1a1816] backdrop-blur-[15px] s600:backdrop-blur-0`}
            initial={{
                height: width <= 600 ? 80 : 150
            }}
            animate={navbarAnimationController}

        >

            <ul className='flex h-full  w-full items-center s600:justify-evenly justify-between text-[12px] s800:text-[18px]'>

                {width <= 600 && <li className='scale-100 s600:scale-0 flex items-start h-full'><img className='w-[100px] s600:w-0' src="/logo/2.png" alt="" /></li>}

                <motion.div
                    className={width > 600 ? 'flex h-full w-full items-center justify-evenly' : (menuActivated ? 'h-full  flex flex-col items-center justify-between py-[20px] text-[13px]' : 'h-full  flex-col items-center justify-between py-[20px] text-[13px] hidden')}
                    initial={{
                        y: -100
                    }}
                    animate={navbarButtonsAnimationController}
                >

                    <li><motion.a
                        className='inline-block  '
                        href="#"
                        variants={buttonsVariants}
                        initial={'initial'}
                        whileHover={'whileHover'}
                    >Home</motion.a>
                    </li>

                    <li><motion.a
                        className='inline-block '
                        href="#"
                        variants={buttonsVariants}
                        initial={'initial'}
                        whileHover={'whileHover'}
                    >Projects</motion.a>
                    </li>

                    <li><motion.a
                        className='inline-block '
                        href="#"
                        variants={buttonsVariants}
                        initial={'initial'}
                        whileHover={'whileHover'}
                    >Events</motion.a>
                    </li>

                    <li><motion.a
                        className='inline-block '
                        href="#"
                        variants={buttonsVariants}
                        initial={'initial'}
                        whileHover={'whileHover'}
                    >About</motion.a>
                    </li>


                    <motion.li
                        className='py-[5px] w-[90px] s800:py-[10px] s800:w-[110px] text-[white] bg-orange-600 rounded-[3px] flex justify-center items-center cursor-pointer'
                        initial={{
                            gap: '10px',
                            scale: 1
                        }}
                        whileHover={{
                            gap: '20px',
                            scale: 1.1
                        }}

                    >
                        <p>Team</p>
                        <img className='w-[15px]' src="/icons/arrow.svg" alt="" />
                    </motion.li>
                </motion.div>


                {width <= 600 &&
                    <li className='w-[100px] h-full flex justify-center top-[10px] items-start '>
                        <button
                            className='flex flex-col justify-center items-center gap-[5px] h-[56px]'
                            onClick={expandNavbar}
                        >
                            <motion.div 
                                className='w-[24px] h-[2px] bg-orange-500  '
                                initial={{
                                    rotateZ: 0,
                                    x: 0,
                                    y: 0,
                                    scaleX: 1
                                }}
                                animate={expandMenuLine1Controller}
                            ></motion.div>

                            <motion.div 
                                className='w-[24px] h-[2px] bg-orange-500 '
                                initial2={{
                                    display: 'block',
                                    scale: 1
                                }}
                                animate={expandMenuLine2Controller}
                            ></motion.div>

                            <motion.div 
                                className='w-[24px] h-[2px] bg-orange-500 '
                                initial={{
                                    rotateZ: 0,
                                    x: 0,
                                    y: 0,
                                    scaleX: 1
                                }}
                                animate={expandMenuLine3Controller}
                            ></motion.div>

                        </button>
                    </li>}


            </ul>




        </motion.nav>
    )
}

export default Navbar
