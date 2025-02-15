import styles from './navbar.module.scss'


function NavBar() {
    return (
        <nav>
          <ul className={styles.list}>
            <span className={styles.list_item}><span className={styles.item_text}>Home</span></span>
            <span className={styles.list_item}><span className={styles.item_text}>Kickstarter</span></span>
          </ul>
        </nav>
    )
}

export default NavBar;
