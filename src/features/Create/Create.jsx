import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedback } from "../../services/apiProducts";
import TitleInput from "../../ui/Inputs/TitleInput";
import TextInputArea from "../../ui/Inputs/TextInputArea";
import Select from "../../ui/Inputs/Select";
import toast from "react-hot-toast";
import styled from "styled-components";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem;
  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: baseline;
    align-items: stretch;
  }
`;

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: bold;
  color: #f2f4fe;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 10px;
  background-color: ${({ $background }) => $background};
`;
const Warning = styled.span`
  color: #d73737;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
function Create() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const queryClinet = useQueryClient();
  const { mutate, isLoading: isAdding } = useMutation({
    mutationFn: (data) => createFeedback(data),
    onSuccess: () => {
      queryClinet.invalidateQueries(["allFeedbacks"]);
      toast.success("Feedback created succesfully");
      navigate(`/`);
    },
    onError: () => {
      toast.error("Feedback could not be created");
    },
  });
  const handleFormSubmit = (data) => {
    mutate(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <TitleInput register={register} />
      {errors.title && <Warning>Title is required</Warning>}
      <Select
        options={["feature", "bugs", "UI", "UX", "enhancements"]}
        title={"category"}
        subtitle={"choose a category for your feedback"}
        register={register}
        registerName={"category"}
      />
      <TextInputArea register={register} registerName={"description"} />
      {errors.description && <Warning>Description is required</Warning>}
      <ButtonGroup>
        <Button
          disabled={isAdding}
          $background={"#3A4374"}
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button disabled={isAdding} $background={"#AD1FEA"}>
          Add Feedback
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default Create;
