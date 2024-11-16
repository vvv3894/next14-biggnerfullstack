import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
    console.log("let's check where its work")
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>콘텐츠의 바다속에서 덕후들을 위한 도서관</h1>
                <p className={styles.desc}>콘텐츠의 바다속에서 덕후들을 위한 도서관이랄까 뭐랄까
                    콘텐츠의 바다속에서 덕후들을 위한 도서관이랄까 뭐랄까
                    콘텐츠의 바다속에서 덕후들을 위한 도서관이랄까 뭐랄까
                    콘텐츠의 바다속에서 덕후들을 위한 도서관이랄까 뭐랄까
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>100 K</h1>
                        <p>Year of experince</p>
                    </div>
                    <div className={styles.box}>
                        <h1>100 K</h1>
                        <p>Year of experince</p>
                    </div>
                    <div className={styles.box}>
                        <h1>100 K</h1>
                        <p>Year of experince</p>
                    </div>
                </div>

            </div>
            <div className={styles.imgContainer}>
                <Image 
                  src="/about.png"
                  alt="About Image"
                  fill
                  className={styles.img}
                />
            </div>
        </div>
    //   넥스트js는 html처럼 주소로 이미지 태그에서 바로 불러오기 불가능 콘피그에서..
    )
}

export default AboutPage