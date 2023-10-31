import React from 'react'
import Typed from 'react-typed'

export default function banner(){
    return (
        <div className='bg-[#2699fb] w-full py-[100px]'>
            <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold'>
                <div className='text-xl md:text-3xl md:p-[24px]'>
                    Learn about Sasanka
                </div>
                <h2 className='text-white text-5xl md:text-[60px] md:p-[24px]'>
                    Welcome to working with Sasanka.
                </h2>
                <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
                    Worked in
                    <Typed
                        className='pl-3'
                        strings={['Nvidia', 'ServiceNow', 'Arizona State University']}
                        typeSpeed={100}
                        loop={true}
                        backSpeed={50}
                    />
                </div>
                <button className='bg-black text-white p-3 rounded'>Get started</button>
            </div>

        </div>
    )
}