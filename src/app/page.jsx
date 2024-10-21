import Image from "next/image";
import styles from "./home.module.css";



const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thougths Agency.</h1>
      <p className={styles.desc}>I cannot possibly thank you enough for this incredible tutorial.
        I was just appointed technical lead on a new project for my job,
        and we decided to use NextJS for it. Using what I learned from 
        this short lesson made my look like a friggin badass to leadership! 
        Thank you so much and keep up the great work!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contacts</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
    </div>;
};

export default Home;

