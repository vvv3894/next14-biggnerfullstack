import PostCard from "@/components/postCard/postCard";
import styles from "./bolg.module.css";

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}});
    //데이터 계속 변하면 노캐쉬가 낫고 쌓이는거면 캐쉬가 빠름 원래 캐쉬하는게 디폴트
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    return res.json()

}

const BlogPage = async () => {
    const posts = await getData()

    return (
        <div className={styles.container}>
            {posts.map(post=>(
                 <div className={styles.post} key={post.id}>
                 <PostCard post={post}/>
                 </div>

            ))}
        </div>
    );
};

export default BlogPage
