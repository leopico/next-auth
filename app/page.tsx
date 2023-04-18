import { authOptions } from "./api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"


export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main>
      <h2>Server session</h2>
      <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}
