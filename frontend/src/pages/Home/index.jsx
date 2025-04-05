import { usePostStore } from '@stores/PostStore.js';
import styles from './home.module.scss'
import Post from "@components/Post/index.jsx";

function Home() {
    const posts = usePostStore().use((state) => state.products);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Latest Blog Posts</h1>
            {posts.map((post) => (
                <Post key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    )
}

export default Home;
