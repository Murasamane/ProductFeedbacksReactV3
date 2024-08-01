import { useQuery } from "@tanstack/react-query";
import { getProjectCount } from "../services/apiProducts";

function useCount() {
  const { data, isLoading } = useQuery({
    queryKey: ["projectCounts"],
    queryFn: getProjectCount,
  });

  if (isLoading)
    return {
      plannedProjectCount: 0,
      inProgressProjectCount: 0,
      liveProjectCount: 0,
    };

  return {
    plannedProjectCount: data.plannedProjectCount,
    inProgressProjectCount: data.inProgressProjectCount,
    liveProjectCount: data.liveProjectCount,
  };
}

export default useCount;
