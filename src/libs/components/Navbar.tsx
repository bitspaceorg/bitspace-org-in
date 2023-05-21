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
        <div className="bg-black h-[5rem] flex justify-between items-center">
        <div>
        <span className='mx-5 text-4xl font-bold text-white'>:bs</span>
            { navLinks.map((link) => {
                const isActive:boolean = pathname === link.href
                return (
                   <button key={link.name} onClick={() => router.push(link.href)} className={isActive ? 'transition-all scale-[1.35] p-2 m-4 font-bold text-[#9333EA] hover:text-[#9333EA]' : 'transition-all hover:scale-[1.25] p-2 m-4 font-bold text-[#989898] hover:text-white'}>{link.name}</button>
                )
            })}
        </div>
            <button className="text-black rounded-xl bg-[#9333EA] px-5 py-2 font-bold hover:text-white transition-all mx-5">Login</button>
        </div>

    )
}

export default Navbar
