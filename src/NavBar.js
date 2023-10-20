import React, {useContext} from "react";
import ThemeContext from "./Family/ThemeContext";


const NavBar = () => {
    const {color, toggleColor} = useContext(ThemeContext)
    return (
        <nav style={{backgroundColor:color}}>
            <span>WEBSITE</span>
            <button onClick={toggleColor}>Toggle Theme</button>
        </nav>
    )
}

export default NavBar;