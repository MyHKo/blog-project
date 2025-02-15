import NavBarMobile from "@components/DashBoard/components/SideMenuMobile/NavBarMobile";
import styles from "./sidemenumobie.module.scss"

function SideMenuMobile() {
    return (
        <div className={styles.container}>
            <div className={styles.content_container}>
                <NavBarMobile />
            </div>
        </div>
    )
}

export default SideMenuMobile
