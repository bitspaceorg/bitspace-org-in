'use client'
import Image from 'next/image'
import axios from "axios"
import {useSession} from "next-auth/react"
import {useEffect, useState} from "react"
import Notification from '@/libs/components/Notification'

const Forum = () => {

    const { data : session } = useSession()
    const [dom, setDom] = useState(false)
    const [content, setContent] = useState('')
    const [messages, setMessages] = useState([])
    const [parentId, setParentId] = useState(null)
    const [reply, setReply] = useState('')
    const [person, setPerson] = useState('')
    const [notify, setNotify] = useState(false)
    const [error, setError] = useState('')
    const [status, setStatus] = useState('')

    const Message = ({message} :any) => {
        const handleReply = () => {
            setParentId(message.id)
            setReply(message.content)
            setPerson(message.name)
        }
        const tab:string = '    '
            return (
                <div className="ml-[2rem]">
                    <div className={`w-[100%] flex my-3 border border-[#2D2D2D] bg-[rgba(51,51,51,0.4)] p-3 rounded-xl`}>
                    <Image
                        src={message.image}
                        width={50}
                        height={50}
                        alt='user image'
                        priority={false}
                        className='mx-8 rounded-full h-[50px]'
                    />
                        <div className="w-[95%] break-words"><span className='text-[#9333EA]'>{message.name}</span> : <span>{message.content}</span></div>
                        <button className="w-[5%] h-full text-[1rem] mx-3 inline-block" onClick={handleReply} ><span className="text-[1rem] mr-2 scale-[0.75] material-symbols-outlined">reply</span>Reply</button>
                    </div>
                    { messages.map(child => {
                        if ( child?.parentId === message.id ) return (
                            <Message key={child.id} message={child} />
                        )
                    }) }
                </div>
            )
    }

    useEffect(() => {
        setDom(true)
        const fetchData = async () => {
            const { data } = await axios.get('/forum/api')
            setMessages(data)
        }
        fetchData()
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
            setNotify(false)
        },1500)
    },[notify])

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        if(session){
            if(content === ''){
                setError("Message cannot be empty")
                setStatus("error")
                setNotify(true)
            }else{
                setContent("")
                setError("Message sent")
                setStatus("sucess")
                setNotify(true)
                const { data } = await axios.post('/forum/api', { content, parentId, name: session.user.name, image: session.user.image })
                setMessages(prev => [...prev,data])
            }
        }else{
            setError("Need to be logged in")
            setStatus("error")
            setNotify(true)
        }
    }

    if (!dom) return null
    return (
        <>
            {notify && <Notification data={error} status={status}/>}
            <div className="text-white mr-[2rem]">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                { messages.map(message => {
                    if ( message.parentId === null ) return (
                        <Message key={message.id} message={message} />
                    )
                }) }
            </div>
                { parentId != null ? ( <div><p className="mx-2 text-sm rounded bg-[#313338] text-white inline-block ml-8">Replying to {person}
                <button onClick={() => setParentId(null)} className='inline-block p-2 text-white'>X</button>
                </p></div> ) : null }
            <form onSubmit={handleSubmit} className='flex items-center justify-center w-[100vw]' >
                <textarea className="bg-[rgba(0,0,0,0)] border-2 border-[#333] mx-2 text-white rounded-md w-11/12 h-24 p-2" onChange={e => setContent(e.target.value)} value={content}/>
                <button className='font-bold bg-[rgba(0,0,0,0)] p-2 text-[#9333EA] border border-[#9333EA] rounded-lg transition-all hover:bg-[#9333EA] hover:text-black h-full' type='submit'>{parentId === null ? 'Send' : 'Reply'}</button>
            </form>
        </>
    )
}

export default Forum
