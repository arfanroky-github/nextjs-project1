import axios from "axios";
import { useQuery } from "react-query";

const User = () => {

    const {data:user, isLoading, isError} = useQuery(['user'], async () => axios.get(`http://localhost:8000/users/`))

    const handleUpdate = (e) => {
        e.preventDefault();
    
        const username = e.target.username.value;
        const position = e.target.position.value;
        createUserMutation.mutate({ name: username, position: position });
      };

  return (
    <div>
        <form
        onSubmit={handleUpdate}
        style={{
          width: "400px",
          margin: "2rem auto",
          border: "1px solid black",
          padding: "1rem",
        }}
      >
        <input type={"text"} name="username" placeholder="Username" />
        <br />
        <br />
        <input type={"text"} name="position" placeholder="Position" />
        <br />
        <br />
        <input type={"submit"} value="Add new user" />
      </form>
    </div>
  )
}

export default User