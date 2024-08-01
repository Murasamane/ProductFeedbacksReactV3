import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { addComment, getFeedback } from "../services/apiProducts";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CommentContainer,
  CommentsCount,
  EditFeedbackButton,
  FlexContainer,
  FormContainer,
  FormTitle,
  GoBackBtn,
  Header,
  PostButton,
  StyledDetailPage,
  Textarea,
  WordCount,
  Form,
} from "../ui/DetailPageComps/DetailsPageComps";
import CommentCards from "../ui/CommentCards";
import { useState } from "react";
import Loader from "../ui/Loader";
import Card from "../ui/Cards/Card";
import NotFound from "./NotFound";

function DetailPage() {
  const { id } = useParams();
  const [wordCount, setWordCount] = useState(250);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["currentFeedback", id],
    queryFn: () => getFeedback(id),
  });
  const queryClient = useQueryClient();
  const { mutate, isLoading: isCommenting } = useMutation({
    mutationFn: (formData) => addComment(formData, id),
    onSuccess: () => {
      queryClient.invalidateQueries("currentFeedback");
      reset();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleCommentSubmit = (data) => {
    mutate({
      content: data.content,
      user: {
        image: "./assets/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround",
      },
      replies: [],
    });
  };

  const countWords = (e) => {
    const inputValue = e.target.value;
    const remainingChars = 250 - inputValue.length;
    setWordCount(remainingChars);
  };
  if (isLoading) return <Loader />;
  if (isError) return <NotFound />;
  return (
    <StyledDetailPage>
      <Header>
        <GoBackBtn onClick={() => navigate(-1)}>Go Back</GoBackBtn>
        <EditFeedbackButton onClick={() => navigate(`/feedback/edit/${id}`)}>
          Edit Feedback
        </EditFeedbackButton>
      </Header>

      <Card feedback={data} />

      <CommentContainer>
        <CommentsCount>{data.comments.length} Comments</CommentsCount>
        {data?.comments.map((comment) => (
          <CommentCards comment={comment} key={comment.id} />
        ))}
      </CommentContainer>
      <FormContainer>
        <FormTitle>Add Comment</FormTitle>

        <Form onSubmit={handleSubmit(handleCommentSubmit)}>
          <Textarea
            placeholder="Type your comment here"
            {...register("content", { required: true, maxLength: 250 })}
            onChange={countWords}
            maxLength={250}
          />
          {errors.content && <p>Comment must not be empty</p>}
          <FlexContainer>
            <WordCount>{wordCount} Characters Left</WordCount>
            <PostButton disabled={isCommenting}>Post Comment</PostButton>
          </FlexContainer>
        </Form>
      </FormContainer>
    </StyledDetailPage>
  );
}

export default DetailPage;
