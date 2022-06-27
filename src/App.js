import React, {createContext, useState, useContext} from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const initialData = {
  username:"",
  useremail:"",
  userpassword:""
}

export const AuthContext = createContext()

function App() {
  const routing = useRoutes(routes);
  const [userData, setUserData] = useState(initialData)

  const addUserData = (name, data) => {
    setUserData(userData => ({
      ...userData,
      [name]: data
    }))
  }
  return (
    <AuthContext.Provider value={{userData, add:addUserData}}>
      <Header />

      <SmoothScroll>
        {routing}
        <Footer />
      </SmoothScroll>
      </AuthContext.Provider>
  );
}

export default App;
