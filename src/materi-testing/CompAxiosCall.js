import React, { useState } from "react";
import axios from "axios";

export default function CompAxiosCall() {
  const [users, setUsers] = useState([]);

  const getUsersData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.log("err : ", err);
      });
  };

  return (
    <div>
      <p>List Member Programmer Barokah</p>
      <button onClick={getUsersData} data-testid="get-user">
        Get User
      </button>
      {users.map((user, id) => {
        return <p data-testid="user-name" key={id}>{user.name}</p>;
      })}
    </div>
  );
}
