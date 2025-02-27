import { useNavigate } from 'react-router-dom'
import styles from './header.module.scss'

function Header() {
    const navigate = useNavigate()

    return (
        <header className={styles.container}>
            <h1 className={styles.title} onClick={() => {
                navigate('/')
            }}>Tavern of Stories Untold</h1>
        </header>
    )

}

export default Header;
