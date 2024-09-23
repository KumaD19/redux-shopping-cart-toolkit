import styled from "styled-components";

const ProductStyled = styled.div`
  width: 300px;
  height: 400px;
  padding: 10px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  background-color: #b47676;
  border-radius: 5px;
  text-align:center;
    
`;

const InfoContainer= styled.div`

  height:100px;
`;

const Button = styled.button`
  border: none;
  background-color: #000;
  color: #eee;
  cursor:pointer;
  padding:10px;
`;

const Img = styled.img`
  width:100px;
  height:100px;
`;

export { ProductStyled, Button, Img, InfoContainer };
