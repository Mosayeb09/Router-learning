import { useLoaderData } from "react-router-dom";
import Usser from "../Usser/Usser";
import '../Usser/UsserStyle.css'

const User = () => {

    const users = useLoaderData();
    return (
        <div>
            <h2>
                Users area :{users.length}
            </h2>
            <div className="users">
                {
                    users.map(user =><Usser key={user.id} user={user}></Usser>)
                }
            </div>
        </div>
    );
};

export default User;