import PostCard from "@/components/postCard/postCard"
import styles from "./bolg.module.css"


const BlogPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
            <PostCard/>
            </div>
            <div className={styles.post}>
            <PostCard/>
            </div>
            <div className={styles.post}>
            <PostCard/>
            </div>
            <div className={styles.post}>
            <PostCard/>
            </div>
        </div>
    )
}

export default BlogPage
