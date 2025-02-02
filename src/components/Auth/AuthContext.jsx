import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function to validate user credentials
  const login = (email, password) => {
    if (email === "user@example.com" && password === "password123") {
      setUser({ email });
      return true; // Successful login
    }
    else if (email === "user2@example.com" && password === "password123") {
      setUser({ email });
      return true; // Successful login
    }
    else if (email === "user3@example.com" && password === "password123") {
      setUser({ email });
      return true; // Successful login
    }
    return false; // Invalid credentials
  };

  const logout = (navigate) => {
    setUser(null);
    navigate("/login"); // Use navigate passed as a parameter
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
