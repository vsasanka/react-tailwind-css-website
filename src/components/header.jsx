import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

export default function Header(){
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] py-[15px] items-center  flex justify-between  mx-auto'>
                <div className='text-3xl font-bold'>
                    Sasanka Vepakomma React Project
                </div>
            {
                !toggle?
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                :
                <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            }
                {/*<AiOutlineClose/>*/}
                <ul className='hidden md:flex text-white gap-5'>
                    <li>
                        Home
                    </li>

                    <li>
                        Company
                    </li>

                    <li>
                        Resource
                    </li>

                    <li>
                        About
                    </li>

                    <li>
                        Contact
                    </li>
                </ul>
                {/*Responsive Menu*/}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[98px] 
                ${toggle ? 'left-[0]' : 'left-[-100%]'} 
                `}>
                    <li className='p-5'>
                        Home
                    </li>

                    <li className='p-5'>
                        Company
                    </li>

                    <li className='p-5'>
                        Resource
                    </li>

                    <li className='p-5'>
                        About
                    </li>

                    <li className='p-5'>
                        Contact
                    </li>
                </ul>
            </div>
            
        </div>
    )
}