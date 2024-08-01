import { useQuery } from "@tanstack/react-query";
import { getProjectCount } from "../services/apiProducts";
import RoadmapColumn from "../ui/RoadmapComponents/RoadmapColumn";
import RoadmapCard from "../ui/RoadmapComponents/RoadmapCard";
import Loader from "../ui/Loader";
import useResize from "../hooks/useResize";
import MobileRoadmap from "../ui/RoadmapComponents/RoadmapMobile";
import styled from "styled-components";

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
`;

function RoadmapPage() {
  const innerWidth = useResize();
  const { data, isLoading } = useQuery({
    queryKey: ["roadmap"],
    queryFn: getProjectCount,
  });

  if (isLoading) return <Loader />;

  const { planned, inProgress, live } = data.feedbacks;

  if (innerWidth <= 850) {
    return (
      <MobileRoadmap
        plannedFeedbacks={planned}
        inProgressFeedback={inProgress}
        liveFeedback={live}
      />
    );
  }
  return (
    <MainContainer>
      <RoadmapColumn
        title={"Planned"}
        subtitle={"Ideas prioritized for research"}
        data={planned}
        render={(feedbackData) => (
          <RoadmapCard
            key={feedbackData.id}
            color={"#F49F85"}
            data={feedbackData}
          />
        )}
      />
      <RoadmapColumn
        title={"In-Progress"}
        subtitle={"Currently being developed"}
        data={inProgress}
        render={(feedbackData) => (
          <RoadmapCard
            key={feedbackData.id}
            color={"#AD1FEA"}
            data={feedbackData}
          />
        )}
      />
      <RoadmapColumn
        title={"Live"}
        subtitle={"Currently being developed"}
        data={live}
        render={(feedbackData) => (
          <RoadmapCard
            key={feedbackData.id}
            color={"#62BCFA"}
            data={feedbackData}
          />
        )}
      />
    </MainContainer>
  );
}

export default RoadmapPage;
