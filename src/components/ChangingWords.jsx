import React, { useState, useEffect } from 'react'
import { delay, motion } from 'framer-motion'
import { v4 } from 'uuid'

const Letter = ({ letter, delay }) => {



    return (
        <motion.p
            className='text-orange-600'
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay,
                }
            }}

        >
            {letter}
        </motion.p>
    )
}


const Word = ({ text }) => {

    const letters = text.split('')
    let delay = 0

    return (
        <motion.div
            className='s335:text-[30px] text-[20px] s600:text-[35px] s800:text-[50px] s1230:text-[70px] flex min-w-[45px] s600:min-w-[120px] s800:min-w-[184px] s1230:min-w-[250px]'>
            {letters.map(l => {
                delay += 0.3
                return <Letter key={v4()} letter={l} delay={delay} />
            })}
        </motion.div>
    )
}



const ChangingWords = ({ words }) => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        const word = words[currentWordIndex]
        const animationDuration = (word.length) * 300 + 1000

        const timeoutId = setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, animationDuration)

        return () => clearTimeout(timeoutId)

    }, [currentWordIndex])

    return (
        <Word text={words[currentWordIndex]} />
    )
}


export default ChangingWords
