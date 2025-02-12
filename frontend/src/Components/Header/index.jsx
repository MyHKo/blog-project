import NavBar from "@components/Header/Components/NavBar";
import LogIn from "@components/Header/Components/LogIn";
import styles from './header.module.scss';

function Header() {
    return (
        <header className={styles.header_container}>
            <h1 className={styles.title}>Dungeons and Dragons Blog</h1>
            <NavBar />
            <LogIn />
        </header>
    )

}

export default Header;
