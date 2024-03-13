import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post =useLoaderData();
    const {body} = post;
    return (
        <div>
            <h2>Post Details: {body}</h2>
        </div>
    );
};

export default PostDetails;