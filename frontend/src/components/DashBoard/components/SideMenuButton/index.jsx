import SideMenuIcon from "@components/Icons/SideMenuIcon/index.jsx";
import PropTypes from "prop-types";
import styles from './sidemenubutton.module.scss'

function SideMenuButton({ setIsSideMenuVisible }) {
    return (
        <div className={styles.container} onClick={() => {
            setIsSideMenuVisible(prevState => !prevState)
            }
        }>
            <SideMenuIcon width={"50"} height={"40"} />
        </div>
    )
}

export default SideMenuButton

SideMenuButton.propTypes = {
    setIsSideMenuVisible: PropTypes.func.isRequired,
}
