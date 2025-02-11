import styles from './header.module.scss';

function Header() {
    return (
        <div className={styles.headerContainer}>
            <h1>Dungeons & Dragons Blog</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#discussion">Discussion</a></li>
                    <li><a href="#kickstarter">Kickstarter</a></li>
                </ul>
            </nav>
        </div>
    )

}

export default Header;
