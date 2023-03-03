import styles from "./About.module.css";
import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGithub} from 'react-icons/fa';

export default function About(props) {
    return(
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <h1 className={styles.title}>About</h1>
                <div className={styles.profile}>
                    <div className={styles.profileContent}>
                        <p>Mi nombre es Evert Cardenas, soy desarrollador fullstack en proceso, tengo conocimientos solidos en HTML, CSS, JavaScript y React.</p>                       
                    </div>
                   
                </div>

                <div className={styles.aboutApp}>
                    <h2 className={styles.title}>Sobre la APP</h2>
                    <p>Esta pagina fue hecha con React, HTML, CSS y JavaScript.</p>
                </div>
                <div className={styles.redes}>
                    <ul className={styles.redesList}>
                        <li><a href="https://github.com/EvertCP/" target="blank"><FaGithub style={{fontSize: '40px', position: 'center', margin: '.5rem'}}/></a> </li>
                        <li><a href="https://www.instagram.com/evertcp/" target="blank"><FaInstagram style={{fontSize: '40px', position: 'center', margin: '.5rem'}}/></a> </li>
                        <li><a href="https://www.linkedin.com/in/evert-cardenas-polo-564907156/" target="blank"><FaLinkedinIn style={{fontSize: '40px', position: 'center', margin: '.5rem'}}/></a> </li>
                    </ul>      
                </div>
            </div>
        </div>
    )
}