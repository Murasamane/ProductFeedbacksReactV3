/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { upvote } from "../../services/apiProducts";
import { useUser } from "../../context/UserContext";
import Modal from "../Modal/Modal";
import Confirm from "../Confirm";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 6px solid ${({ $color }) => $color};
  border-radius: 5px;
  padding: 2.2rem;
  background: #fff;
  width: 100%;
  height: 27.2rem;
  gap: 1.8rem;
`;

const CardHeader = styled.header`
  display: flex;
  align-items: center;
`;
const CardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DescriptionTitle = styled.h2`
  color: #3a4374;
  font-size: 1.8rem;
  font-weight: bold;
`;
const DescriptionParagraph = styled.p`
  color: #647196;
  font-size: 1.6rem;
`;
const CardTitle = styled.p`
  color: #647196;
  text-transform: capitalize;
`;

const ContentTag = styled.div`
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

const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  max-width: 100%;

  @media (max-width: 400px) {
    width: 8px;
    height: 4px;
  }
`;

const UpvoteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $upvoted }) =>
    $upvoted === true ? "#4661E6" : "#f2f4fe"};
  color: ${({ $upvoted }) => ($upvoted === true ? "#FFF" : "#3A4374")};
  border-radius: 8px;
  padding: 1.4rem;
  width: 7rem;
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
const CommentLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 400px) {
    grid-row: 2;
    grid-column: 2;
    justify-self: flex-end;
  }
`;

const CommentCount = styled.span`
  color: #3a4374;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.222px;
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
function RoadmapCard({ data, color }) {
  const { _id: id } = data;
  const queryClient = useQueryClient();
  const { username } = useUser();
  const upvoted = data.upvoteCount.includes(username);
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: () => upvote(id, username),
    onSuccess: () => {
      queryClient.invalidateQueries(["roadmap"]);
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  const handleUpvote = () => {
    mutate();
  };
  const handleNavigateTo = () => {
    navigate(`/feedback/edit/${id}`);
  };
  return (
    <StyledCard $color={color}>
      <Modal>
        <CardHeader>
          <CardTitle>{data.status}</CardTitle>
        </CardHeader>
        <CardDescriptionContainer>
          <Modal.Open opens="edit">
            <EditContainer>
              <DescriptionTitle>{data.title}</DescriptionTitle>
              <DescriptionParagraph>{data.description}</DescriptionParagraph>
            </EditContainer>
          </Modal.Open>
        </CardDescriptionContainer>
        <ContentTag $length={data.category.length}>{data.category}</ContentTag>
        <CardFooter>
          <UpvoteContainer onClick={handleUpvote} $upvoted={upvoted}>
            <Image
              src={`${
                upvoted === false ? "/images/up.png" : "/images/upvoted.png"
              }`}
              alt=""
            />
            {data.upvotes}
          </UpvoteContainer>
          <CommentLogoContainer>
            <img src="/images/commentlogo.png" alt="comments" />
            <CommentCount>{data.comments?.length}</CommentCount>
          </CommentLogoContainer>
        </CardFooter>
        <Modal.Window
          name="edit"
          text={`Do you want to edit the feedback '${data.title}'`}
        >
          <Confirm
            text={`Edit`}
            color={"#AD1FEA"}
            handleChange={handleNavigateTo}
          />
        </Modal.Window>
      </Modal>
    </StyledCard>
  );
}

export default RoadmapCard;
