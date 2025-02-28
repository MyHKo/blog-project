import { useState } from 'react'
import ReactQuill from 'react-quill'
import styles from './editor.module.scss'

function Editor() {
    const [content, setContent] = useState('')

    return (
        <div className={styles.container}>
            <ReactQuill content={content} onChange={setContent} theme='snow'/>
        </div>
    )
}