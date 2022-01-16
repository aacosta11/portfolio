import React, { useEffect,useContext } from "react";
import { Link } from "gatsby";
import { motion, useAnimation } from "framer-motion";
import IsMenuActive from "../../../Context/IsMenuActive";
import HamburgerMenu from "../IconComponents/HamburgerMenu";
import "./floatingMenu.css";
const FloatingMenu = props => {
    const {isMenuActive,setIsMenuActive} = useContext(IsMenuActive);
    const menuController = useAnimation();
    const listContainer = {
        hidden: {opacity: 0,x:0,transition: {delayChildren: .5,duration: .55}},
        visible: {
            opacity: 1,
            transition: {
                duration: .25,
                delayChildren: .5,
                staggerChildren: .2
            },
            x: -100
        }
    };

    const activateMenu = async (e) => {
        return await menuController.start("visible");
    }

    const hideMenu = async () => {
        return await menuController.start("hidden");
    }

    useEffect(()=> {
        isMenuActive ? activateMenu() : hideMenu();
    }, [isMenuActive])

    return (<>
        <motion.div className="absolute X X-ai-center X-jc-end width-100-percent overflow-hidden" id="triggerContainer" >
            <motion.div id="menuTrigger" className="transition-ease"
            onTap={() => setIsMenuActive(!isMenuActive)}
            style={{width: `${isMenuActive ? 90 : 75}px`}}
            initial={{x:10}}
            >
                <HamburgerMenu />
            </motion.div>
        </motion.div>

        <motion.div id="floatingMenu" className="absolute X X-ai-center overflow-hidden">
            <motion.ul id="listContainer" className=""
            variants={listContainer}
            animate={menuController}
            >
                <motion.li id="home" className="width-100-percent X X-jc-center" >
                    <Link to="#" >menu!</Link>
                </motion.li>
            </motion.ul>
        </motion.div>
    </>)
}
export default FloatingMenu;