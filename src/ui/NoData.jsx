import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledNoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
function NoData() {
  return (
    <StyledNoData>
      <Container>
        <img src="/images/nodata.png" alt="" />
        <h2>There is no feedback yet.</h2>
        <p>
          Got a suggestion? Found a bug that needs to be squashed? <br /> We
          love hearing about new ideas to improve our app.
        </p>

        <Button>
          <Link to="/feedback/create">+Add Feedback</Link>
        </Button>
      </Container>
    </StyledNoData>
  );
}

export default NoData;
