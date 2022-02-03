import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {photosService} from "../../../services/photos.service";
import Photo from "../Photo/Photo";

const Photos = () => {
    const {id}=useParams()
    const [photos,setPhotos]=useState([])
    useEffect(()=>{
        photosService.getPhotoById(id).then(value => setPhotos([...value]))},[id])

    return (
        <div>
            {photos.map(photo=><Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {Photos};