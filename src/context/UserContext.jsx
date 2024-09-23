/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const navigate = useNavigate()
  const [user, setUser] = useState({ username: "" , password: "", token: false});

  const logOut = () => {
    setUser({ username: "", password: "", token: false});
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, setUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
