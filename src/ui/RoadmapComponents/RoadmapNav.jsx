/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledRoadmapNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-bottom: 1px solid #999;
`;
const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const NavigationListItem = styled.li`
  color: #3a4374;
  text-align: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.181px;
`;

const StyledNavLink = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
  color: ${({ $isActive }) => $isActive && `#3a4374`};
  border-bottom: ${({ $isActive, $color }) =>
    $isActive && `4px solid ${$color}`};
`;
function RoadmapNav({
  isActive,
  onActive,
  plannedLength,
  inProgressLength,
  liveLength,
}) {
  return (
    <StyledRoadmapNav>
      <NavigationList>
        <NavigationListItem>
          <StyledNavLink
            name="planned"
            $isActive={isActive === "planned"}
            onClick={(e) => onActive(e.target.name)}
            $color="#F49F85"
          >
            Planned ({plannedLength})
          </StyledNavLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledNavLink
            name="inprogress"
            $isActive={isActive === "inprogress"}
            onClick={(e) => onActive(e.target.name)}
            $color="#AD1FEA"
          >
            In-Progress ({inProgressLength})
          </StyledNavLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledNavLink
            name="live"
            $isActive={isActive === "live"}
            onClick={(e) => onActive(e.target.name)}
            $color="#62BCFA"
          >
            Live ({liveLength})
          </StyledNavLink>
        </NavigationListItem>
      </NavigationList>
    </StyledRoadmapNav>
  );
}

export default RoadmapNav;
