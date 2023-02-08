import { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/UI/Navbar";
import Products from "./Components/Store/Products";
import "./App.css";
import Login from "./Components/Store/Login";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  useEffect(() => {
    const storedUserLogginInfo = localStorage.getItem("isLogin");
    if (storedUserLogginInfo === "1") {
      setToken(true);
    }
  }, []);
  return (
    <Fragment>
      {token ? (
        <div>
          <Navbar setToken={setToken} /> <Products />
        </div>
      ) : (
        <Login token={token} setToken={setToken} />
      )}
    </Fragment>
  );
};

export default App;
