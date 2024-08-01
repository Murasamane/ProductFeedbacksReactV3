import styled from "styled-components";
import { usePage } from "../../context/PaginationContext";

const StyledPagination = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  grid-column: 2;
  justify-self: center;
`;

const PaginationLink = styled.li`
  font-size: 1.6rem;
  color: ${({ $isActive }) => ($isActive === true ? "#fff" : "#000")};
  border: 1px solid ${({ $isActive }) => ($isActive === true ? "#4661E6" : "")};
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${({ $isActive }) => ($isActive === true ? "#4661E6" : "")};
  transform: scale(${({ $isActive }) => ($isActive === true ? 1.2 : 1)});
  &:hover {
    background-color: #7c91f9;
    color: #fff;
  }
`;
function Pagination() {
  const { dispatch, numPage, page } = usePage();
  if (!numPage) return null;

  const handlePagination = (value) => {
    dispatch({ type: "setPage", payload: value });
  };
  return (
    <StyledPagination>
      {Array.from({ length: numPage }, (_, i) => i + 1).map((el, index) => (
        <PaginationLink
          key={index}
          $isActive={page === el}
          onClick={() => handlePagination(el)}
        >
          {index + 1}
        </PaginationLink>
      ))}
    </StyledPagination>
  );
}

export default Pagination;
