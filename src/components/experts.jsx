import React from 'react'
import servicenow from '../assets/img/servicenow.webp'

export default function Experts(){
    return (
        <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={servicenow} alt="" className='inline'/>
            </div>
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold m-2'>Software Developer</h1>
                <p className='m-2 text-justify'>
                    <ul>
                        <li>- Built Knowledge Portal Widgets in web pages of Knowledge Management application using AngularJS. Pages were targeted
for different personas like different authenticated and unauthenticated users.</li>
                        <li>- Implemented pagination logic, synchronous and asynchronous loading mechanisms based on set properties.</li>
                        <li>- Improved the knowledge article search results performance by 20% by implementing a cache mechanism using the in-house
Cache Manager API.</li>
                        <li>- Used ServiceNow Machine Learning Capabilities to enhance customer service experience. Used cosine similarity-based
solutions to help search similar articles, and also used K-means clustering to help enhance customer-reported-incidents
processing.</li>
                        <li>- Built GraphQL schemas and resolvers for Configurable Workspace Application using GraphQL Java.</li>
                        <li>- Built different web components for ServiceNow Configurable Workspace Solution using seismic, an in-house JavaScript
framework, similar to React.</li>
                        <li>- Technologies: Java, JavaScript, HTML, CSS, SCSS, Seismic-React, AngularJS, GraphQL, AJAX, REST APIs, XML
</li>
                        <li>- ServiceNow Platform Capabilities: Client Scripts, Business Rules, Script Includes, UI Policies, UI Actions, Work Flow
Designer, Event Management, Portals and Workspaces, UI Builder</li>
                    </ul>
                </p>
                <button className='w-[30%] bg-black text-white p-3 rounded'>Get started</button>
            </div>
        </div>
    )
}