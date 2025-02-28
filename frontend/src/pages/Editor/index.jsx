import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import styles from './editor.module.scss'

function Editor() {
    const [content, setContent] = useState('')

    return (
        <div className={styles.container}>
            <span className={styles.title}>Provide text for your post</span>
            <div className={styles.quill_container}>
            <ReactQuill content={content} onChange={setContent}
                theme='snow'
                style={{height: '200px',}}
            />
            </div>
            <div className={styles.submit_button}>
                <span>Submit</span>
            </div>
        </div>
    )
}

export default Editor
