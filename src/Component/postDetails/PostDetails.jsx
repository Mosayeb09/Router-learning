import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post =useLoaderData();
    const {body,id} = post;
    return (
        <div>
            <h2>POst details about :{id}</h2>
            <h2>Post Details: {body}</h2>
        </div>
    );
};

export default PostDetails;