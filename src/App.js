import {useState} from "react";
import './App.css'
import {Cars,Form} from "./Components/index";

function App() {
const [cars,setCars] = useState([]);

return (
      <div>
        <Form/>
        <Cars/>
    </div>
    );
}

export default App;
