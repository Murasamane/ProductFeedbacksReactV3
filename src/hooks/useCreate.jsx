/* eslint-disable no-unused-vars */
import { useMutationState, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useCreate({ reset }) {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();
  const { mutate, isLoading } = useMutationState({
    mutationFn: "editFeedback",
    onSuccess: () => {
      queryClinet.invalidateQueries();
      reset();
      navigate(-1);
    },
    onError: () => {
      console.log("failed to update");
    },
  });
  return <div></div>;
}

export default useCreate;
