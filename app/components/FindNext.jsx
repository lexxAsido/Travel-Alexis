import React from 'react';
import { IoBedOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import Clock from './Clock';
import { FaUsers, FaSearch } from "react-icons/fa";




const FindNext = () => {
    return (
        <main className='flex h-[20rem] justify-center'>
            <div className='flex flex-col p-5 gap-3 text-center'>
                <h1 className='font-bold text-5xl  '>Find Your Next Stay</h1>
                <p className='text-semibold bg-[#004c90] text-white text-lg rounded-lg p-2'>Search low prices on hotels, homes and much more...</p>

                <div className='flex justify-center'>
                        
                        <Clock />
                    

                </div>
                <form className='flex rounded-lg '>
                    <div className='flex items-center gap-5 border border-4 border-blue-900 px-3'>
                        <IoBedOutline className='text-2xl' />
                        <input
                            type="text"
                            name="location"
                            placeholder="Where are you going?"
                            className='p-3 outline-none' />
                    </div>

                    <div className='flex items-center gap-5 border border-4 border-blue-900 px-3'>
                        <FaRegCalendarAlt className='text-2xl' />
                        <input type="text"
                            name="checkIn"
                            placeholder="Check-in - Check-out"
                            className=' p-3 outline-none'
                        />
                    </div>

                    <div className='flex items-center gap-4 border border-4 border-blue-900 px-3'>
                        <FaUsers className='text-2xl'/>
                        <input type="text" 
                        name='users'
                        placeholder='1 Adult. 0 Children > 1 room'
                        className='outline-none p-3'
                        />
                    </div>
                    <button className='border py-3 px-9  font-bold text-2xl border-4 border-blue-900 flex items-center gap-2 hover:bg-[#004c90] hover:text-white'>
                        <FaSearch/></button>
                </form>

            </div>
        </main>
    );
}

export default FindNext;
