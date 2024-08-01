/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #c75af6;
  color: #f2f4fe;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
