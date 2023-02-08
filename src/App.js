import { Fragment, useState } from "react";
import Navbar from "./Components/UI/Navbar";
import Products from "./Components/Store/Products";
import "./App.css";
import Login from "./Components/Store/Login";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <Fragment>
      <Navbar setToken={setToken} />
      {token ? <Products /> : <Login token={token} setToken={setToken} />}
    </Fragment>
  );
};

export default App;
