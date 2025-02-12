import styles from './navbar.module.scss'


function NavBar() {
    return (
        <nav>
          <ul className={styles.list}>
            <span className={styles.list_item}>Home</span>
            <span className={styles.list_item}>Kickstarter</span>
          </ul>
        </nav>
    )
}

export default NavBar;
