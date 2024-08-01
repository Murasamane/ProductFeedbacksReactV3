/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  CommentCard,
  Content,
  FlexContainer,
  PostButton,
  ProfileImage,
  ReplyButton,
  ReplyForm,
  StylelessDiv,
  Textarea,
  User,
  UsernameTag,
} from "./DetailPageComps/DetailsPageComps";
import { addReply } from "../services/apiProducts";
import RepliesContainer from "./RepliesContainer";
import Reply from "./Reply";

function CommentCards({ comment }) {
  const [replyOpen, setReplyOpen] = useState(false);

  const { id } = useParams();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: addReply,
    onSuccess: () => {
      queryClient.invalidateQueries("currentFeedback");
      reset();
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const handleAddReply = (data) => {
    mutate([
      id,
      comment.id,
      {
        content: data.content,
        replyingTo: comment.user.username,
        user: {
          image: "./assets/user-images/image-zena.jpg",
          name: "Zena Kelley",
          username: "velvetround",
        },
      },
    ]);
    setReplyOpen(false);
  };
  return (
    <CommentCard>
      <ProfileImage src={`/${comment.user.image}`} alt="" />
      <FlexContainer>
        <StylelessDiv>
          <User>{comment.user.name}</User>
          <UsernameTag>@{comment.user.username}</UsernameTag>
        </StylelessDiv>
        <ReplyButton onClick={() => setReplyOpen((state) => !state)}>
          Reply
        </ReplyButton>
      </FlexContainer>

      <Content>{comment.content}</Content>
      {replyOpen && (
        <ReplyForm onSubmit={handleSubmit(handleAddReply)}>
          <Textarea
            placeholder="Health benefits aside, I just like the darker aesthetic it brings"
            {...register("content", { required: true })}
          />
          {errors.content && <p>Reply must not be empty</p>}
          <PostButton disabled={isLoading}>Post reply</PostButton>
        </ReplyForm>
      )}
      <RepliesContainer>
        {comment.replies.map((reply) => (
          <Reply
            key={reply.content}
            reply={reply}
            register={register}
            handleAddReply={handleAddReply}
            handleSubmit={handleSubmit}
            error={errors}
          />
        ))}
      </RepliesContainer>
    </CommentCard>
  );
}

export default CommentCards;
