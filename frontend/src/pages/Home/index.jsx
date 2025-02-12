import styles from './home.module.scss';

function Home() {
    return (
        <div className={styles.home_container}>
            <h1 className={styles.title}>Latest Blog Posts</h1>
        </div>
    )
}

export default Home;
