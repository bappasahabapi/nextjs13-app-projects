import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <>
        <h1>Dashboard</h1>
        <Link href={`http://localhost:3000/`}><button>back home</button></Link>
        </>
    )
}

export default Dashboard