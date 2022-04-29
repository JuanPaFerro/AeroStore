import React, { useState, useEffect, createContext } from "react";
export const Context = createContext();
import axios from "axios";

export const Provider = ({ children }) => {
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/me`, {
      headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
    });
    setUser(res.data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const value = {
    fetchUserData,
    user,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
