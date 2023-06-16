import React, { useState, useEffect } from "react";
function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.log(error));
  }, []);
  const onClickSort = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));

    setUsers(sortedUsers);
  };
  console.log(users);
  return (
    <div>
      <button onClick={onClickSort}>Sort By Name</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
