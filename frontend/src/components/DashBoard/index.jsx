import SideMenu from "@components/DashBoard/components/SideMenu/index.jsx";
import SideMenuButton from "@components/DashBoard/components/SideMenuButton/index.jsx";
import {useState} from "react";

function DashBoard() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

    return (
        <div>
            <SideMenuButton isSideMenuVisible={isSideMenuVisible} setIsSideMenuVisible={setIsSideMenuVisible} />
            <SideMenu isSideMenuVisible={isSideMenuVisible} setIsSideMenuVisible={setIsSideMenuVisible} />
        </div>
    )
}

export default DashBoard
