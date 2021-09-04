import react from "react";
import { useState } from "react";
function Main(){
   let[data , setData] = useState(0);
   function updateData(){
       setData(data+1);
       
   }
    return(
        <>
        <h1>{data}</h1>
        <button onClick={updateData}>Update data</button>
        </>
    )
}
export default Main;