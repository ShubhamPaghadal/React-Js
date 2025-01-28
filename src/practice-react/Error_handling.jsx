import React, { useRef, useState } from "react";

function Error_handling() {
  let inputRef = useRef("");
  let inputRef2 = useRef("");
  let inputRef3 = useRef("");
  let inputRef4 = useRef("");
  // let newErrors = { name: "", email: "" };
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [contact, setcontact] = useState();
  //   setErrors(newErrors);

  function submitForm(e) {
    e.preventDefault();
    console.log("name :-", inputRef.current.value);
    console.log("email :-", inputRef2.current.value);
    console.log("password :-", inputRef3.current.value);
    console.log("contact :-", inputRef4.current.value);
  }

  return (
    <>
      <form
        className="w-50 p-4 border border-1 mx-auto my-4"
        onSubmit={submitForm}
      >
        <label>name</label>

        <input
          className="w-100"
          ref={inputRef}
          onChange={(e) => setName(e.target.name)}
          type="text"
          name="name"
          required
        />

        <p style={{ color: "red" }}>{name ? "" : "name is reqired"}</p>
        <label>email</label>
        <input
          className="w-100"
          onChange={(e) => setEmail(e.target.name)}
          ref={inputRef2}
          type="email"
          name="email"
          required
        />

        <p style={{ color: "red" }}>{email ? "" : "email is reqired"}</p>

        <label>password</label>
        <input
          className="w-100"
          onChange={(e) => setPassword(e.target.name)}
          ref={inputRef3}
          type="password"
          name="email"
          required
        />

        <p style={{ color: "red" }}>{password ? "" : "password is reqired"}</p>

        <label>Contect</label>
        <input
          className="w-100"
          onChange={(e) => setcontact(e.target.name)}
          ref={inputRef4}
          type="number"
          name="number"
          required
        />

        <p style={{ color: "red" }}>{contact ? "" : "contact is reqired"}</p>
        <br></br>
        <br></br>
        <button>Click</button>
      </form>
    </>
  );
}

export default Error_handling;
