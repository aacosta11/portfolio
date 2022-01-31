import React, { useContext, useEffect, useState } from "react";
import FloatingMenu from "./Navigation/FloatingMenu";
import IsMenuActive from "../../Context/IsMenuActive";
import "../../Styles/global.css";
import "./layout.css";
const Layout = ({content}) => {
    const {isMenuActive} = useContext(IsMenuActive);
    const [blurInPixels,setBlurInPixels] = useState(0);
    const [mask,setMask] = useState('');

    useEffect(()=>{
        isMenuActive ? blurBackground() : unBlurBackground();
    }, [isMenuActive])

    const blurBackground = () => {
        setBlurInPixels(10);
        setMask('block');
    }

    const unBlurBackground = () => {
        setBlurInPixels(0);
        setMask('none');
    }

    return (<>
    
    {/* <FloatingMenu /> */} {/* temporarily deactivated for nginx deployment */}
    <div id="menuMask" style={{display: mask,transition: '1s ease'}}></div>
    <div id="main-content" style={{filter:`blur(${blurInPixels}px)`}} >
        {content}
    </div>
    </>)
}
export default Layout;