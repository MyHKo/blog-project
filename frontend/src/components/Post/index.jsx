import styles from './index.module.scss'
import PropTypes from 'prop-types'

function Post({ title, body }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.body}>{body}</p>
        </div>
    )
}

export default Post;

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}
