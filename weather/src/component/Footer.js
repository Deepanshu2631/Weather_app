import react from "react";
import { useState } from "react";
function Footer(){
    const[data , setdata]  = useState(100)
    function clicked(){
        
        setdata(data-1);
    }
    return(
        <>
        <div  >
            
         <h3>{data}</h3>
         <button onClick={clicked}>click me</button>
 
        </div>
        </>
    )
    
 
 }
 export default Footer;