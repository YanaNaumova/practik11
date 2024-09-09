import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const url = "https://dummyjson.com/users";

  async function getUsers() {
    try {
      const data = await axios.get(url);
      setUsers(data.data.users);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <ul key={user.id}>
            <li>
              <Link to={`/userProfile/${user.id}/${user.email}/${user.phone}`}>
                {user.lastName} {user.firstName}
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Users;
