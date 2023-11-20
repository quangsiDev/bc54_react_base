import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import axios from "axios";
import { message } from "antd";

export default function UserManagement() {
  const [userArr, setUserArr] = useState([]);
  // userArr chứa ds ng dùng
  // gọi api lấy ds ng dùng từ server khi user load trang
  useEffect(() => {
    fetchUserList();
  }, []);

  let fetchUserList = () => {
    // gọi ds ng dùng mới nhất từ server
    axios
      .get("https://643a58ee90cd4ba563f77786.mockapi.io/users")
      .then((result) => {
        setUserArr(result.data);
      })
      .catch((err) => {});
  };

  let handleDelete = (id) => {
    let url = `https://643a58ee90cd4ba563f77786.mockapi.io/users/${id}`;
    axios
      .delete(url)
      .then((res) => {
        message.success("Xoá thành công");
        console.log(res);
      })
      .catch((err) => {
        message.error("Đã có lỗi xảy ra");
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Form />
      <List handleDelete={handleDelete} userArr={userArr} />
    </div>
  );
}
