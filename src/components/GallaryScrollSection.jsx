import React, { useEffect } from 'react'
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion'
import { useMeasure } from 'react-use'



const ScrollImage = ({ url }) => {
    return (
        <div className='w-full h-auto py-[15px]'>
            <img className='w-full h-full object-fill rounded-[10px]' src={url} alt="" />
        </div>
    )
}



const GallaryScrollSection = ({ direction, images }) => {

    let [ref, { height }] = useMeasure(0)
    let yTranslation = useMotionValue(0)
    let finalPosition = - (height / 2)
    const animateOrder = direction ? [0, finalPosition] : [finalPosition, 0]

    useEffect(() => {
        let controls;


        controls = animate(yTranslation, animateOrder, {
            ease: 'linear',
            duration: 50,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        })

        return () => {
            controls.stop()
        }
    }, [yTranslation, height])


    return (
        <div className='w-full h-full relative' >
            <motion.div
                className='flex flex-col absolute items-center w-full  '
                ref={ref}
                style={{
                    y: yTranslation
                }}
            >

                {[...images, ...images].map((item, i) => {
                    return <ScrollImage url={item} key={i} />
                })}

            </motion.div>


        </div>
    );
}

export default GallaryScrollSection
