import { useEffect, useState } from "react";
import "./App.css";
import Form from "./form";
import Table from "./table";

function App() {
  const product = {
    code: 0,
    name: "",
    brand: "",
  };
  const [btnRegister, setBtnRegister] = useState(true);
  const [products, setProducts] = useState([]);
  const [productObject , setProductObject] = useState(product);

  useEffect(() => {
    fetch("http://localhost:8000/list")
      .then((response) => response.json())
      .then((converted_response) => setProducts(converted_response));
  }, []);

  return (
    <div>
      <p>{JSON.stringify(productObject)}</p>
      <Form buttonHidden={btnRegister} />
      <Table vector={products} />
    </div>
  );
}

export default App;
