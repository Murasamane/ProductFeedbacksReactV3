import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const NotFoundTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  color: #000;
`;

const GoBack = styled(Link)`
  font-size: 2.4rem;
  color: #000;
  font-weight: medium;
`;
function NotFound() {
  return (
    <StyledNotFound>
      <NotFoundTitle>Not Found Status: 404</NotFoundTitle>
      <GoBack to="/">Go Back</GoBack>
    </StyledNotFound>
  );
}

export default NotFound;
