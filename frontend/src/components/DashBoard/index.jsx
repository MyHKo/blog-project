import SideMenu from "@components/DashBoard/components/SideMenu/index.jsx";
import SideMenuButton from "@components/DashBoard/components/SideMenuButton/index.jsx";
import {useState} from "react";
import SideMenuMobile from "@components/DashBoard/components/SideMenuMobile/index.jsx";

function DashBoard() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

    return (
        <div>
            <SideMenuButton isSideMenuVisible={isSideMenuVisible} setIsSideMenuVisible={setIsSideMenuVisible} />
            <SideMenuMobile />
        </div>
    )
}

export default DashBoard
