import { GoBackBtn } from "../ui/DetailPageComps/DetailsPageComps";
import { useNavigate } from "react-router-dom";
import Create from "../features/Create/Create";
import styled from "styled-components";
const StyledCreatePage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 5.2rem 4.2rem;
`;
const PageHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 6.4rem;
  margin-top: 1.3rem;
`;
const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  color: #3a4374;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: -2.5rem;
  left: 4.2rem;
  @media (max-width: 865px) {
    width: 4rem;
  }
`;
function CreatePage() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader>
        <GoBackBtn onClick={() => navigate(-1)}>Go Back</GoBackBtn>
      </PageHeader>
      <StyledCreatePage>
        <Image src="/images/plus.png" alt="" />
        <Header>
          <Title>Create New Feedback</Title>
        </Header>
        <Create />
      </StyledCreatePage>
    </>
  );
}

export default CreatePage;
