// context/userContext.js
import axios from "../utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();
export const useUsercontext = () => useContext(userContext);

export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [search,setSearch] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/profile", {
          withCredentials: true,
        });
        const data = response.data;

        setUsername(data.username);
        setUserId(data.id || data._id); // double check backend returns "id"
      } catch (err) {
        console.log("No user logged in");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <userContext.Provider
      value={{ username, setUsername, userId, setUserId, loading, setSearch }}
    >
      {children}
    </userContext.Provider>
  );
};
