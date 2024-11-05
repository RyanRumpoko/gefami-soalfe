import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [show, setShow] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", values.username);
    localStorage.setItem("password", values.password);
    setShow(!show);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onClick = (e) => {
    e.preventDefault();
    setShow(!show);
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  };
  return (
    <div>
      {!show && (
        <form onSubmit={onSubmit}>
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      )}
      {show && (
        <div>
          <h2>Selamat Datang</h2>
          <button onClick={onClick}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
