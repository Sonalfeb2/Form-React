import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import "./App.css";
function App() {
  const [userList, setUserList] = useState([]);
  const listHandler = newUser => {
    setUserList(list => [...list, newUser]);
  };
  return (
    <div>
      <section id="user-form">
        <UserInput listHandler={listHandler} />
      </section>
      <section id="user">
        <UserList lists={userList} />
      </section>
    </div>
  );
}

export default App;
