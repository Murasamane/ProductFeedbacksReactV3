/* eslint-disable react/prop-types */
import { useState } from "react";
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

function Reply({ reply, register, handleAddReply, handleSubmit, error }) {
  const [replyOpen, setReplyOpen] = useState(false);
  return (
    <CommentCard key={reply.content}>
      <ProfileImage src={`/${reply.user.image}`} alt="" />
      <FlexContainer>
        <StylelessDiv>
          <User>{reply.user.name}</User>
          <UsernameTag>@{reply.user.username}</UsernameTag>
        </StylelessDiv>
        <ReplyButton onClick={() => setReplyOpen((state) => !state)}>
          Reply
        </ReplyButton>
      </FlexContainer>

      <Content>{reply.content}</Content>
      {replyOpen && (
        <ReplyForm onSubmit={handleSubmit(handleAddReply)}>
          <Textarea
            placeholder="Health benefits aside, I just like the darker aesthetic it brings"
            {...register("content", { required: true })}
          />
          {error.content && <p>Reply must not be empty</p>}
          <PostButton>Post reply</PostButton>
        </ReplyForm>
      )}
    </CommentCard>
  );
}

export default Reply;
