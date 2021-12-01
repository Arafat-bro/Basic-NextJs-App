import styles from '../styles/About.module.css';
import Head from 'next/head'

const About = () => {
    return ( 
    <>
            <Head>
                <title>Next App | About</title>
                <meta name="keywords" content="arafat" />
            </Head>
            <h2>About Page</h2>
            <p className={styles.text}>This is About Page</p>
    </> );
}
 
export default About;