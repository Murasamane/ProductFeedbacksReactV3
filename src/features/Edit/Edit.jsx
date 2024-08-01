/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFeedback, editFeedback } from "../../services/apiProducts";
import { useNavigate, useParams } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import TitleInput from "../../ui/Inputs/TitleInput";
import Select from "../../ui/Inputs/Select";
import TextInputArea from "../../ui/Inputs/TextInputArea";
import Modal from "../../ui/Modal/Modal";
import styled from "styled-components";
import Confirm from "../../ui/Confirm";
import toast from "react-hot-toast";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
function Edit({ data }) {
  const queryClient = useQueryClient();
  const { setIsOpen } = useModal();
  const { id } = useParams();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const { mutate: editMutate, isLoading: isEditing } = useMutation({
    mutationFn: (data) => editFeedback(data, id),
    onSuccess: () => {
      toast.success("Feedback edited successfully");
      queryClient.invalidateQueries();
      navigate(-1);
    },
    onError: (err) => {
      toast.error("Feedback could not be updated");
      console.log(err);
    },
  });
  const { mutate } = useMutation({
    mutationFn: deleteFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Feedback deleted successfully");
      navigate("/");
      setIsOpen(false);
    },
    onError: (err) => {
      toast.error("Feedback could not be deleted");
      console.log(err);
    },
  });

  const handleDelete = () => {
    mutate(id);
  };
  const handleFormSubmit = (formData) => {
    editMutate(formData);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <TitleInput title={data.title} register={register} />
      {errors.title && <Warning>Title is required</Warning>}
      <Select
        value={data.category}
        options={["feature", "bugs", "UI", "UX", "enhancements"]}
        title={"category"}
        subtitle={"choose a category for your feedback"}
        register={register}
        registerName={"category"}
      />
      <Select
        value={data.status}
        options={["suggestion", "planned", "in-progress", "live"]}
        title={"update status"}
        subtitle={"change feedback state"}
        register={register}
        registerName={"status"}
      />

      <TextInputArea
        value={data.description}
        register={register}
        registerName={"description"}
      />
      {errors.description && <Warning>Description is required</Warning>}
      <ButtonGroup>
        <Modal>
          <Modal.Open opens="delete">
            <Button type="button" $background={"#D73737"}>
              Delete
            </Button>
          </Modal.Open>

          <Modal.Window
            name="delete"
            text="Are you sure you want to delete this feedback?"
          >
            <Confirm
              handleChange={handleDelete}
              text="Delete"
              color="#D73737"
            />
          </Modal.Window>
        </Modal>
        <ButtonGroup>
          <Button
            type="button"
            $background={"#3A4374"}
            onClick={handleNavigateBack}
          >
            Cancel
          </Button>
          <Button $background={"#AD1FEA"} disabled={isEditing}>
            Add Feedback
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </Form>
  );
}
export default Edit;
