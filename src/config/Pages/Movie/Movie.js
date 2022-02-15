import React from 'react';

const Movie = ({movie}) => {
    return (
        <div>
            {movie.original_title}
        </div>
    );
};

export default Movie;