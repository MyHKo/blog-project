import styles from './header.module.scss';

function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>Great Table Top Game Blog</h1>
        </header>
    )

}

export default Header;
