import React, { useEffect } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import "./floatingMenu.css";
const FloatingMenu = props => {
    useEffect(()=> {
        menuContainer.start("hidden");
        menuLinksController.start("hidden")
    }, [])
    const menuContainer = {
        hidden: {opacity: 0,scale:0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: .3,
                staggerChildren: .2
            }
        }
    };
    const menuController = useAnimation();
    const menuLinksController = useAnimation();

    const activateMenu = async () => {
        await menuController.start("visible")
        return await menuLinksController.start("visible")
    }
    return (<>
    <motion.div id="floatingMenu" className="absolute transition-ease">
        <motion.ul id="controlMenuDisplay"
        variants={menuContainer}
        animate={menuController}
        onTap={activateMenu}
        >
            <motion.li id="home" className="width-100-percent X X-jc-center" >
                <Link to="/" >home</Link>
            </motion.li>
            <motion.li id="portfolio" className="width-100-percent X X-jc-center" >
                <Link to="/contact" >contact me</Link>
            </motion.li>
            <motion.li id="contactMe" className="width-100-percent X X-jc-center" >
                <Link to="/portfolio" >portfolio</Link>
            </motion.li>
        </motion.ul>
    </motion.div>
    </>)
}
export default FloatingMenu;