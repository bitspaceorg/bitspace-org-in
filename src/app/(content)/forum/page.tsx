'use client'
import axios from "axios"
import {useEffect, useState} from "react"

const Forum = () => {

    const [dom, setDom] = useState(false)
    const [content, setContent] = useState('')
    const [messages, setMessages] = useState([])
    const [parentId, setParentId] = useState(null)
    const [reply, setReply] = useState('')

    const Message = ({message}) => {
        const handleReply = () => {
            setParentId(message.id)
            setReply(message.content)
        }
        const tab:string = '    '
            return (
                <div className="ml-[2rem]">
                    <div className={`w-[100%] flex my-3 border border-[#2D2D2D] bg-[rgba(51,51,51,0.4)] p-3 rounded-xl`}>
                        <div className="w-[95%] break-words">{message.content}</div>
                        <button className="w-[5%] h-full text-[1rem] mx-3 inline-block" onClick={handleReply} ><span className="text-[1rem] mr-2 scale-[0.75] material-symbols-outlined">reply</span>Reply</button>
                    </div>
                    { messages.map(child => {
                        if ( child.parentId === message.id ) return (
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

    const handleSubmit = async (e:any) => {
        setContent("")
        e.preventDefault()
        const { data } = await axios.post('/forum/api', { content, parentId })
        console.log(data)
        setMessages(prev => [...prev,data])
    }

    if (!dom) return null
    return (
        <>
            <div className="text-white mr-[2rem]">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                { messages.map(message => {
                    if ( message.parentId === null ) return (
                        <Message key={message.id} message={message} />
                    )
                }) }
            </div>
                { parentId != null ? ( <div><p className="mx-2 text-sm rounded bg-[#313338] text-white inline-block">Replying to {reply.length < 30 ? reply : reply.slice(0,27) + '...'}
                <button onClick={() => setParentId(null)} className='inline-block p-2 text-white'>X</button>
                </p></div> ) : null }
            <form onSubmit={handleSubmit} className='flex items-start' >
                <input className="bg-[rgba(0,0,0,0)] border-2 border-[#333] mx-2 text-white rounded-md w-[40rem] h-[10rem] p-2" onChange={e => setContent(e.target.value)} value={content}/>
                <button className='font-bold bg-[rgba(0,0,0,0)] p-2 text-[#9333EA] border border-[#9333EA] rounded-lg transition-all hover:bg-[#9333EA] hover:text-black' type='submit'>{parentId === null ? 'Send' : 'Reply'}</button>
            </form>
        </>
    )
}

export default Forum
