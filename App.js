import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const isEmailValid = (email) => {
  // Email validation logic, you can use a regular expression or any library of your choice
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setEmailError("Enter valid Email");
      return;
    }
    alert(`Name: ${name}\nE-mail:${email}\nMessage:${message}`);
    setName("");

    setEmail("");
    setMessage("");
  }

  return (
    <form className="main-container" onSubmit={handleSubmit}>
      <input
        className="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        className="email"
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        className="message"
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></input>
      <button className="submit">Submit</button>
      {emailError && <div>{emailError}</div>}
    </form>
  );
}

function App() {
  return <UserForm></UserForm>;
}

export default App;
