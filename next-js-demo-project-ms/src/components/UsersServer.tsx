import React from 'react';

const UsersServer = ({users}: {users: any}) => {

    return (
        <div>
            {users.map((user: any) => <li key={user.id}> <b>Name:</b> {user.name}</li>)}
        </div>
    );
};

export default UsersServer;