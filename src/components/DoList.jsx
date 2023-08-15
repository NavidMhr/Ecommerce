import React from "react";

export default function List(props){
const [finish , setFinish] = React.useState(false)
    
    function handleFinish(){
        setFinish(prevState=> !prevState)
    }
    const style = finish ? '#2ecc71' : '';
    return(        
        <ul >
        <li className="List" style={{backgroundColor: style}}>
             <p className="task-name">{props.taskNameValue}</p>
             <div className="buttons">
             <button onClick={handleFinish} className="button-v">v</button>
             <button onClick={handleFinish} className="button-x">x</button>
             </div>
         </li>
     </ul>
)}