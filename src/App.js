import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import "./App.css";
import ErrorModule from "./components/UI/Button/ErrorModule";
function App() {
  const [userList, setUserList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const listHandler = newUser => {
    setUserList(list => [...list, newUser]);
  };
  const ErrorMsgHandler = msg => {
    setErrorMsg(msg);
    setShowModal(true);
  };
  return (
    <div>
      {showModal &&
        <ErrorModule title="An Error Occurred" message={errorMsg} closeModule={()=>setShowModal(false)} />}
      <section id="user-form">
        <UserInput
          listHandler={listHandler}
          ErrorMsgHandler={ErrorMsgHandler}
        />
      </section>
      <section id="user">
        <UserList lists={userList} />
      </section>
    </div>
  );
}

export default App;
