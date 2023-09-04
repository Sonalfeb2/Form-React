import React from "react";
import './UserList.css';
const UserList = props => {
  return (
    <ul className="user-list">
      {props.lists.map(user =>
        <li className="user-item" key={user.id} id={user.id}>
          <p>
            Name : {user.username} Age: {user.age}
          </p>
        </li>
      )}
    </ul>
  );
};
export default UserList;
