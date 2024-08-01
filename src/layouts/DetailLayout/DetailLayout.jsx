import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledFeedbackContainer = styled.div`
  position: relative;
  max-width: 117.5rem;
  margin: 0 auto;
  padding: 3.2rem;
`;

function DetailLayout() {
  return (
    <StyledFeedbackContainer>
      <Outlet />
    </StyledFeedbackContainer>
  );
}

export default DetailLayout;
