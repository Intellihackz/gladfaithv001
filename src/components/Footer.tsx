import React from "react";
import Link from "next/link";

export const Footer = (): JSX.Element => {
    return (
        <div className="w-full bg-[#2c2e3c]">
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Logo */}
                    <div className="text-center sm:text-left">
                        <Link href="/">
                            <span className="text-[#d5e481] text-xl md:text-2xl font-bold">GLAD</span>
                            <span className="text-white text-xl md:text-2xl font-bold">FAITH</span>
                        </Link>
                    </div>

                    {/* Two columns for mobile navigation links */}
                    <div className="grid grid-cols-2 gap-8 sm:hidden col-span-1">
                        {/* Column 1: Quick Links & Services */}
                        <div>
                            <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-4 text-center">Quick Links</h3>
                            <ul className="text-white space-y-2 text-center">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Contact & Services */}
                        <div>
                            <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-4 text-center">Services</h3>
                            <ul className="text-white space-y-2 text-center">
                                <li><Link href="/services#consulting">Consulting</Link></li>
                                <li><Link href="/services#advisory">Advisory</Link></li>
                                <li><Link href="/services#strategy">Strategy</Link></li>
                                <li><Link href="/services#management">Management</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden sm:block">
                        <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-4 text-center sm:text-left">Quick Links</h3>
                        <ul className="text-white space-y-2 text-center sm:text-left">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Desktop Services */}
                    <div className="hidden sm:block">
                        <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-4 text-center sm:text-left">Services</h3>
                        <ul className="text-white space-y-2 text-center sm:text-left">
                            <li><Link href="/services#consulting">Consulting</Link></li>
                            <li><Link href="/services#advisory">Advisory</Link></li>
                            <li><Link href="/services#strategy">Strategy</Link></li>
                            <li><Link href="/services#management">Management</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-4 text-center sm:text-left">Contact</h3>
                        <ul className="text-white space-y-2 text-center sm:text-left">
                            <li><Link href="mailto:contact@gladfaith.com">Email</Link></li>
                            <li><Link href="https://linkedin.com/company/gladfaith" target="_blank">LinkedIn</Link></li>
                            <li><Link href="https://instagram.com/gladfaith" target="_blank">Instagram</Link></li>
                            <li><Link href="https://twitter.com/gladfaith" target="_blank">Twitter</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white text-base md:text-lg font-semibold uppercase mb-4 text-center sm:text-left">Join Our Newsletter</h3>
                        <div className="flex flex-col gap-4">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="bg-[#223850] text-white px-4 py-2 rounded-full w-full"
                            />
                            <button className="bg-[#d5e481] text-black px-6 py-2 rounded-full font-semibold uppercase tracking-wider w-full">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}