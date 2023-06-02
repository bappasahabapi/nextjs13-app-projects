import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const User = async ({ params, searchParams }: { params: { userID: [string] }, searchParams: {} }) => {
    const { userID } = params;
    // console.log(searchParams)
    console.log(userID)
    const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID[0]}`);
    const { name, email } = user || {};

    return (
        <div className='h-screen w-full flex flex-col items-center p-10'>
            <form className='w-1/2 h-full'>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user name</label>
                    <input
                        type="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={name}
                        disabled
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user email</label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={email}
                        disabled
                    />
                </div>
                <Link href={`/users/${userID}/edit`} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Edit</Link>
            </form>
        </div>
    );
};

export default User;