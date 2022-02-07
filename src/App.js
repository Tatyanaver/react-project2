import {useReducer} from "react";
import './App.css'

const reducer= (state, action) =>{
    switch (action.type) {
        case 'inc':
            return {...state, firstCount:state.firstCount+1}
        case 'dec':
            return {...state, firstCount: state.firstCount-1}
        case 'reset':
            return {...state, firstCount:0}
        case 'inc2':
            return {...state, secondCount:state.secondCount+100}
        case 'dec2':
            return {...state, secondCount: state.secondCount-50}
        case 'reset2':
            return {...state, secondCount:0}
        case 'inc3':
            return {...state, thirdCount: state.thirdCount+300}
        case 'dec3':
            return {...state,thirdCount: state.thirdCount-200}
        case 'reset3':
            return {...state,thirdCount: 0}
        default:
            throw new Error("Error!")
    }
}

function App() {
    const [state,dispatch]= useReducer(reducer, {firstCount:100, secondCount:1000,thirdCount: 10000})
    return (
      <div>
          <div className={'count'}>
              <div>{state.firstCount}</div>
              <button className={'btn'} onClick={()=> dispatch({type:'inc'})}>increment</button>
              <button className={'btn'} onClick={()=> dispatch({type:'dec'})}>decrement</button>
              <button className={'btn'} onClick={()=> dispatch({type:'reset'})}>reset</button>
          </div>

        <div className={'count2'}>
            <div>{state.secondCount}</div>
            <button className={'btn'} onClick={()=> dispatch({type:'inc2'})}>increment 2</button>
            <button className={'btn'} onClick={()=> dispatch({type:'dec2'})}>decrement 2</button>
            <button className={'btn'} onClick={()=>dispatch({type:'reset2'})}>reset 2</button>
        </div>

        <div className={'count3'}>
            <div>{state.thirdCount}</div>
            <button className={'btn'} onClick={()=> dispatch({type:'inc3'})}>increment 3</button>
            <button className={'btn'} onClick={()=> dispatch({type:'dec3'})}>decrement 3</button>
            <button className={'btn'} onClick={()=>dispatch({type:'reset3'})}>reset 3</button>
        </div>

    </div>
    );
}

export default App;
