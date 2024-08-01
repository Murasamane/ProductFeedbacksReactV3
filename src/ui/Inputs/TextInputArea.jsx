/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
`;
const Label = styled.label`
  color: #3a4374;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: capitalize;
`;

const SubLabel = styled.p`
  color: #647196;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: capitalize;
`;
const TextInput = styled.textarea`
  background-color: #f7f8fd;
  padding: 1.6rem 2.4rem;
  resize: none;
  border: none;
  border-radius: 8px;
`;
function TextInputArea({ value = "", register, registerName }) {
  return (
    <StyledTextArea>
      <div>
        <Label>Feedback Detail</Label>
        <SubLabel>
          Include any specific comments on what should be improved, added, etc.
        </SubLabel>
      </div>
      <TextInput
        defaultValue={value}
        {...register(registerName, { required: true, minLength: 10 })}
      />
    </StyledTextArea>
  );
}

export default TextInputArea;
