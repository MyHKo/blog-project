import styles from './about.module.scss'

function About() {
    return (
        <div className={styles.container}>
            <span className={styles.title_main}> Welcome to Our World – A New Fantasy Adventure Awaits! </span>
            <div className={styles.text_body}>
                Greetings, travelers! We are excited to welcome you to this blog, a dedicated space where we will
                share the journey of creating our own fantasy tabletop RPG adventure. Whether you are a seasoned
                adventurer or just stepping into the world of TTRPGs, this is the place for you!
            </div>
            <span className={styles.title_secondary}>What This Blog is About</span>
            <div className={styles.text_body}>
                Here, we will document the development of our unique Dungeons & Dragons-inspired project,
                offering behind-the-scenes insights, world-building details, new mechanics,
                and storytelling inspirations.
                Expect posts covering:

                <ul className={styles.point_list}>
                    <li>
                        🛡 Expansive Lore – Deep dives into the world, its locations, factions, and mysteries.
                    </li>
                    <li>
                        🎲 Game Mechanics – Innovative rules, spells, and mechanics designed to enhance role-playing.
                    </li>
                    <li>
                        📖 Storytelling & Narrative – The heart of the adventure and how choices shape the world.
                    </li>
                </ul>
            </div>
            <span className={styles.title_secondary}>Who is This For?</span>
            <div className={styles.text_body}>
                If you love fantasy, role-playing, and immersive storytelling, this blog is for you! Whether you're a
                DM looking for inspiration, a player eager for new adventures, or simply someone who enjoys epic worlds,
                we invite you to be part of this journey.
            </div>
            <span className={styles.title_secondary}>Join Us on This Quest</span>
            <div className={styles.text_final_remark}>
                This blog is not just about sharing our project – it's about building a community of fantasy and RPG
                lovers. Your thoughts, feedback, and ideas are invaluable, and we’d love to hear from you! Feel free to
                comment, discuss, and share your own experiences as we bring this world to life together.
            </div>
            <div className={styles.text_final_remark}>
                So grab your dice, prepare your spells, and step into a world where every decision matters. The adventure begins now! ✨
            </div>
            <div className={styles.text_final_remark}>
                Stay tuned for our next post, where we’ll introduce the setting and core mechanics of this exciting new world.
            </div>
            <div className={styles.text_final_remark}>
                Thank you for being here – and welcome to our world!
            </div>
        </div>
    )
}

export default About
