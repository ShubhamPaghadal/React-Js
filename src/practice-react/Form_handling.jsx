import React, { useState } from "react";

function Form_handaling() {
  let blankobj = { fname: "", email: "", gender: "", password: "" };
  const [obj, setobj] = useState({ ...blankobj });
  const [array, setarray] = useState([]);

  const getValu = (e) => {
    obj[e.target.name] = e.target.value;
    setobj({ ...obj });
  };

  const savedata = () => {
    setarray([...array, obj]);
    setobj({ ...blankobj }); // Reset obj state to blankobj
  };

  const editUser = (id) => {
    let editobj = array.find((x, index) => index === id);
    setobj({ ...editobj });
  };

  return (
    <div>
      <h1>Form_handaling</h1>
      <form className="w-50 p-4 border border-1 mx-auto my-4">
        <label>Fname</label>
        <input
          type="text"
          className="w-100"
          name="fname"
          value={obj.fname}
          onChange={getValu}
        />
        <label>Email</label>
        <input
          type="email"
          className="w-100"
          name="email"
          value={obj.email}
          onChange={getValu}
        />
        <label className="w-100">Gender</label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={obj.gender === "female"}
          onChange={getValu}
        />
        Female
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          checked={obj.gender === "male"}
          onChange={getValu}
        />
        Male
        <label className="w-100">Password</label>
        <input
          className="w-100"
          type="password"
          name="password"
          value={obj.password}
          onChange={getValu}
        />
        <div className="d-flex p-2">
          <button type="button" onClick={savedata}>
            Save
          </button>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {array.map((x, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{x.fname}</td>
                <td>{x.email}</td>
                <td>{x.gender}</td>
                <td>{x.password}</td>
                <td>
                  <button
                    className="btn btn-warning py-1 me-2"
                    onClick={() => {
                      editUser(i);
                    }}
                  >
                    Edit
                  </button>
                  <button className="btn btn-warning py-1 me-2">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Form_handaling;
