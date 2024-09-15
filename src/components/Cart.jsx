import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { remove } from "../store/CartSlice.js";

const Cart = () => {
  const cartProducts = useSelector((selector) => selector.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const cards = cartProducts?.map((product) => {
    return (
      <div
        className="col-md-3"
        key={product.id}
        style={{ marginBottom: "10px" }}
      >
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>INR: {product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "white" }}>
              <Button
                variant="danger"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </Button>
            </Card.Footer>
          </div>
        </Card>
      </div>
    );
  });

  return <div className="row m-2">{cards}</div>;
};

export default Cart;
