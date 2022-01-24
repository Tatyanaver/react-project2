import React, {useState} from 'react';
import './Form.css'

const Form = ({filterUser}) => {
    const [formItem,setFormItem] = useState({name:'',username:'',email:''});

const formChange = (e) => {
    const item = {...formItem, [e.target.name]: e.target.value}
    setFormItem({...formItem, ...item})
}

const findUser = function (e) {
    e.preventDefault()
    filterUser(formItem)}

    return (
        <div>
            <form className={'form'}>
                <label>Name:
                    <input type="text" name={'name'} value={formItem.name} onChange={formChange}/>
                </label>
                <label> Username:
                    <input type="text" name={'username'} value={formItem.username} onChange={formChange}/>
                </label>
                <label> email:
                    <input type="text" name={'email'} value={formItem.email} onChange={formChange}/>
                </label>
                <button onClick={findUser} className={'btn'}>find</button>
            </form>
        </div>
    );
};

export default Form;