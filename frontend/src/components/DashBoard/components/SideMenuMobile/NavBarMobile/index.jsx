import {useNavigate} from "react-router-dom"
import T from 'prop-types'
import styles from './navbarmobile.module.scss'
import PropTypes from "prop-types";

function NavBarMobile({ setIsMobileMenuVisible }) {
    const navigate = useNavigate()

    return (
        <nav>
            <ul className={styles.list}>
                <span className={styles.list_item}><span className={styles.item_text} onClick={() => {
                    setIsMobileMenuVisible(false)
                    navigate('/')
                }}>Home</span></span>
                <span className={styles.list_item}><span className={styles.item_text} onClick={() => {
                    setIsMobileMenuVisible(false)
                    navigate('/about')
                }}>About us</span></span>
                <span className={styles.list_item}><span className={styles.item_text}>Kickstarter</span></span>
            </ul>
        </nav>
    )
}

export default NavBarMobile;

NavBarMobile.propTypes = {
    setIsMobileMenuVisible: PropTypes.func.isRequired,
}
