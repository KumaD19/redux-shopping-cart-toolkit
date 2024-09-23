import React from "react";
import { useSelector } from "react-redux";
import ShoppingItem from "./ShoppingItem";
import { Section } from "./styles";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.products.cart);

  return (
    <Section>
      {cartItems.map((item) => {
        const { id, name, quantity, img } = item;

        return (
          <ShoppingItem
            key={id}
            id={id}
            name={name}
            quantity={quantity}
            img={img}
          />
        );
      })}
    </Section>
  );
};

export default ShoppingCart;
