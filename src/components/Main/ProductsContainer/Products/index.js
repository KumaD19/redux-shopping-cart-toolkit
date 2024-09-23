import { useDispatch } from "react-redux";
import { ProductStyled, Button, Img, InfoContainer } from "./styles";
import { addCart } from "../../../../state/products.slice";

const Products = ({ name, price, id, img }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCart({ name, id, img, quantity: 1 }));
  };

  return (
    <ProductStyled>
      <InfoContainer>
        <p>{name}</p>
        <p>${price}</p>
      </InfoContainer>
      <Img src={img} alt={name}></Img>
      <Button onClick={handleAdd}>Add To Cart</Button>
    </ProductStyled>
  );
};

export default Products;
