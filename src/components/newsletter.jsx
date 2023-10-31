import React from 'react'

export default function NewsLetter(){
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to connect with me?</h1>
                    <span className='text-white'>
                        Please provide your email ID, I'll shoot you an email!
                    </span>
                </div>
                <div className='m-2'>
                    <input type="text" className='w-full rounded mb-2 p-3 mr-2 text-slate-600' placeholder='Your email please!'/>
                    <button className='bg-black text-white p-3 rounded'>Get started</button>
                    <br/>
                    <p className='text-white'>
                        I promise I will not share this email with anyone :)
                    </p>
                </div>
            </div>
        </div>
    )
}