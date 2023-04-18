import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]/route';
import {NextResponse} from 'next/server'


export async function GET(request: Request) {
    const session = await getServerSession(authOptions)

    if (!session) {
        return new NextResponse(JSON.stringify({ error: 'you can not logged in!' }), {
            status: 401
        })
    }

    // console.log('Get api', session)
    return NextResponse.json({ authenticated: !!session})
}