import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <div className={styles.imgContainer}>
            <Image src="/about.png" alt="fill" width={500} height={500}/>
            </div>
        </div>
    //   넥스트js는 html처럼 주소로 이미지 태그에서 바로 불러오기 불가능 콘피그에서..
    )
}

export default AboutPage