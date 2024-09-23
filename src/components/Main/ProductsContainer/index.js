import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from "./Products";
import { Section } from "./styles";
import { fetchProducts } from '../../../state/products.slice';
import { FAILED, IDLE, LOADING } from '../../../state/status';

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const status = useSelector(state => state.products.status);

  useEffect(() => {
    if (status === IDLE) {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

 

  return (
    <Section>
      {products.map((product) => {
        const { id, title, price, image } = product;
        return <Products name={title} key={id} price={price} id={id} img={image} />;
      })}
      {
        status === LOADING && <p>Loading products</p>
      }

      {
        status === FAILED && <p>Error loading products</p>
      }
    </Section>
  );
};

export default ProductsContainer;