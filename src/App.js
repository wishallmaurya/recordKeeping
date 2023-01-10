import Header from "./components/Header";
// import Code from "./components/Code";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, phone,email }]);
    setName("");
    setPhone("");
    setEmail("");
  };
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
 const deleteAll =()=>{
  setData([])
 }

  return (
    <div className="App">
      <h1>
        <Header />
      </h1>
      <br />
      {/*form------------------------------------------------------------- */}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            id="outlined-required"
            label="Name"
            defaultValue="Vishal"
          />
          <TextField
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            id="outlined-required"
            label="Phone"
            defaultValue="Vishal"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            id="outlined-required"
            label="Email"
            defaultValue="wish"
          />
          <Button onClick={addData} variant="contained" color="success">
            <LibraryAddIcon />
          </Button>
        </Stack>
      </div>
      {/* data -------------------------------------------------------------*/}
      <div className="data">
        <div className="data-val">
          <h4>Name</h4>
          <h4>Phone</h4>
          <h4>Email</h4>
          <h4 onClick={() => deleteAll()}>Remove</h4>
        </div>
        <hr />
        {data.map((element, index) => {
          return (
            <div key={index} className="data-val">
              <h4>{element.name}</h4>
              <h4>{element.phone}</h4>
              <h4>{element.email}</h4>
              <Button onClick={() => removeItem(index)}>
                <RemoveCircleIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
