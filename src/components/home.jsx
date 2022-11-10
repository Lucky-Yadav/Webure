import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
// import { loginloading, sucessLogin } from "../store/auth/action";

const Home = () => {
  const [products, setproducts] = useState([]);
    // const dispatch = useDispatch();

 
    const handlelogin = (id) => {
    axios({
      method: "post",
      url: "http://localhost:8080/cart",
      data: {
        product_id: id,
        Quantity: 1,
      },
    }).then((res) => {
      console.log(res);
      // dispatch(sucessLogin(res.data));
      console.log(res);
    });
}
  return (
    <div className="item_body">
      <h2>DashBoard</h2>
    </div>
  );
};

export default Home;
