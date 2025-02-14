import React from 'react'
import TeamCard from '../components/TeamCard'
import TeamSection from '../components/TeamSection'

import DynamicNavbar from '../components/DynamicNavbar'
import Footer from '../components/Footer'

const Team = () => {


    const tech = {

        teamName: 'Technical Team',
        members: [
            {
                name: 'Suyash Dashputre',
                image: '',
                role: 'Lead'
            },
            {
                name: 'Ramkrushna Waghchaure',
                image: '',
                role: 'Co-Lead'
            },
            {
                name: 'Paras Wadkar',
                image: 'teams/teamTechnical/paras.jpeg',
                role: ''
            },
            {
                name: 'Gaurav Masand',
                image: 'teams/teamTechnical/gaurav.png',
                role: ''
            },
            {
                name: 'Suyash Magdum',
                image: 'teams/teamTechnical/suyash.jpg',
                role: ''
            },
            {
                name: 'Kunal Rewatkar',
                image: 'teams/teamTechnical/kunal.jpg',
                role: ''
            },
            {
                name: 'Harshavardhan Patil',
                image: 'teams/teamTechnical/harshavardhan.jpg',
                role: ''
            },
            {
                name: 'Tanmay Bagul',
                image: 'teams/teamTechnical/tanmay.jpg',
                role: ''
            },
            {
                name: 'Kshitij Gawankar',
                image: 'teams/teamTechnical/kshitij.jpg',
                role: ''
            },
            {
                name: 'Rehan Mamidwar',
                image: 'teams/teamTechnical/rehan.jpg',
                role: ''
            }
        ]
    }

    const publicRelation = {
        teamName: 'Public Relation Team',
        members: [
            {
                name: 'Prajwal Kulkarni',
                image: 'teams/publicRelation/prajwal.jpg',
                role: 'Lead'
            },
            {
                name: 'Harsh Khilari',
                image: 'teams/publicRelation/harsh.jpg',
                role: 'Co-Lead'
            },
            {
                name: 'Divyesh Puranik',
                image: 'teams/publicRelation/divyesh.jpg',
            },
            {
                name: 'Ayesha Patel',
                image: 'teams/publicRelation/ayesha.jpg',
                role: ''
            },
            {
                name: 'Yash Arote',
                image: 'teams/publicRelation/yash.jpg',
                role: ''
            },
        ]
    }

    const eventManagement = {
        teamName: 'Event Management Team',
        members: [
            {
                name: 'Snehal Bairagi',
                image: 'teams/teamEventManagement/snehal.png',
                role: 'lead'
            },
            {
                name: 'Anmol Kadam',
                image: '',
                role: 'Co-Lead'
            },
            {
                name: 'Anjali Kadare',
                image: 'teams/teamEventManagement/anjali.jpg',
                role: ''
            },
            {
                name: 'Avanti Awale',
                image: 'teams/teamEventManagement/avanti.png',
                role: ''
            },
            {
                name: 'Diksha Chavan',
                image: 'teams/teamEventManagement/diksha.jpg',
                role: ''
            },
            {
                name: 'Gauri More',
                image: 'teams/teamEventManagement/gauri.jpg',
                role: ''
            },
            {
                name: 'Mrunal Thakare',
                image: 'teams/teamEventManagement/mrunal.jpg',
                role: ''
            },
            {
                name: 'Bhakti Humbe',
                image: 'teams/teamEventManagement/bhakti.jpg',
                role: ''
            },
            {
                name: 'Ajit Paraskar',
                image: 'teams/teamEventManagement/ajit.png',
                role: ''
            },
            {
                name: 'Harshal Shahare',
                image: 'teams/teamEventManagement/harshal.jpg',
                role: ''
            },
            {
                name: 'Abhijit Kothimbire',
                image: 'teams/teamEventManagement/abhijeet.jpg',
                role: ''
            },
            {
                name: 'Pratik Pagare',
                image: 'teams/teamEventManagement/pratik.jpg',
                role: ''
            },
            {
                name: 'Soham Ingole',
                image: 'teams/teamEventManagement/soham.jpg',
                role: ''
            },
            {
                name: 'Shravan Patil',
                image: 'teams/teamEventManagement/shravan.jpg',
                role: ''
            },
            {
                name: 'Vedant Malpure',
                image: 'teams/teamEventManagement/vedant.jpg',
                role: ''
            },
            {
                name: 'Yash Bahadure',
                image: 'teams/teamEventManagement/yash.jpg',
                role: ''
            },
        ]
    }

    const content = {
        teamName: 'Content Team',
        members: [
            {
                name: 'Omkar Chindarkar',
                image: 'teams/teamContent/omkar.jpg',
                // text: 'Tech Team',
                role: 'Lead'
            },
            {
                name: 'Tanisha Phukan',
                image: 'teams/teamContent/tanisha.JPG',
                role: ''
            },
        ]
    }

    const production = {
        teamName: 'Production Team',
        members: [
            {
                name: 'Kunal Malviya',
                image: 'teams/teamProduction/kunal.jpg',
                // text: 'Tech Team',
                role: 'Lead'
            },
            {
                name: 'Kartik Soma',
                image: 'teams/teamProduction/kartik.jpg',
                role: 'Co-Lead'
            },
            {
                name: 'Ketan Thakare',
                image: 'teams/teamProduction/ketan.JPG',
                role: ''
            },
            {
                name: 'Nandan Khawale',
                image: '',
                role: ''
            },
            {
                name: 'Parth',
                image: 'teams/teamProduction/parth.jpg',
                role: ''
            },
            {
                name: 'Rahul Gaikwad',
                image: 'teams/teamProduction/rahul.png',
                role: ''
            },
            {
                name: 'Sudhanshu Singh',
                image: 'teams/teamProduction/sudhanshu.jpg',
                role: ''
            },
        ]
    }

    const marketing = {
        teamName: 'Marketing Team',
        members: [
            {
                name: 'Kabir',
                image: '',
                role: 'Lead'
            },
            {
                name: 'Madhav Sain',
                image: 'teams/marketing/Madhav.png',
                role: 'Co-Lead'
            },
            {
                name: 'Samruddhi Beldar',
                image: 'teams/marketing/Samruddhi.jpg',
            },
        ]
    }

    const mainPlayers = {
        teamName: 'President & Secretary',
        members: [
            {
                name: 'Vedant Patil',
                image: 'teams/mainPlayers/Vedant.jpg',
                role: 'President'
            },
            {
                name: 'Kanksha Pharate',
                image: 'teams/mainPlayers/Kanksha.jpg',
                role: 'Secretary'
            },
            {
                name: 'Shraddha Patil',
                image: 'teams/mainPlayers/Shraddha.jpg',
                role: 'Deputy Secretary'
            }
        ]
    }



    return (

        <section className='bg-[#282523] pt-[80px] s600:pt-0'>

            <DynamicNavbar
                links={
                    [
                        // {
                        //     name: 'Projects',
                        //     link: '#projects'
                        // },
                        {
                            name: 'Events',
                            link: '/'
                        },
                        {
                            name: 'About',
                            link: '/'
                        }
                    ]
                }

                colors={{
                    primary: '#ea580c',
                    secondary: '#ffb48d',
                    mobileBackground: '#282523bf',
                    background: '#1a1816',
                    buttonText: 'white'
                }}

                logoURL={"/logos/devkraft1.png"}

                activeInNavbar={true}

                buttonLink={'/'}
            />

            <div className='m-auto max-w-[1200px] py-[40px]'>
                <h1 className='text-orange-600 text-center text-bold text-[20px]'>Founding committee</h1>
                <img className='w-[80%] m-auto rounded-2xl mt-[20px]' src="/images/gallary/committee.jpeg" alt="" />
            </div>

            <div className="teams my-[30px] flex flex-col gap-[30px]">
                <TeamSection data={mainPlayers} />
                <TeamSection data={production} />
                <TeamSection data={content} /> 
                <TeamSection data={tech} /> 
                <TeamSection data={publicRelation} /> 
                <TeamSection data={eventManagement} /> 
                <TeamSection data={marketing} /> 

            </div>
            <Footer />

        </section>


    )
}

export default Team
