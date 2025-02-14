import React from 'react'

const MainDecorationLines = ({color}) => {
  return (
    <div className='flex text-[13px] mt-[30px] s600:mt-0 s800:text-[17px] s1230:text-[20px] items-center justify-start gap-[10px]'>
        <div className='bg-white  w-[30px] s600:w-[40px] s800:w-[60px] s1230:w-[80px] h-[1px] s800:h-[3px] rounded-[20px]'></div>
        <div className='bg-white  w-[3px] s800:w-[6px] s1230:w-[10px] h-[1px] s800:h-[3px] rounded-[20px]'></div>
        <div className='bg-white  w-[3px] s800:w-[6px] s1230:w-[10px] h-[1px] s800:h-[3px] rounded-[20px]'></div>
        <div className='text-white flex gap-[11px]'>Team <p style={{color: color}}>devkraft</p> DIT</div>
    </div>
  )
}

export default MainDecorationLines
