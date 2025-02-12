import styles from './index.module.scss'

function Post() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Creating the Ultimate Dungeon</h1>
            <p className={styles.body}>Tips on how to craft an immersive and challenging dungeon for your players</p>
        </div>
    )
}

export default Post;
