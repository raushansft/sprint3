import React from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Home = () => {
   const {isAuth} = React.useContext(AuthContext);
   const {products} = React.useContext(CartContext);
  return (
   isAuth ? (<div>
   {
      products.map(item => {
         return (
            <div key={item.id}>
               <h2>{item.name}</h2>
               <p>{item.description}</p>
            </div>
         )
      })
   }
  </div>
  ) : null )
};

export default Home;