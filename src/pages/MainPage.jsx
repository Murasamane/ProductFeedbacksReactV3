import { useSuggestionCount } from "../context/SuggestionCountContext";
import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSortBy } from "../context/SortContext";
import { getAllFeedbacks } from "../services/apiProducts";
import { useParams } from "react-router-dom";
import Loader from "../ui/Loader";
import Card from "../ui/Cards/Card";
import NoData from "../ui/NoData";
import toast from "react-hot-toast";
import styled from "styled-components";

const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.2rem;
`;

const LoadMore = styled.button`
  align-self: center;
  padding: 0.5rem;
  border: none;
  font-size: 1.8rem;
  background: none;
  color: #4661e6;
`;
function Homepage() {
  const { sortBy } = useSortBy();
  const { category } = useParams();
  const { setSuggestionCount } = useSuggestionCount();
  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["allFeedbacks", sortBy, category],
      queryFn: ({ pageParam }) => getAllFeedbacks(sortBy, pageParam, category),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.feedbacks.length
          ? allPages.length + 1
          : undefined;
        return nextPage;
      },
    });

  useEffect(() => {
    setSuggestionCount(data?.pages[0].documentCount);

    return () => {};
  }, [data?.pages, setSuggestionCount]);

  const feedbackPages = data?.pages.map((feedbacks) =>
    feedbacks.feedbacks.map((feedback) => (
      <Card key={feedback._id} feedback={feedback} />
    ))
  );

  if (status === "pending") return <Loader />;
  if (status === "error") return <NoData />;
  if (status === "success" && data.pages[0].feedbacks.length === 0)
    return <NoData />;
  if (error) toast.error("Something went wrong!!!");

  const dataLength = data.pages
    .map((feedbacks) => feedbacks.feedbacks.length === 10)
    .every((el) => el === true);

  return (
    <StyledHomepage>
      {feedbackPages}
      {dataLength && (
        <LoadMore onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </LoadMore>
      )}
    </StyledHomepage>
  );
}

export default Homepage;
