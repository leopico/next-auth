'use client'
import Link from "next/link"
import { useState } from "react"
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation'


const LoginForm = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        signIn('credentials', {
            email,
            password,
            callbackUrl
        })
    }

    return (
        <form className="px-8 py-6" onSubmit={onSubmit}>
            <label className="label">Email</label>
            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover: outline-none focus:outline-none focus:ring-indigo-600 focus:ring-1 rounded-lg" />
            <label className="label">Password</label>
            <input required type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="border w-full h-5 px-3 py-5 mt-2 hover: outline-none focus:outline-none focus:ring-green-600 focus:ring-1 rounded-lg" />
            <div className="flex flex-col">
                <button type="submit" className="mt-4 bg-green-500 py-2 px-6 rounded-md text-white hover:bg-green-600">Login</button>
                <p className="text-sm text-center mt-3">Do not have account? <Link href="/register" className="font-bold text-indigo-500 ">Register</Link></p>
            </div>
        </form>
    )
}
export default LoginForm