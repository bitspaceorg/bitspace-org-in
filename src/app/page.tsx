"use client"
import { useSession } from "next-auth/react";
export default function Home() {

    const { data : session } = useSession()
    const getUser = () => {
        console.log(session)
    }

    return (
    <>
        <button className="text-white bg-[#933EA] w-60 h-10" onClick={()=>getUser()}>Click</button>
    </>
        )
}
