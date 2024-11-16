"use client"
import React, { useState, useEffect } from 'react';
import { FaClock } from "react-icons/fa";

const colors = ['green','#221020', '#752398', '#3354fc', '#501030', '#239999']
const Clock = () => {
    const [time, setTime] = useState(new Date());
    const [index, setIndex] = useState(0);
    const [isClient, setIsClient] = useState(false); // Check if it's client-side


    useEffect(()=>{
        setIsClient(true); // Ensure this runs only on the client
        setTime(new Date());
        const valid = setInterval(()=>{
            setTime(new Date())
            setIndex((prevIndex)=> (prevIndex + 1) % colors.length);
        },1000);

        return ()=> clearInterval(valid)
    },[]);

    if (!isClient || !time) return null;
    
    const hours = time.getHours();
    const min = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes(); 
    const secs = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();


    const today = time.toDateString();

    const backgroundColor = colors[index];

    return (
        <main className='flex gap-3 items-center'>
            <div className='text-4xl font-bold border p-3 bg-[#004c90] text-white rounded-lg'>
                {`${today}`}
            </div>
            
            <div style={{ backgroundColor }} className="p-3 text-3xl font-bold w-[12rem] text-white rounded-lg shadow flex items-center gap-2">
                <p><FaClock className='text-white'/></p>
            {`${hours}:${min}:${secs}`}
            </div>
        </main>
    );    
}

export default Clock;
