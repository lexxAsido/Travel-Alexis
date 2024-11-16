import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSquareXTwitter, FaRegCircleQuestion } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";
import { BsFillQuestionSquareFill, BsTaxiFront } from "react-icons/bs";
import { IoBedSharp } from "react-icons/io5";
import { MdFlight, MdAttractions } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { GiUsaFlag } from "react-icons/gi";




const Navbar = () => {
    return (
        <main>
            <div className='flex justify-end gap-3 items-center m-2'>
                <FaSquareXTwitter className='text-2xl' />
                <ImFacebook2 className='text-xl text-blue-600' />
                <IoLogoYoutube className='text-3xl text-red-500' />
                <GrInstagram className='text-2xl text-pink-800' />

            </div>
            <div className='bg-[#1d2127] h-[6rem] '>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <Link href={'/'}>

                            <Image src={'/logo.jpg'}
                                alt="Swift Travel"
                                width={90}
                                height={90}
                            />
                        </Link>
                        <h2 className='text-white font-bold text-xl'>Travel-Alexis</h2>
                    </div>

                   

                    <div className='flex items-center gap-12 mx-2 '>
                        
                        <button className='text-[#1A4FA0] bg-white px-3 py-2 font-bold rounded-md hover:bg-[#1A4FA0] hover:text-white hover:border w-[6rem]'>Register</button>
                        <button className='text-[#1A4FA0] bg-white py-2 px-3 font-bold rounded-md hover:bg-[#1A4FA0] hover:text-white hover:border'>Sign in</button>
                    </div>
                </div>
            </div>



                {/* <div className='w-[65rem] mb-3 ml-20 bg-[#1a4fa0]'>
                    <ul className=' flex row gap-2 text-white justify-evenly w-[55rem]  h-[5rem] p-2'>

                        <li className='hover:border p-3  hover:bg-[#1A4FA0] hover:rounded-full font-semibold flex items-center'>
                            <Link href="/stays" className='flex items-center gap-2'>
                                <IoBedSharp className='text-xl' />Stays
                            </Link>
                        </li>

                        <li className='hover:border p-3  hover:bg-[#1A4FA0] font-semibold rounded-full flex items-center'>
                            <Link href="/flights" className="flex items-center gap-2">
                                <MdFlight className='text-2xl' />
                                Flights
                            </Link>
                        </li>

                        <li className='hover:border p-3 hover:bg-[#1A4FA0] font-semibold rounded-full flex items-center'>
                            <Link href="/car-rentals" className="flex items-center gap-2">
                                <FaCar className='text-xl' />
                                Car rentals
                            </Link>
                        </li>

                        <li className='hover:border p-3 hover:bg-[#1A4FA0] font-semibold rounded-full flex items-center'>
                            <Link href="/attractions" className="flex items-center gap-2">
                                <MdAttractions className='text-2xl' />
                                Attraction
                            </Link>
                        </li>

                        <li className='hover:border p-3 hover:bg-[#1A4FA0] font-semibold rounded-full flex items-center'>
                            <Link href="/airport-taxis" className="flex items-center gap-2">
                                <BsTaxiFront className='text-xl' />
                                Airport taxis
                            </Link>
                        </li>

                    </ul>


                </div> */}

        </main>
    );
}

export default Navbar;
