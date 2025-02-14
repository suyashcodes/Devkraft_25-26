import React, { useState, useEffect } from 'react'
import MainDecorationLines from '../components/MainDecorationLines'
import Navbar from '../components/Navbar'
import GallaryScrollSection from '../components/GallaryScrollSection'
import DynamicNavbar from '../components/DynamicNavbar'
import VerticalNavbar from '../components/VerticalNavbar'

const TechFeud = () => {

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

    return (

        <div className='flex w-screen h-100svh'>


            {width > 600 && <aside className='h-full s600:w-[100px]  desktop:w-[180px]'>
                <VerticalNavbar colors={{
                    primary: '#7ed3ff',
                    secondary: '#6ac2e2',
                    background: '#0a0f17',
                    buttonText: 'black'
                }} 
                
                links={
                    [
                        {
                            name: 'Home',
                            link: '#'
                        },
                        {
                            name: 'Projects',
                            link: '#'
                        },
                        {
                            name: 'About',
                            link: '#'
                        },
                        
                    ]
                }
                
                />
            </aside>}

            <main id='techfeud' className=' flex-1 h-full  pt-[80px] s600:pt-0 text-[10px] s600:text-[12px] s800:text-[14px] s1230:text-[16px]'>

                <img className='w-screen h-100svh absolute top-0 left-0 object-cover brightness-[0.3] z-[-1]' src="/backgrounds/blue-background.webp" alt="img not found" />

                { width <= 600 && <DynamicNavbar
                    links={
                        [
                            {
                                name: 'Home',
                                link: '#'
                            },
                            {
                                name: 'Projects',
                                link: '#'
                            },
                            {
                                name: 'About',
                                link: '#'
                            }
                        ]
                    }

                    colors={{
                        primary: '#0993ce',
                        secondary: '#6fb7d2',
                        mobileBackground: '#232528bf',
                        background: '#232528',
                        textColor: 'black'
                    }}

                    logoURL={"/images/events/techfeud.png"}

                    activeInNavbar={true}
                />}





                {/* min-h-[calc(100svh-80px)] s600:min-h-[calc(100svh-150px)] */}
                <section className='w-full h-full  p-[10px] s600:p-[30px] flex flex-col items-start justify-between'>

                    <div className='w-full'>

                        <MainDecorationLines color={'#2497ff'} />

                        <div className='flex flex-col s450:flex-row  s450:gap-[0%]'>
                            <h1 className='text-[800%] font-extrabold text-[#6ac2e2]'>Tech</h1>
                            <h1 className='text-[800%] mt-[-37px] s450:mt-0 font-extrabold text-[#6ac2e2]'>Feud</h1>
                        </div>

                        <h2 className='text-[180%] font-semibold text-[#1c67c8] px-[10px] py-[5px] bg-[#bfd4e3] w-fit rounded-[13px]'>Season 3</h2>

                        <div className='mt-[42px]  '>
                            <h2 className='text-[300%] s600:text-[220%] font-bold text-[#6ac2e2]'>About Tech Feud</h2>
                            <p className='text-white mt-[10px] text-[160%] w-full  s600:text-[120%] leading-[160%] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, dolor modi alias ut veniam quaerat quas iste reiciendis eveniet provident. Doloribus ducimus velit ipsa, at atque minima expedita, sint nihil totam temporibus eveniet laudantium inventore?</p>
                        </div>

                    </div>


                    



                    <div>
                        <h2 className='text-[220%]  text-white'>500+ participants so far</h2>
                        <h2 className='text-[220%]  text-white'>70+ participants this season</h2>
                    </div>


                </section>


                <section className='w-full p-[30px] pt-[20px] flex flex-col s600:h-100svh h-[calc(100svh-80px)] bg-[#07111b] '>

                    <h1 className='text-[200%] gap-[30px] mb-[15px] text-blue-300'>Gallary</h1>

                    <div className='w-full flex  flex-1  overflow-hidden justify-center gap-[30px] rounded-[10px]'>
                        <div className='h-full flex-1'>
                            <GallaryScrollSection direction={1} images={['/images/gallary/techfeud/1.webp', '/images/gallary/techfeud/2.jpeg', '/images/gallary/techfeud/3.jpeg', '/images/gallary/techfeud/4.jpeg', '/images/gallary/techfeud/5.jpeg']} />
                        </div>

                        <div className='h-full flex-[1.5] scale-0 absolute s800:scale-100 s800:relative'>
                            <GallaryScrollSection direction={0} images={['/images/gallary/techfeud/4.jpeg', '/images/gallary/techfeud/2.jpeg', '/images/gallary/techfeud/3.jpeg', '/images/gallary/techfeud/1.webp', '/images/gallary/techfeud/5.jpeg']} />

                        </div>

                        <div className='h-full flex-1  scale-0 absolute s1230:scale-100 s1230:relative'>

                            <GallaryScrollSection direction={1} images={[, '/images/gallary/techfeud/2.jpeg', '/images/gallary/techfeud/3.jpeg', '/images/gallary/techfeud/5.jpeg', '/images/gallary/techfeud/1.webp', '/images/gallary/techfeud/4.jpeg']} />
                        </div>
                    </div>


                </section>






            </main>

        </div>

    )
}

export default TechFeud
