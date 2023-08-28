import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

export const Nav: React.FC<{client: string, id: string}> = ({ client, id }) => {
    const navigate = useRouter()
    const [state, setState] = useState<boolean>(false);
    

    useEffect(() => {
        if(sessionStorage.getItem(`${client}Token`)) {
            setState(true);
        } else {
            setState(false);
        }
    }, [state, id])

    return (
        <>
            <header className="bg-white shadow-md py-4 z-50 sticky top-0 opacity-90">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between">
                        <Link href={'/'}><div className="text-xl font-semibold">Creators</div></Link>
                        <ul className="flex space-x-8">
                                <Link href={"/"}><li className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Home</li></Link>
                                {client == 'creator' && <Link href={`/auth`}><li className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Auth</li></Link>}
                                {client != 'creator' && state && <Link href={`/videos/assigned`}><li className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Assigned</li></Link>}
                                {state && <Link href={`/videos/raw`}><li className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Raw</li></Link>}
                                {state && <Link href={`/videos/edit`}><li className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Edited</li></Link>}
                                {client != 'creator' && state && <Link href={`/videos/leger`}><li className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Leger</li></Link>}
                                {state && <Link href={`/videos/upload`}><li className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Upload</li></Link>}
                                {!state && <Link href={`/login`}><li className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Login</li></Link>}
                                {!state && <Link href={`/signup`}><li className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Register</li></Link>}
                                {state && <li onClick={() => {
                                    sessionStorage.clear();
                                    setState(false);
                                    navigate.push(`/login`)
                                }} className="hover:text-blue-500 cursor-pointer transition-all hover:scale-125 active:scale-95">Logout</li>}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}