import React, {useRef} from 'react';
import classes from "./Form.module.css";

const Form = ({dispatch}) => {
    const catName = useRef();
    const dogName = useRef();

    const add = (e) => {
        e.preventDefault();
        e.target.reset();}
    const saveCatName = () => {
        dispatch({type: 'add_cat', payload: {cat: catName.current.value}})
    }
    const saveDogName = () => {
        dispatch({type: 'add_dog', payload: {dog: dogName.current.value}})
    }

    return (
        <form className={classes.form} onSubmit={add}>
            <label className={classes.field}>Add cat:
                <input type="text" placeholder={'cat'} ref={catName} className={classes.inp}/>
                <button onClick={saveCatName}>Save cat</button>
            </label>
            <label className={classes.field}>Add dog:
                <input type="text" placeholder={'dog'} ref={dogName} className={classes.inp}/>
                <button onClick={saveDogName}>Save dog</button>
            </label>
        </form>

    );
};

export {Form};