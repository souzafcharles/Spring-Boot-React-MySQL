import {useState} from 'react';
import "./App.css";
import Form from "./form";
import Table from "./table";

function App() {
  const [btnRegister, setBtnRegister] = useState(true);

  return (
    <div>
      <Form buttonHidden={btnRegister} />
      <Table />
    </div>
  );
}

export default App;
