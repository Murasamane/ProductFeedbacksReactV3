/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3.2rem;
`;
const ColumnTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #3a4374;
`;

const SubTitle = styled.p`
  color: #647196;
  font-size: 1.6rem;
`;
function RoadmapColumn({ data, render, title, subtitle }) {
  if (data.length === 0) return <div>No Data to Show</div>;

  return (
    <StyledColumn>
      <TitleContainer>
        <ColumnTitle>
          {title} ({data.length})
        </ColumnTitle>
        <SubTitle>{subtitle}</SubTitle>
      </TitleContainer>
      {data.map(render)}
    </StyledColumn>
  );
}

export default RoadmapColumn;
