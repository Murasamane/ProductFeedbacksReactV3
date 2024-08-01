/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
`;

const Label = styled.label`
  color: #3a4374;
  font-size: 1.4rem;
  font-weight: bold;
`;

const SubLabel = styled.p`
  color: #647196;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: capitalize;
`;

const Input = styled.input`
  background-color: #f7f8fd;
  padding: 1.3rem 2.4rem;
  color: #3a4374;
  border: none;
  border-radius: 8px;
`;
function TitleInput({ title = "", register }) {
  return (
    <StyledInput>
      <div>
        <Label>Feedback Title</Label>
        <SubLabel>Add a short, descriptive headline</SubLabel>
      </div>
      <Input
        type="text"
        defaultValue={title}
        {...register("title",{ required: true, minLength: 10 })}
      />
    </StyledInput>
  );
}

export default TitleInput;
