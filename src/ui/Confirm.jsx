/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: bold;
  color: #f2f4fe;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 10px;
  background-color: ${({ $background }) => $background};
`;

const StyledConfirm = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  gap: 2rem;
`;

function Confirm({ handleChange, text, color, onCloseModal }) {
  return (
    <StyledConfirm>
      <Button $background={color} onClick={handleChange}>
        {text}
      </Button>
      <Button $background={"#3a4374"} onClick={onCloseModal}>
        Cancel
      </Button>
    </StyledConfirm>
  );
}

export default Confirm;
