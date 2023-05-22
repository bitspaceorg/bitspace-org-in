'use client'
import Login from '@/libs/components/Login'
import {useRouter, usePathname} from "next/navigation"
import { useState } from 'react'

const Navbar = () => {

    const navLinks = [
        { name: 'Newsletters', href: '/news' },
        { name: 'Articles', href: '/articles' },
        { name: 'Courses', href: '/courses' },
        { name: 'Home', href: '/' },
        { name: 'Streaming', href: '/streams' },
        { name: 'Forum', href: '/forum' },
        { name: 'FAQ', href: '/faq' },
    ]

    const[popup,setPopup] = useState(false);

    const router = useRouter()
    const pathname = usePathname()

    const authenticate = () => {
        setPopup(true)
    }

    return (
        <>
        {popup && <Login/>}
        <div className="bg-black h-[5rem] flex justify-between items-center">
        <span className='mx-5 text-4xl font-bold text-white'>:bs</span>
        <div>
            { navLinks.map((link) => {
                const isActive:boolean = pathname === link.href
                return (
                   <button key={link.name} onClick={() => router.push(link.href)} className={isActive ? ' rounded-md border border-[#9333EA] transition-all scale-[1.35] p-2 m-4 font-bold text-[#9333EA] hover:text-[#9333EA]' : 'transition-all hover:scale-[1.25] p-2 m-4 font-bold text-[#989898] hover:text-white'}>{link.name}</button>
                )
            })}
        </div>
            <button className="text-black rounded-xl bg-[#9333EA] px-5 py-2 font-bold hover:text-white transition-all mx-5" onClick={authenticate}>Login</button>
        </div>
        </>

    )
}

export default Navbar
