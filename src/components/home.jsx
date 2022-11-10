import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const token = useSelector((state) => state.auth.token);
    
  return (
    <div>
      <h2>Now You are on Protected Dash Board { token}</h2>
    </div>
  );
}

export default Home