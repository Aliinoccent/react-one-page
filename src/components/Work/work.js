import SmallBar from "./smallBar"
import Image from "./imagesSection"
import { useState } from "react";
import { createContext } from "react";
const dataFlow=createContext();
const Work=()=>{
    const [btnId, setBtn] = useState({ id: 0, type: "" });
 return(
    <div className="container" style={{height:'100vh'}}>
        <div className="display-3" style={{fontWeight:'bold'}}>WORK SHOWCASE.</div>
        <dataFlow.Provider value={{btnId,setBtn}}>
        <SmallBar/>
        <Image/>
        </dataFlow.Provider>

        
    </div>
 )
}
export default Work
export {dataFlow}