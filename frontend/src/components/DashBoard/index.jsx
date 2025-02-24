import SideMenu from "@components/DashBoard/components/SideMenu/index.jsx";
import SideMenuButton from "@components/DashBoard/components/SideMenuButton";
import SideMenuMobile from "@components/DashBoard/components/SideMenuMobile";
import {useEffect, useState} from "react";

function DashBoard() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
    const [isScreenBig, setIsScreenSmall] = useState(window.matchMedia("(min-width: 980px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 980px)");

    const handleResize = () => setIsScreenSmall(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
}, []);

    useEffect(() => {
        if (isSideMenuVisible && !isScreenBig) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [isSideMenuVisible, isScreenBig]);

    return (
        <div>
            <SideMenuButton isSideMenuVisible={isSideMenuVisible} setIsSideMenuVisible={setIsSideMenuVisible} />
            {isScreenBig
                ? <SideMenu />
                : <SideMenuMobile isVisible={isSideMenuVisible} setIsVisible={setIsSideMenuVisible}/>}
        </div>
    )
}

export default DashBoard
