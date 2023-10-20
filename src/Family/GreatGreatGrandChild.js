import React, {useContext} from "react";
import CountContext from "./CountContext";
import ThemeContext from "./ThemeContext";

function GreatGreatGrandChild(){
 const {count, increment} = useContext(CountContext)
 const {color} = useContext(ThemeContext)
return (
    <div style={{ border:'4px solid yellowgreen', margin:'1rem'}}>
        <p>I'm a great-great-grandchild</p>
        <p>I also consume count: {count}  </p>
        <button style={{color}} onClick={increment}>Increment Count</button>
       
    </div>
)
}

export default GreatGreatGrandChild;