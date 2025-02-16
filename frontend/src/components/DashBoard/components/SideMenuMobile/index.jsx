import NavBarMobile from "@components/DashBoard/components/SideMenuMobile/NavBarMobile";
import LogInMobile from "@components/DashBoard/components/SideMenuMobile/LogInMobile";
import styles from "./sidemenumobie.module.scss"
import PropTypes from "prop-types";

function SideMenuMobile({ isVisible }) {
    const containerStyle = isVisible
        ? `${styles.container}`
        : `${styles.container} ${styles.container_visible}`

    const backgroundStyle = isVisible
        ? `${styles.background}`
        : `${styles.background} ${styles.background_visible}`


    return (<>
        <div className={containerStyle}>
            <div className={styles.content_container}>
                <NavBarMobile/>
                <LogInMobile/>
            </div>
        </div>
        <span className={backgroundStyle}/>
        </>
    )
}

export default SideMenuMobile

SideMenuMobile.propTypes = {
    isVisible: PropTypes.bool.isRequired,
}
