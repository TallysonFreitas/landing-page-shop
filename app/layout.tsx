import type { Metadata } from 'next'
import { Atkinson_Hyperlegible } from 'next/font/google'
import './globals.css'

const inter = Atkinson_Hyperlegible({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
    title: 'Shop',
    description: 'Shop app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
