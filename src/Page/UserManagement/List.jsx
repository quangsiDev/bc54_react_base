import React from "react";

export default function List({ userArr, handleDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Account</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userArr.map(({ id, name, account, password }) => {
          return (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{account}</td>
              <td>{password}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
