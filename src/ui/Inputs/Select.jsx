/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledSelect = styled.select`
  background-color: #f7f8fd;
  border: none;
  border-radius: 8px;
  padding: 1.3rem 2.4rem;
  width: 100%;
  text-transform: capitalize;
`;

const Option = styled.option`
  color: #3a4374;
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: capitalize;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
`;
function Select({
  title,
  subtitle,
  options,
  placeholder = "",
  register,
  registerName,
}) {
  return (
    <Container>
      <div>
        <Label>{title}</Label>
        <SubLabel>{subtitle}</SubLabel>
      </div>
      <StyledSelect defaultValue={placeholder} {...register(registerName)}>
        {placeholder !== "" && (
          <Option value={placeholder} disabled>
            {placeholder}
          </Option>
        )}
        {options.map((opt) => (
          <Option key={opt} value={opt.toLowerCase()}>
            {opt}
          </Option>
        ))}
      </StyledSelect>
    </Container>
  );
}

export default Select;
