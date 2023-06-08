import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeDashboard from "./HomeDashboard";
import Login from "../Login/Login";
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  return <div>{user ? <HomeDashboard /> : <Login />}</div>;
};

export default Dashboard;
