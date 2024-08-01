/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../context/UserContext";
import { upvote } from "../../services/apiProducts";
import {
  CommentCount,
  CommentLogoContainer,
  ContentContainer,
  ContentDescription,
  ContentTag,
  ContentTitle,
  Image,
  StyledCard,
  UpvoteContainer,
} from "./Cards";
import toast from "react-hot-toast";

function Card({ feedback }) {
  const {
    title,
    description,
    category,
    comments,
    upvotes,
    _id: id,
    upvoteCount,
  } = feedback;
  const queryClient = useQueryClient();
  const { username } = useUser();
  const upvoted = upvoteCount.includes(username);
  const { mutate } = useMutation({
    mutationFn: () => upvote(id, username),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const handleUpvote = () => {
    mutate();
  };
  return (
    <StyledCard>
      <UpvoteContainer onClick={handleUpvote} $upvoted={upvoted}>
        <Image
          src={`${
            upvoted === false ? "/images/up.png" : "/images/upvoted.png"
          }`}
          alt=""
        />
        {upvotes}
      </UpvoteContainer>
      <ContentContainer to={`/feedback/${id}`}>
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>{description}</ContentDescription>
        <ContentTag $length={category.length}>{category}</ContentTag>
      </ContentContainer>

      <CommentLogoContainer>
        <img src="/images/commentlogo.png" alt="comments" />
        <CommentCount>{comments?.length}</CommentCount>
      </CommentLogoContainer>
    </StyledCard>
  );
}

export default Card;
