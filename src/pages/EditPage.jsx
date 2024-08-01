import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFeedback } from "../services/apiProducts";
import { GoBackBtn } from "../ui/DetailPageComps/DetailsPageComps";
import Edit from "../features/Edit/Edit";
import Loader from "../ui/Loader";
import styled from "styled-components";

const StyledEditPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7.5rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 5.2rem 4.2rem;
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

const PageHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 6.4rem;
  margin-top: 1.3rem;
`;

const Image = styled.img`
  position: absolute;
  /* width: 4.2rem;
  height: 5.8rem; */
  top: -2.5rem;
  left: 4.2rem;

  @media (max-width: 865px) {
    width: 4rem;
  }
`;
function EditPage() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [`editFeedback`, id],
    queryFn: () => getFeedback(id),
  });
  const navigate = useNavigate();

  if (isLoading) return <Loader />;

  return (
    <>
      <PageHeader>
        <GoBackBtn onClick={() => navigate(-1)}>Go Back</GoBackBtn>
      </PageHeader>
      <StyledEditPage>
        <Image src="/images/editfeedbackpen.png" alt="" />
        <Header>
          <Title>Editing `{data.title}`</Title>
        </Header>
        <Edit data={data} />
      </StyledEditPage>
    </>
  );
}

export default EditPage;
