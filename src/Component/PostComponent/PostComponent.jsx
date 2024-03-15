import { Link, useNavigate } from "react-router-dom";

const PostComponent = ({post}) => {
    const {id,title}=post;
    const postStyle = {
        border:"2px solid yellow",
        padding:"5px",
        borderRadius:'20px'

    }
    const navigate = useNavigate();
    const handleDetails = ()=>{
        navigate(   `/post/${id}`)
        
    }
    const handleGOBack = ()=>{
        navigate(-1)
    }
    return (
        <div style={postStyle}>
            <h2>post of id:{id}</h2>
            <p>post of title :{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleDetails}>See Details</button>
            <button onClick={handleGOBack}>Go Back</button>
        </div>
    );
};

export default PostComponent;
