'use client'
import Login from '@/libs/components/Login'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import {useRouter, usePathname} from "next/navigation"
import { useEffect, useState } from 'react'

const Navbar = () => {

    const{ data:session } = useSession()
    const[spin,setSpin] = useState(true)
    const[drop,setDrop] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setSpin(false)
        },500)
    },[spin])

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
        { (!(session)) ?
        <div className='px-10'>
            { spin ?
                <div className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-white rounded-full mx-10">
                  <span className="sr-only">Loading...</span>
                </div>
             :
            <button className="text-black rounded-xl bg-[#9333EA] font-bold hover:text-white transition-all w-24 h-10" onClick={authenticate}>
            <p>SignIn</p>
            </button>
            }
        </div>
        :
        <div className='flex flex-col'>
            <button onClick={()=>setDrop(true)} className='mt-3 w-30'>
                <Image
                    src={session.user?.image}
                    width={50}
                    height={50}
                    alt='user image'
                    priority={false}
                    className='mx-8 rounded-full'
                />
            </button>
            { drop && <button className='text-white' onClick={()=>signOut()}>Sign Out</button>}
        </div>
        }
        </div>
        </>

    )
}

export default Navbar
