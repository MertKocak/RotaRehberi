import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NAV_LINKS } from '@/constants'
import { Button } from '../ui/button'
import { LogIn, MenuIcon } from 'lucide-react'

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-300  bg-white">
            <div className="container flex justify-between items-center py-2">
                <Link className='py-1' data-aos="fade-down" data-aos-once="true" data-aos-delay="50" href="/">
                    <Image
                        src="/logo.png"
                        width={120}
                        height={120}
                        alt="Logo"
                    />
                </Link>
                <ul className="font-poppins hidden lg:flex h-full gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            data-aos="fade-down" data-aos-once="true" data-aos-delay={link.delay}
                            key={link.key}
                            href="/"
                            className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900 font-medium hover:bg-gray-100 py-2 px-3 hover:rounded-lg"
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>
                <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="lg:flex justify-center hidden">
                    <Button variant={"mybutton"} type="button">
                        <LogIn className="h-4 w-4 mr-2" />
                        <span className="font-poppins">Giriş Yap</span>
                    </Button>
                </div>
                <MenuIcon className="lg:hidden inline-block cursor-pointer h-8 w-8 text-custom-green" />
            </div>
        </nav>
    )
}

