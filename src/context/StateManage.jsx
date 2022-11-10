import React, { createContext, useState } from "react";
// import { axios } from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [openmanage, setopenmanage] = useState(false)
    
  const value = {
      openmanage,
      setopenmanage
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
