import React from 'react';
import withLoader from '../HOC/withLoader';
import UserCard from '../Moleculas/UserCard';

const UsersGrid = ({users}) => {
    return ( 
        <div className="ed-grid m-grid-2">
            {
                users.map( u => <UserCard key={u.id} name={u.name} mail={u.email} />
                )
            }
        </div>
    );
}
 
export default withLoader("users", UsersGrid)