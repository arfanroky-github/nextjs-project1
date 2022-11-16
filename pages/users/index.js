import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
} from "../../hooks/reactQuery/fetch";

import { FaTrash, FaEdit } from "react-icons/fa";

const Users = () => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery(["users"], getUser);

  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const position = e.target.position.value;
    createUserMutation.mutate({ name: username, position: position });
  };

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  }

  console.log(users);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
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

      <div
        style={{
          width: "900px",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          margin: "2rem auto",
          border: "1px solid black",
          padding: "1rem",
        }}
      >
        {users?.map((user) => (
          <div
            style={{
              width: "240px",
              margin: "0 auto",
              padding: ".5rem",
              border: "1px solid black",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "10px",
            }}
            key={user.id}
          >
            <h2 style={{ padding: "0", margin: "0" }}>{user.id}</h2>
            <div>
              {user.name}
              <p style={{ margin: "0" }}>{user.position}</p>
            </div>
            <div>
              <FaEdit
               style={{ color: "green" }} />
              <br />
              <br />
              <FaTrash
                onClick={() => deleteUserMutation.mutate({ id: user.id })}
                style={{ color: "red" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
