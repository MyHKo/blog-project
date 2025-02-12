import NavBar from "@components/SideMenu/NavBar/index.jsx";
import styles from './sidemenu.module.scss'
import LogIn from "@components/SideMenu/LogIn/index.jsx";

function sideMenu() {
    return (
        <div className={styles.container}>
            <NavBar />
            <LogIn />
        </div>
    )
}

export default sideMenu
