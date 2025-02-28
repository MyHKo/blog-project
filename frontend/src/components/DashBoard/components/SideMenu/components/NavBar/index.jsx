import { useNavigate } from 'react-router-dom'
import styles from './navbar.module.scss'


function NavBar() {
    const navigate = useNavigate()

    return (
        <nav>
            <ul className={styles.list}>
                <span className={styles.list_item}><span className={styles.item_text} onClick={() => {
                    navigate('/')
                }}>Home</span></span>
                <span className={styles.list_item}><span className={styles.item_text} onClick={() => {
                    navigate('/about')
                }}>About us</span></span>
                <span className={styles.list_item}><span className={styles.item_text} onClick={() => {
                    navigate('/editor')
                }}>Add Post</span></span>
                <span className={styles.list_item}><span className={styles.item_text}>Kickstarter</span></span>
            </ul>
        </nav>
    )
}

export default NavBar;
