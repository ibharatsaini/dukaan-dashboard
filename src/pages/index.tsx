import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-gray-100 flex-col items-center justify-between ${inter.className}`}
    >
        <Sidebar />
    </main>
  )
}
