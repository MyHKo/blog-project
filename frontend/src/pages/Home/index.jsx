import Post from "@components/Post/index.jsx";
import styles from './home.module.scss';

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Latest Blog Posts</h1>
            <Post />
        </div>
    )
}

export default Home;
