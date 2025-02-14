import React from 'react'
import TeamCard from './TeamCard'


const TeamSection = ({data}) => {
  return (
    <div className='py-[0px] '>
        <div className=' text-[18px] text-orange-600 my-10'>
            <p className=' bg-white w-fit px-3 py-2 rounded-2xl m-auto'>{data.teamName}</p>
        </div>

        <div className='max-w-[1300px] m-auto s600:grid-cols-2 s1000:grid-cols-3 grid desktop:grid-cols-4 gap-y-[60px]'> {
            data.members.map((item, index) => {
                return  <TeamCard key={index} text={data.teamName} name={item.name} image={item.image} role={item.role} />
            })
        } </div>
    </div>
  )
}

export default TeamSection
