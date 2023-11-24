import React, { useState } from "react";

export default function Form() {
  const [formValue, setFormValue] = useState({
    name: "tommy",
    account: "tomyyyyy",
    password: "123",
  });
  let handleChangeForm = (e) => {
    console.log(e.target.name);
  };
  return (
    <div>
      <input
        name="name"
        value={formValue.name}
        type="text"
        class="form-control"
        placeholder="Name"
      />
      <input
        name="account"
        value={formValue.account}
        type="text"
        class="form-control"
        placeholder="Account"
      />
      <input
        name="password"
        value={formValue.password}
        type="text"
        class="form-control"
        placeholder="Password"
      />
      <button className="btn btn-primary">Add</button>
    </div>
  );
}
