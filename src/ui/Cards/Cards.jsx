import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentTitle = styled.h3`
  color: #3a4374;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

export const ContentDescription = styled.p`
  color: #647196;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ContentTag = styled.div`
  color: #4661e6;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10px;
  background: #f2f4ff;
  align-self: flex-start;
  padding: 0.6rem 1.6rem;
  text-transform: ${({ $length }) =>
    $length > 2 ? "capitalize" : "uppercase"};
`;

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 4rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  max-width: 100%;
  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

export const CommentLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 400px) {
    grid-row: 2;
    grid-column: 2;
    justify-self: flex-end;
  }
`;

export const CommentCount = styled.span`
  color: #3a4374;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.222px;
`;

export const ContentContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  text-decoration: none;

  @media (max-width: 400px) {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
    width: 100%;
  }
`;

export const UpvoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ $upvoted }) =>
    $upvoted === true ? "#4661E6" : "#f2f4fe"};
  color: ${({ $upvoted }) => ($upvoted === true ? "#FFF" : "#3A4374")};
  border-radius: 8px;
  padding: 1.4rem;
  width: 4rem;
  height: 5.3rem;
  max-width: 100%;
  max-height: 100%;
  gap: 0.4rem;

  &:hover {
    background-color: #cfd7ff;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    width: 8rem;
    gap: 0rem;
    grid-row: 2;
    grid-column: 1;
  }
`;

export const Image = styled.img`
  max-width: 100%;

  @media (max-width: 400px) {
    width: 8px;
    height: 4px;
  }
`;
