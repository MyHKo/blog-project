import styles from './header.module.scss';
import SideMenuButton from "@components/Header/components/SideMenuButton/index.jsx";

function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>Great Table Top Game Blog</h1>
            <SideMenuButton />
        </header>
    )

}

export default Header;
