import styled from "styled-components";
import Button from "../../ui/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GoBackBtn } from "../../ui/DetailPageComps/DetailsPageComps";

const StyledRoadmapLayout = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

const RoadmapHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #373f68;
  padding: 3.2rem 3.3rem;
  border-radius: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const RoadmapTitle = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 2.4rem;
`;

function RoadmapLayout() {
  const navigate = useNavigate();
  return (
    <StyledRoadmapLayout>
      <RoadmapHeader>
        <HeaderContainer>
          <GoBackBtn onClick={() => navigate(-1)} $color="#fff">
            &larr; Go Back
          </GoBackBtn>
          <RoadmapTitle>Roadmap</RoadmapTitle>
        </HeaderContainer>
        <Button>
          <Link to="/feedback/create">+ Add Feedback</Link>
        </Button>
      </RoadmapHeader>
      <Outlet />
    </StyledRoadmapLayout>
  );
}

export default RoadmapLayout;
