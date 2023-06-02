import { User } from '@/types';
import React from 'react';

const Users = ({users}: {users: Array<User>}) => {
    return (
        <div className='h-screen w-full'>
            {users.map((usr) => <li key={usr.id}>{usr.name}</li>)}
        </div>
    );
};

export default Users;