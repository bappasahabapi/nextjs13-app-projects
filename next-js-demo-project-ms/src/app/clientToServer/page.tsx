'use client'
import UserSearch from '@/components/UserSearch';
import UsersServer from '@/components/UsersServer';
import { useEffect, useState } from 'react';
import LoadingUsers from '../../components/utils/loading';

const ClientToServer = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getUsers = async () => {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            const users = await data.json();
            setUsers(users)
            // console.log(users)
            setLoading(false)
        }
        getUsers();
    }, [])

    const getSearchUsers = (result: any) => {
        setUsers(result)
    }

    if (loading) {
        return <LoadingUsers />
    }

    return (
        <div className='h-screen w-full p-12'>
            <UserSearch getSearchUsers={getSearchUsers} />
            <UsersServer users={users} />
        </div>
    );
};

export default ClientToServer;