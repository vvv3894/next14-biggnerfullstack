import Image from "next/image"
import styles from "./singlePost.module.css"

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    //데이터 계속 변하면 노캐쉬가 낫고 쌓이는거면 캐쉬가 빠름 원래 캐쉬하는게 디폴트
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    return res.json()

}


const SinglePostPage = async ({params}) => {
    const {slug} = params;

    const post = await getData();
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                   src="https://images.pexels.com/photos/28714404/pexels-photo-28714404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                   alt=""
                   fill
                   className={styles.img}
                />         
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>t{post.title}</h1>
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
                  {post.body}
                </div>
            </div>

           
        </div>
    )
}

export default SinglePostPage