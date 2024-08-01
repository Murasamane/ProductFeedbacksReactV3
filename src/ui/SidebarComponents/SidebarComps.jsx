import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 800px) {
    flex-direction: row;
    grid-row: 1 / -1;
    grid-column: 2;
  }
`;
export const AsideHeader = styled.header`
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    166.82% 166.82% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  padding: 2.4rem;
  border-radius: 10px;
  justify-content: flex-end;
  width: 25.5rem;
  max-width: 100%;
  height: 13.7rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
`;

export const AsideSubtitle = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.75;
`;
export const AsideNavigation = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #fff;
  padding: 1.4rem;
  border-radius: ${({$isMobile = false})=> $isMobile ? '1rem' : 0};
  width: 25.5rem;
  max-width: 100%;
`;
export const StyledNavLinkCategory = styled(NavLink)`
  font-size: 1.6rem;
  text-decoration: none;
  background-color: #f2f4ff;
  padding: 0.5rem 1.6rem 0.6rem 1.6rem;
  border-radius: 0.8rem;
  color: #4661e6;
  &:active,
  &.active:link,
  &.active:visited {
    color: #fff;
    background-color: #4661e6;
  }
  &:hover {
    background-color: #cfd7ff;
  }
`;
export const RoadmapBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 2.4rem;
  gap: 1.5rem;
  @media (max-width: 860px) {
    padding: 1.5rem;
    flex-grow: 1;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const ListItemRoadmap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
`;

export const SecondaryHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  color: #3a4374;
`;

export const ViewLink = styled(Link)`
  color: #4661e6;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`;

export const ListTag = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
