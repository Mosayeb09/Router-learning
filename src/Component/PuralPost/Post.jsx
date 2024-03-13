import { useLoaderData } from "react-router-dom";
import PostComponent from "../PostComponent/PostComponent";

const Post = () => {
    const data =useLoaderData();
    
    return (
        <div>
            <h2>Posts :{data.length}</h2>
            <div className="users">
                {
                    data.map(post => <PostComponent post ={post} key={post.id}></PostComponent> )
                }
            </div>
        </div>
    );
};

export default Post;