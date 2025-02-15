import SideMenu from "@components/DashBoard/components/SideMenu/index.jsx";
import SideMenuButton from "@components/DashBoard/components/SideMenuButton";
import SideMenuMobile from "@components/DashBoard/components/SideMenuMobile";
import {useState} from "react";

function DashBoard() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

    return (
        <div>
            <SideMenuButton isSideMenuVisible={isSideMenuVisible} setIsSideMenuVisible={setIsSideMenuVisible} />
            <SideMenuMobile isVisible={isSideMenuVisible}/>
        </div>
    )
}

export default DashBoard
