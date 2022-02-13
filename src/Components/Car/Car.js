import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../../store/car.slice";

const Car = ({car}) => {
    const {model,price,year,id}=car
    const dispatch=useDispatch()
    return (
        <div>
            <div>
                <p>Model:{model}</p>
                <p>Price: {price}</p>
                <p>Year: {year}</p>
            </div>
            <button onClick={()=>dispatch(deleteCar({id}))}>delete car</button>

        </div>
    );
};

export {Car};