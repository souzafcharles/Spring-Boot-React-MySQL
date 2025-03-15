import { useEffect, useState } from "react";
import "./App.css";
import Form from "./form";
import Table from "./table";

function App() {
  const product = {
    name: "",
    brand: "",
  };
  const [buttonRegister, setRegisterButton] = useState(true);
  const [products, setProducts] = useState([]);
  const [productObject, setProductObject] = useState(product);

  useEffect(() => {
    fetch("http://localhost:8000/list")
      .then((response) => response.json())
      .then((convertedResponse) => setProducts(convertedResponse));
  }, []);

  const onType = (event) => {
    setProductObject({
      ...productObject,
      [event.target.name]: event.target.value,
    });
  };

  const register = () => {
    fetch("http://localhost:8000/register", {
      method: "post",
      body: JSON.stringify(productObject),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((convertedResponse) => {
        if (convertedResponse.message !== undefined) {
          alert(convertedResponse.message);
        } else {
          setProducts([...products, convertedResponse]);
          alert("Product registered successfully!");
          clearForm();
        }
      });
  };

  const clearForm = () => {
    setProductObject(product);
    setRegisterButton(true);
  }

  return (
    <div>
      <Form buttonHidden={buttonRegister} keyboardEvent={onType} register={register} object={productObject}/>
      <Table vector={products} />
    </div>
  );
}

export default App;
