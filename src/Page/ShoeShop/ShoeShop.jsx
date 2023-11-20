import React, { useState } from "react";
import { shoeArr } from "./data";
import List from "./List";
import Cart from "./Cart";

export default function ShoeShop() {
  const [listShoe, setListShoe] = useState(shoeArr);
  const [cart, setCart] = useState([]);
  // chức năng thêm sp vào giỏ hàng
  const handleAddToCart = (shoe) => {
    // clone giỏi hàng hiện tại và thêm item shoe được user click add
    // let newCart = [...cart, shoe];
    // setCart(newCart);
    // khi thêm 1 sp vào giỏi hàng sẽ có 2 trường hợp

    // kiểm tra trong giỏi hàng có sp này hay chưa
    let newCart = [...cart];

    let index = newCart.findIndex((item) => item.id == shoe.id);

    // th1 : sp chưa có trong giỏ hàng => push => sp có key soLuong = 1
    if (index == -1) {
      // tạo object newShoe : gồm object shoe và có thêm key soLuong : 1
      let newShoe = { ...shoe, soLuong: 1 };
      newCart.push(newShoe);
    } else {
      // th2 : sp đã có trong giỏ hàng => ko push  => update key soLuong
      newCart[index].soLuong++;
    }
    setCart(newCart);
  };

  // xoá sp khỏi giỏi hàng
  const handleDelete = (id) => {
    let newCart = cart.filter((item) => item.id != id);
    // newCart ~ lọc ra danh sách sp có id khác với sp dc user click delete
    setCart(newCart);
  };
  return (
    <div className="row">
      <Cart handleDelete={handleDelete} cart={cart} />
      <List handleAddToCart={handleAddToCart} listShoe={listShoe} />
    </div>
  );
}
