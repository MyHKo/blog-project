import NavBar from "@components/DashBoard/components/SideMenu/components/NavBar/index.jsx";
import LogIn from "@components/DashBoard/components/SideMenu/components/LogIn/index.jsx";
import styles from './sidemenu.module.scss'

function sideMenu({ isRight, set}) {
    return (
        <div className={styles.container}>
            <NavBar />
            <LogIn />
        </div>
    )
}

export default sideMenu
