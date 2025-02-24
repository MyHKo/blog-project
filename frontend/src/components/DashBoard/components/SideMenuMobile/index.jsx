import NavBarMobile from "@components/DashBoard/components/SideMenuMobile/NavBarMobile";
import LogInMobile from "@components/DashBoard/components/SideMenuMobile/LogInMobile";
import styles from "./sidemenumobie.module.scss"
import PropTypes from "prop-types";

function SideMenuMobile({ isVisible, setIsVisible }) {
    const containerStyle = isVisible
        ? `${styles.container}  ${styles.container_visible}`
        : `${styles.container}`

    const backgroundStyle = isVisible
        ? `${styles.background}  ${styles.background_visible}`
        : `${styles.background}`

    const contentContainerStyle = isVisible
        ? `${styles.content_container}  ${styles.content_container_visible}`
        : `${styles.content_container}`


    return (<>
        <div className={containerStyle}>
            <div className={contentContainerStyle}>
                <NavBarMobile/>
                <LogInMobile/>
            </div>
        </div>
        <span className={backgroundStyle} onClick={() => setIsVisible(!isVisible)}/>
        </>
    )
}

export default SideMenuMobile

SideMenuMobile.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    setIsVisible: PropTypes.func.isRequired,
}
