function Footer(){
    let data = "deepanshu";
   function clicked(){
       alert("clicked");
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