import React from "react";
import FloatingMenu from "./Navigation/FloatingMenu";
import "../../Styles/global.css";
const Layout = ({content}) => {
    return (<>
    <FloatingMenu />
    <div id="main-content">
        {content}
    </div>
    </>)
}
export default Layout;