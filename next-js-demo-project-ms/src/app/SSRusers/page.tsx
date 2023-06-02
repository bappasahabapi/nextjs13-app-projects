import React from 'react';
import Users from '@/components/Users';
import { store } from '@/store';

const SSRUsers = () => {
    const users = store.getState().search.startupUsers;
    return (
        <div>
            <h1 className='text-center mt-5'>This is SSR User Page</h1>
            <Users users={users} />
        </div>
    );
};

export default SSRUsers;