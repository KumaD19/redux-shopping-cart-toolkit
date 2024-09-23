import styled from "styled-components";

const Section = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap: 15px;
  height:fit-content;
  justify-content:center;
`;

export { Section };
