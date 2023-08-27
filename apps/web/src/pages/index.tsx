import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-extrabold text-white mb-6">
        Welcome to VideoFlix
      </h1>
      <p className="text-lg text-white mb-8">
        Stream your Creativity to Youtube anytime, anywhere.
      </p>
      <Link href="/login">
        <p className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
          Get Started
        </p>
      </Link>
    </div>
    </main>
  )
}
