import { useSortBy } from "../context/SortContext";
import { Link } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import { useSuggestionCount } from "../context/SuggestionCountContext";
import useResize from "../hooks/useResize";

const StyledMainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #373f68;
  padding: 2.3rem;
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
`;
const SelectFilter = styled.select`
  border-radius: 10px;
  background: #373f68;
  color: #f2f4fe;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  padding: 1rem;
`;

const FilterOption = styled.option`
  color: #647196;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #fff;
`;

function MainHeader() {
  const { setSortBy } = useSortBy();
  const { suggestionCount } = useSuggestionCount();
  const innerWidth = useResize();
  const handleSortBy = (sortBy) => {
    setSortBy(sortBy);
  };
  return (
    <StyledMainHeader>
      <FlexContainer>
        {innerWidth >= 400 && (
          <FlexContainer>
            <img src="/images/suggestionsbulb.png" alt="" />
            <Title>
              <span>{suggestionCount}</span> Suggestions
            </Title>
          </FlexContainer>
        )}
        <FormContainer>
          <SelectFilter
            name="selectfilter"
            id="filter"
            onChange={(e) => handleSortBy(e.target.value)}
          >
            <FilterOption value="-upvotes">Most Upvotes</FilterOption>
            <FilterOption value="+upvotes">Least Upvotes</FilterOption>
            <FilterOption value="-comments">Most Comments</FilterOption>
            <FilterOption value="+comments">Least Comments</FilterOption>
          </SelectFilter>
        </FormContainer>
      </FlexContainer>
      <Button>
        <Link to="/feedback/create">+ Add Feedback</Link>
      </Button>
    </StyledMainHeader>
  );
}

export default MainHeader;
