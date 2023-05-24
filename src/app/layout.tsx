import './globals.css'
import { Montserrat } from 'next/font/google'
import UnderConstruction from '@/libs/components/UnderConstruction'
import Navbar from '@/libs/components/Navbar'
import NextAuthProvider from './Provider'

const montserrat =  Montserrat ({subsets: ['latin-ext']})

export const metadata = {
    title: 'BITSPACE',
    description: '👋 Bit Space (@bitspaceorg) = 🎓 students from Chennai Institute of Technology building 🚀 community for positive impact with 🌟 open source projects.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const UNDER_CONSTRUCTION: boolean = false;

    return (
        <html lang="en">
            <body className={montserrat.className}>
                    <NextAuthProvider>
                   { UNDER_CONSTRUCTION ? <UnderConstruction /> : (
                        <div className='h-[100vh] w-[100vw]'>
                            <Navbar/>
                            {children}
                        </div>
                   )}
                    </NextAuthProvider>
            </body>
        </html>
    )
}
