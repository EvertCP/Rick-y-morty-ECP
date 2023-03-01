import styles from "./About.module.css";

export default function About(props) {
    return(
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>About</h1>
                <div className={styles.profile}>
                    <div className={styles.prfileContent}>
                        <p>Mi nombre es Evert Cardenas, soy desarrollador fullstack en proceso, tengo conocimientos solidos en HTML, CSS, JavaScript y React.</p>                       
                    </div>
                    <div className={styles.profileImg}>

                    </div>
                </div>

                <div className={styles.aboutApp}>
                    <h2>Sobre la APP</h2>
                    <p>Esta pagina fue hecha con React, HTML, CSS y JavaScript.</p>
                </div>
                <div className={styles.redes}>
                    <ul className={styles.redesList}>
                        <li>instagram</li>
                        <li>Linkedin</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}