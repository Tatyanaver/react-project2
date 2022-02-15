import React from 'react';


const GenreBadge = ({genre}) => {
const {id,name}=genre
    return (
        <div>
            {id} {name}
        </div>
    );
};

export default GenreBadge;