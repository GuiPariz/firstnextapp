import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/auth/signin">Sign-in</Link>
      <br />
      <Link href="/auth/dashboard">Dashboard</Link>
    </div>
  )
}
