'use client'
import {useRouter, usePathname} from "next/navigation"

const Navbar = () => {

    const navLinks = [
        { name: 'Newsletters', href: '/news' },
        { name: 'Articles', href: '/articles' },
        { name: 'Courses', href: '/courses' },
        { name: 'Steaming', href: '/streams' },
        { name: 'Forum', href: '/forum' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Home', href: '/' },
    ]

    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className="bg-black h-[5rem] flex justify-end">
            { navLinks.map((link) => {
                const isActive:boolean = pathname === link.href
                return (
                   <button key={link.name} onClick={() => router.push(link.href)} className={isActive ? 'transition-all hover:scale-[1.25] p-2 m-4 font-bold text-green-500 hover:text-green-300' : 'transition-all hover:scale-[1.25] p-2 m-4 font-bold text-gray-300 hover:text-white'}>{link.name}</button>
                )
            })}
        </div>

    )
}

export default Navbar
