import React from 'react';


const MoviesListCard = ({movie:{original_title,title, id,overwiew, vote_count}}) => {
    return (
        <div>
            {original_title}
        </div>
    );
};


export default MoviesListCard;