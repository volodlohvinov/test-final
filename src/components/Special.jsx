import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as getUniqId } from "uuid";

import Header from './Header.jsx'
import Footer from "./Footer.jsx";
import specialSmoothie from "../../server/server/data/specialSmoothie.mjs";
import { addToCart } from "../store/reducers/cartSlice.js";
import './Special.scss'

const Special = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    
      const specialSmoothie = {
        id:getUniqId(),
        ingredients: item.ingredients,
        size: item.size,
        totalPrice: item.price
      };
      dispatch(addToCart(specialSmoothie));
    }
    return( <div >
        < Header />
        <h1>Special mixes</h1>
      <ul className="Special__container">
        
        {specialSmoothie.map((smoothie) => (
          <li className="Special__card" key={smoothie.id}>
           <img
              className="Special__image"
              src={smoothie.image}
              alt={smoothie.name}
              />
            <h2>{smoothie.name}</h2>
            
            <p className="Special__ingredients">{smoothie.ingredients.fruits.map(fruit => fruit.id).join(", ")} {smoothie.ingredients.vegetables.map(vegetable => vegetable.id).join(", ")}</p>
            <p>Price: ${smoothie.price}</p>
            
          </li>
        ))}
          
          </ul>
        <Footer />
        </div>
        
    )
}
export default Special