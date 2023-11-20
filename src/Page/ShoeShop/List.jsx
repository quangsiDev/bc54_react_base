import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function List({ listShoe, handleAddToCart }) {
  return (
    <div style={{ height: "max-content" }} className="row col-4">
      {listShoe.map((item, index) => {
        return (
          <Card className="col-3" hoverable cover={<img alt="example" src={item.image} />}>
            <button
              style={{ height: "max-content" }}
              onClick={() => {
                handleAddToCart(item);
              }}
              className="btn btn-dark"
            >
              Add
            </button>
          </Card>
        );
      })}
    </div>
  );
}

// Card antd
