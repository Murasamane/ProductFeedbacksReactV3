/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledRepliesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  grid-column: 2;
  grid-row: 4;
`;

function RepliesContainer({children}) {
  return <StyledRepliesContainer>{children}</StyledRepliesContainer>;
}

export default RepliesContainer;
