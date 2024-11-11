"use client"

import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            <div className='bg-[#2c2e3c]/80 backdrop-blur-md w-[95%] md:w-[90%] lg:w-[80%] mx-auto mt-4 rounded-xl border border-white/10'>
                <div className='flex items-center justify-between px-4 md:px-10 py-3'>
                    <div className='text-white text-xl md:text-2xl font-bold'>
                        <Link href='/'>
                            <span className='text-[#d5e481]'>GLAD</span>
                            FAITH
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='md:hidden text-white'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex text-white items-center gap-10 font-semibold'>
                        <Link href='/'>ABOUT US</Link>
                        <Link href='/'>OUR SERVICES</Link>
                        <Link href='/'>FAQS</Link>
                        <button className='bg-[#d5e481]/90 hover:bg-[#d5e481] transition-colors text-black px-4 py-2 rounded-md'>
                            CONTACT US
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='md:hidden bg-[#2c2e3c]/80 backdrop-blur-md px-4 py-4 rounded-b-xl border-t border-white/10'>
                        <div className='flex flex-col gap-4 text-white font-semibold'>
                            <Link href='/' className='py-2 hover:text-[#d5e481] transition-colors'>ABOUT US</Link>
                            <Link href='/' className='py-2 hover:text-[#d5e481] transition-colors'>OUR SERVICES</Link>
                            <Link href='/' className='py-2 hover:text-[#d5e481] transition-colors'>FAQS</Link>
                            <button className='bg-[#d5e481]/90 hover:bg-[#d5e481] transition-colors text-black px-4 py-2 rounded-md w-full'>
                                CONTACT US
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}