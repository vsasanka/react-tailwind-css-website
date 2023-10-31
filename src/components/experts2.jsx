import React from 'react'
import nvidia from '../assets/img/nvidia.jpeg'

export default function Experts(){
    return (
        <div className='bg-[#edefee] p-4'>
        <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
            
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#8edf20] font-bold m-2'>Software Developer Intern</h1>
                <p className='m-2 text-justify'>
                    <ul>
                        <li>- Worked on project MISRA C - aimed to implement the software development guidelines developed by MISRA (Motor Industry Software Reliability Association).</li>
                        <li>- Worked on Bootloader chip - used by gaming consoles and microcontrollers for AI - Fixed bugs removing security vulnerabilities and ensuring safe execution of the code.</li>
                        <li>- Impacted more than 10,000 lines of code.</li>
                        <li>- Technologies: C, Embedded C, Python, Git.</li>
                    </ul>
                </p>
                <button className='w-[30%] bg-black text-white p-3 rounded'>Get started</button>
            </div>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={nvidia} alt="" className='inline'/>
            </div>
        </div>
        </div>
    )
}