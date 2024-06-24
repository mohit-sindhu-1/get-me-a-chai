"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Image from "next/image";
import teaPic from '/public/tea.gif'

const Navbar = () => {
    const { data: session } = useSession()
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <nav className=' bg-slate-900 text-white flex justify-between items-center md:h-12 px-3 md:py-0 py-1'>
            <Link href={'/'} className='logo font-bold text-lg flex justify-center items-center'>
                <Image className='md:w-10 w-7' src={teaPic} alt="tea" width={40}/>
                <span className='md:text-base text-sm'>Get Me a Chai!</span>
            </Link>

            <div>
                {session ? <div>
                    <button onClick={() => setShowDropdown(!showDropdown)} onBlur={() => {
                        setTimeout(() => {
                            setShowDropdown(false)
                        }, 300);
                    }} id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center" type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdownDivider" className={`z-10 ${showDropdown ? "" : "hidden"} absolute divide-y divide-lime-400  text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 rounded-lg w-[118px] my-0.5`}>
                        <ul className="text-sm" aria-labelledby="dropdownDividerButton">
                            <li>
                                <Link href="/dashboard" className="rounded-t-[7px] block px-4 py-3 hover:bg-gradient-to-l">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`/${session.user.name}`} className="block px-4 py-3 hover:bg-gradient-to-l">Your Page</Link>
                            </li>
                        </ul>
                        <div>
                            <Link onClick={() => signOut()} href={'/'} className="rounded-b-[7px] block px-4 py-3 text-sm hover:bg-gradient-to-l">Logout</Link>
                        </div>
                    </div>
                </div> :

                    <Link href="/login">
                        <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none dark:focus:ring-teal-700 font-medium rounded-lg md:text-sm text-xs px-5 md:py-2.5 py-1 text-center">Login</button>
                    </Link>
                }
            </div>
        </nav>
    )
}

export default Navbar
