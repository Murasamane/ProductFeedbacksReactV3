import styled from "styled-components";

export const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 2.4rem 3.4rem;
  border-radius: 10px;
  gap: 2.8rem;
`;

export const CommentCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 3.2rem;
  row-gap: 1.7rem;
`;

export const GoBackBtn = styled.button`
  border: none;
  background: none;
  color: ${({ $color }) => (!$color ? "#647196" : "#fff")};
  font-weight: bold;
  font-size: 1.4rem;
`;

export const StylelessDiv = styled.div``;
export const EditFeedbackButton = styled.button`
  color: #f2f4fe;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1.3rem 2.4rem;
  border-radius: 10px;
  background-color: #4661e6;
  border: none;
  &:hover {
    opacity: 0.9;
  }
`;

export const UsernameTag = styled.p`
  color: #647196;
  font-size: 1.4rem;
`;

export const User = styled.p`
  color: #3a4374;
  font-size: 1.4rem;
  font-weight: bold;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const ReplyButton = styled.button`
  border: none;
  background: none;
  color: #4661e6;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const Content = styled.p`
  color: #647196;
  font-size: 1.5rem;
  grid-row: 2;
  grid-column: 2 / 2;
`;

export const CommentsCount = styled.h2`
  color: #3a4374;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.4rem 3.4rem;
  border-radius: 10px;
  gap: 2.4rem;
`;

export const FormTitle = styled.h2`
  color: #3a4374;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
`;

export const Textarea = styled.textarea`
  resize: none;
  border: none;
  background-color: #f7f8fd;
  padding: 1.6rem 2.4rem;
  border-radius: 5px;
  width: 100%;
`;

export const WordCount = styled.p`
  color: #647196;
  font-size: 1.5rem;
`;

export const PostButton = styled.button`
  background-color: #ad1fea;
  border-radius: 8px;
  color: #fff;
  padding: 1.2rem 2.4rem;
  border: none;
  flex-shrink: 0;
  align-self: self-start;
  &:hover {
    opacity: 0.9;
  }
`;

export const ReplyForm = styled.form`
  grid-column: 2;
  grid-row: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;
