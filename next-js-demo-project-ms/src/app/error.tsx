'use client'
import Link from 'next/link';
import React from 'react';

const ErrorHandle = ({
    error,
    reset
}: { error: Error, reset: () => void }) => {
    return (
        <div className="w-full flex items-center flex-col justify-center h-screen p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Error:</strong> {error.message || "someting wrong"}</p>
            <div className='flex gap-4'>
                <button onClick={reset}>
                    <Link href="/users" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Try Again
                    </Link>
                </button>
                <button>
                    <Link href={"/"} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Back Home
                    </Link>
                </button>
            </div>
        </div>

    );
};

export default ErrorHandle;