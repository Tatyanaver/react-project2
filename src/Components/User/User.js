import React from 'react';


const User = ({user}) => {
    const {id,name,username,email} = user
    return (
        <div>
            {id}) {name}, {username}, email: {email}
        </div>
    );
};

export default User;