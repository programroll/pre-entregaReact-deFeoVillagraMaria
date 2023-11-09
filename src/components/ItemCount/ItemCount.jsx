import './styles-ItemCount.css'
import {useState} from "react";

const ItemCount = () =>{

const [count,setCount]=useState(0)
const handleSumar=()=>{setCount (count+1);};
const handleRestar = () => {setCount(count - 1);};

return( <div>
    <button onClick={handleRestar}>-</button>
    <span>{count}</span>
    <button onClick={handleSumar}>+</button>
</div>
);

};




export default ItemCount
