import React, { useState, useEffect, useContext } from "react";
import IsMenuActive from "../../../Context/IsMenuActive";
import "./hamburgerMenu.css";
const HamburgerMenu = props => {
    const [width,setWidth] = useState(80);
    const {isMenuActive} = useContext(IsMenuActive);
    useEffect(()=>{
        isMenuActive ? setWidth(100) : setWidth(80);
    }, [isMenuActive])
    return (<>
        <div className="X X-fd-column X-ai-end X-jc-space-around menuIcon">
            <div className={`hamburgerBars width-${width}-percent transition-ease`}></div>
            <div className="hamburgerBars width-100-percent transition-ease"></div>
            <div className={`hamburgerBars width-${width}-percent transition-ease`}></div>
        </div>
    </>)
}
export default HamburgerMenu;