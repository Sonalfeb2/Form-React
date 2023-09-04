import React, { useState } from "react";
import "./UserInput.css";
import Button from "../UI/Button/Button";
const UserInput = props => {
  const [inputObj, setInputObj] = useState({
    username: "",
    age: ""
  });
  const formSubmitHandler = event => {
    event.preventDefault();
    if (
      inputObj.username.trim().length === 0 ||
      inputObj.age.trim().length === 0
    ) {
      props.ErrorMsgHandler("Please Enter Valid Name and Age(non-empty values)")
    } else if (inputObj.age < 0) {
      props.ErrorMsgHandler("Please Enter Valid Age(<0)");
    } else {
      props.listHandler({ id: Math.random().toString(), ...inputObj });
    }
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>UserName</label>
          <input
            type="text"
            onChange={e => {
              setInputObj(prevInput => ({
                ...prevInput,
                username: e.target.value
              }));
            }}
          />
        </div>
        <div className="form-control">
          <label>Age</label>
          <input
            type="number"
            onChange={e => {
              setInputObj(prevInput => ({ ...prevInput, age: e.target.value }));
            }}
          />
        </div>
        <Button type="submit">Add Employee</Button>
      </form>
    </div>
  );
};
export default UserInput;
