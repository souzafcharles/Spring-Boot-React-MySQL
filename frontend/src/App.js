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
  const [message, setMessage] = useState({ text: "", type: "" }); // Estado da mensagem

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
          setMessage({ text: convertedResponse.message, type: "error" }); // Erro
        } else {
          setProducts([...products, convertedResponse]);
          setMessage({
            text: "Product registered successfully!",
            type: "success",
          }); // Sucesso
          clearForm();
        }
      });
  };

  const update = () => {
    fetch("http://localhost:8000/update", {
      method: "put",
      body: JSON.stringify(productObject),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((convertedResponse) => {
        if (convertedResponse.message !== undefined) {
          setMessage({ text: convertedResponse.message, type: "error" });
        } else {
          let tempVector = [...products];
          let index = tempVector.findIndex(
            (params) => params.code === productObject.code
          );
          tempVector[index] = productObject;
          setProducts(tempVector);

          setMessage({
            text: "Product updated successfully!",
            type: "success",
          });
          clearForm();
        }
      });
  };

  const remove = () => {
    fetch("http://localhost:8000/delete/" + productObject.code, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((convertedResponse) => {
        let tempVector = [...products];
        let index = tempVector.findIndex(
          (params) => params.code === productObject.code
        );
        tempVector.splice(index, 1);
        setProducts(tempVector);

        setMessage({ text: convertedResponse.message, type: "success" });
        clearForm();
      });
  };

  const clearForm = () => {
    setProductObject(product);
    setRegisterButton(true);
  };

  const clearMessage = () => {
    setMessage({ text: "", type: "" }); 
  };

  const selectProduct = (index) => {
    setProductObject(products[index]);
    setRegisterButton(false);
  };

  return (
    <div>
      <Form
        buttonHidden={buttonRegister}
        keyboardEvent={onType}
        register={register}
        object={productObject}
        cancel={clearForm}
        remove={remove}
        update={update}
        message={message} 
        clearMessage={clearMessage} 
      />

      <Table vector={products} select={selectProduct} />
    </div>
  );
}

export default App;
