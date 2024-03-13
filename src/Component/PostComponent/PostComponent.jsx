import { Link } from "react-router-dom";

const PostComponent = ({post}) => {
    const {id,title}=post;
    const postStyle = {
        border:"2px solid yellow",
        padding:"5px",
        borderRadius:'20px'

    }
    return (
        <div style={postStyle}>
            <h2>post of id:{id}</h2>
            <p>post of title :{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default PostComponent;