import './globals.css'
import { Cinzel } from 'next/font/google'
import UnderConstruction from '@/libs/components/UnderConstruction'
import Navbar from '@/libs/components/Navbar'

const cinzel = Cinzel({subsets: ['latin-ext']})

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
            <body className={cinzel.className}>
                   { UNDER_CONSTRUCTION ? <UnderConstruction /> : (
                        <>
                            <Navbar />
                            {children}
                        </>
                   )}
            </body>
        </html>
    )
}
