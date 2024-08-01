import styled from "styled-components";
import {
  ProfileImage,
  User,
  UsernameTag,
} from "./DetailPageComps/DetailsPageComps";
import { useUser } from "../context/UserContext";

const StyledUserInterface = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #fff;
  padding: 1.4rem;
  border-radius: ${({ $isMobile = false }) => ($isMobile ? 0 : "1rem")};
  width: 25.5rem;
  max-width: 100%;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ActionButton = styled.button`
  font-size: 1.6rem;
  text-decoration: none;
  background-color: #f2f4ff;
  padding: 0.5rem 1.6rem 0.6rem 1.6rem;
  border-radius: 0.8rem;
  color: #4661e6;
  border: none;
`;

function UserInterface() {
  const { image, name, username } = useUser();
  return (
    <StyledUserInterface>
      <UserProfile>
        <ProfileImage src={image} alt="user image" />
        <div>
          <User>{name}</User>
          <UsernameTag>@{username}</UsernameTag>
        </div>
      </UserProfile>
      <ActionContainer>
        <ActionButton>Upvoted</ActionButton>
        <ActionButton>Bookmarks</ActionButton>
        <ActionButton>Created</ActionButton>
        <ActionButton>Log Out</ActionButton>
      </ActionContainer>
    </StyledUserInterface>
  );
}

export default UserInterface;
