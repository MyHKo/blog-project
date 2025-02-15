import NavBarMobile from "@components/DashBoard/components/SideMenuMobile/NavBarMobile";
import LogInMobile from "@components/DashBoard/components/SideMenuMobile/LogInMobile";
import styles from "./sidemenumobie.module.scss"

function SideMenuMobile() {
    return (
        <div className={styles.container}>
            <div className={styles.content_container}>
                <NavBarMobile />
                <LogInMobile />
            </div>
        </div>
    )
}

export default SideMenuMobile
