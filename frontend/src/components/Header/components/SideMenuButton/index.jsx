import SideMenuIcon from "@components/Icons/SideMenuIcon/index.jsx";
import styles from './sidemenubutton.module.scss'

function SideMenuButton() {
    return (
        <div className={styles.container}>
            <SideMenuIcon width={"50"} height={"40"} />
        </div>
    )
}

export default SideMenuButton
