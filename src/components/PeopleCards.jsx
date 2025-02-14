import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'




const Card = ({ image, name, info }) => {

    const imageVariants = {
        initial: {
            scale: 1,
            x: 0
        },
        whileHover: {
            scale: 1.03,
            x: -40,
            boxShadow: '0px 0px 50px 4px #000'
        }
    }

    const cardVariants = {
        initial: {
            scale: 1
        },
        whileHover: {
            scale: 1.05
        }
    }


    return (
        <motion.div
            className='w-full h-[700px] s1300:h-[400px]  bg-white rounded-[30px] flex flex-col s1300:flex-row gap-[10px] items-center p-[15px] s600:p-[30px]'
            variants={cardVariants}
            initial={'initial'}
            whileHover={'whileHover'}
        >
            <div className="w-full h-auto s1300:h-full s1300:w-auto  ">
                <motion.img
                    className=' rounded-[15px] w-full h-full object-cover bg-[#0000]' src={image} alt=""
                    variants={imageVariants}
                />
            </div>

            <div className="info flex-1 overflow-y-scroll s1300:pl-[20px] s1300:min-w-[400px] w-full h-auto s1300:h-full s1300:w-auto  flex flex-col gap-[10px] ">
                <h3 className='text-[18px] s600:text-[20px] text-start w-full font-extrabold text-orange-500'>{name}</h3>
                <p className='text-[14px] s600:text-[16px]  text-start w-full overflow-y-scroll '>{info}</p>
            </div>
        </motion.div>
    )
}





const PeopleCards = () => {

    const menu1AnimationController = useAnimation()
    const menu2AnimationController = useAnimation()

    const cardHeight = useRef(400)

    const scrollDelay = 5000
    const [scrollState, setScrollState] = useState(false)

    useEffect(() => {
        function handleResize() {
            cardHeight.current = window.innerWidth <= 1300 ? 700 : 400
        }
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])



    useEffect(() => {


        const timeoutId = setTimeout(() => {

            if (scrollState) {
                // deactive upper
                menu1AnimationController.start({
                    y: -cardHeight.current * 3 / 2,
                    opacity: 0,
                    transition,
                })
                // activate lower
                menu2AnimationController.start({
                    y: -cardHeight.current,
                    opacity: 1,
                    transition,
                })
            }
            else {
                // activate upper
                menu1AnimationController.start({
                    y: 0,
                    opacity: 1,
                    transition,
                })
                // diactivate lower
                menu2AnimationController.start({
                    y: cardHeight.current * 3 / 2,
                    opacity: 0,
                    transition,
                })
            }

            setScrollState(!scrollState)

        }, scrollDelay);

        return () => {
            clearTimeout(timeoutId)
        }
    }, [scrollState])



    const transition = {
        duration: 1.5,
        type: 'spring',
    }


    return (
        <div className='w-full h-full flex overflow-hidden  s1300:px-[50px]'>

            <div className='w-full   px-[20px]  h-full flex-col s1300:flex-row justify-evenly s1300:justify-center flex  items-center'>


                <div className='h-[700px] max-w-[400px] s1300:max-w-full s1300:h-[400px] '>

                    <motion.div
                        initial={{
                            y: 0,
                            opacity: 1,
                        }}
                        animate={menu1AnimationController}
                    >
                        <Card name={'Dheeraj Agrawal'} image={'/images/people/image1.jpeg'} info={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quasi cupiditate tenetur porro placeat alias, quidem in impedit a enim, reprehenderit officiis illo voluptatum nesciunt consequatur! Accusamus fugit eius natus officia provident quibusdam. Recusandae quia sint iusto fugiat, quaerat dolorum earum perferendis ipsam quidem explicabo.'} />
                    </motion.div>



                    <motion.div
                        initial={{
                            y: cardHeight.current * 3 / 2,
                            opacity: 0.5,
                        }}
                        animate={menu2AnimationController}
                    >
                        <Card name={'Rahul Pandit'} image={'/images/people/image2.jpeg'} info={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum architecto cumque aperiam minus dolor deserunt sapiente voluptatem et recusandae, perspiciatis sed quae iste voluptatibus ipsum adipisci voluptates sint iure quam temporibus maxime illo. Nemo ipsam aut rerum minus. Quam ipsa et praesentium? Eligendi et necessitatibus doloremque sed possimus. Repudiandae soluta voluptates aperiam. Architecto sed magni eos!'} />
                    </motion.div>

                </div>

            </div>


        </div>
    )
}

export default PeopleCards
