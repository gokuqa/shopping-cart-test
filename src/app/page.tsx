"use client";

import { useState } from "react";
import { ProductsContainer } from "./Components/ProductsContainer";
import { CartModal } from "./Components/CartModal";
import { Header } from "./Components/Header";

export default function Home() {
  const [showCartResume, setShowCartResume] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <div className="App">
      <div className="contentPage">
        <Header setShowCartResume = {setShowCartResume} itemQuantity = {itemQuantity}/>
        <ProductsContainer itemQuantity = {itemQuantity} setItemQuantity = {setItemQuantity}/>
        {showCartResume && <CartModal handleClose = {()=>setShowCartResume(false)}/>}
      </div>
    </div>
  );
}

