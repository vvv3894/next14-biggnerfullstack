import Image from "next/image"
import styles from "./singlePost.module.css"


const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                   className={styles.img}
                   src="https://images.pexels.com/photos/28714404/pexels-photo-28714404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                   alt=""
                   fill
                />
                   
            
            
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>title</h1>
                <div className={styles.detail}>
                    <Image  
                        className={styles.avatar}
                        src="https://images.pexels.com/photos/28714404/pexels-photo-28714404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        width={50}
                        height={50}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>date</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.20</span>
                    </div>
                    

                </div>
                <div className={styles.cotent}>
                    lorem ipsum
                </div>
            </div>

           
        </div>
    )
}

export default SinglePostPage