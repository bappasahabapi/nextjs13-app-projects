import React from 'react';
import axios from "axios"
import { DataFetchError } from '@/components/exceptions';
import Link from 'next/link';
import { store } from '@/store';
import { setStartupUser } from '@/store/searchSlice';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const Users = async () => {

    // await wait(3000);

    let users: [{ id?: string, name?: string,website?:string }];

    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=6", {});
        store.dispatch(setStartupUser(data));
        users = data;
    } catch (error) {
        console.log("Error from user page") 
        throw new DataFetchError()
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen p-24">
            {users.map((user) =>
            (<div key={user.id} className='w-full'>
                <Link href={`/users/${user.id}`} className='w-56 p-2 text-blue-700'>{user.name} </Link> <span className='co'> Website:  {user.website}</span>
            </div>))}
        </div>
    );
};

export default Users;