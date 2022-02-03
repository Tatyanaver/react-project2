import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../../services/user.service";
import Album from "../Album/Album";


const Albums = () => {
    const {id}=useParams()
    const [albums,setAlbums] = useState([])
    useEffect(()=>{
        userService.getAlbumById(id).then(value => setAlbums([...value]))},
            [id])
    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};