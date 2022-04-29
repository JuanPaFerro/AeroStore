import React, { useState, useEffect } from "react";
import axios from "axios";

export function useGetUserInfo() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const config = {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
  };

  useEffect(() => {
    setLoading(true);
    const fetchUserData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/me`,
        config
      );
      setUser(res.data);
    };
    fetchUserData();
    setLoading(false);
  }, []);

  return { user, loading };
}
