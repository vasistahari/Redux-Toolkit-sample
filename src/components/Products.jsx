import React, { useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice.js";
import { getProducts } from "../store/ProductSlice.js";

const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState(null);
  const { data: products, status } = useSelector((state) => state.products);

  // const getProducts = async () => {
  //   let productsList = await axios.get("https://fakestoreapi.com/products");
  //   console.log(productsList.data, "products");
  //   setProducts(productsList.data);
  // };

  useEffect(() => {
    (async () => {
      // await getProducts();
      dispatch(getProducts());
    })();
  }, []);

  const addToCart = (product) => {
    // dispatch add action
    console.log("product", product);
    dispatch(add(product));
  };

  const cards = products?.map((product) => {
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
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add to cart
              </Button>
            </Card.Footer>
          </div>
        </Card>
      </div>
    );
  });

  if (status === "loading") {
    return (
      <div className="text-center">
        <Spinner
          animation="border"
          className="text-center mt-5"
          style={{ width: "100px", height: "100px", margin: "auto" }}
        />
        ;
      </div>
    );
  }

  if (status === "error") {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong...! Please try again.
      </Alert>
    );
  }

  return (
    <>
      <h1 className="text-center">Product Dashboard</h1>
      <div className="row m-2">{cards}</div>
    </>
  );
};

export default Products;
