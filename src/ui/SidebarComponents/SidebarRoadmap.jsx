/* eslint-disable react/prop-types */
import {
  FlexContainer,
  ListItemRoadmap,
  ListTag,
  RoadmapBar,
  SecondaryHeading,
  UnorderedList,
  ViewLink,
} from "./SidebarComps";

function SidebarRoadmap({ handlePagination, planned, inProgress, live }) {
  return (
    <RoadmapBar>
      <FlexContainer>
        <SecondaryHeading>Roadmap</SecondaryHeading>
        <ViewLink to="/roadmap" onClick={handlePagination}>
          View
        </ViewLink>
      </FlexContainer>
      <UnorderedList>
        <ListItemRoadmap>
          <ListTag>
            <img src="/images/planneddot.png" alt="planned" />
            <span>Planned</span>
          </ListTag>
          <span>{planned}</span>
        </ListItemRoadmap>
        <ListItemRoadmap>
          <ListTag>
            <img src="/images/inprogressdot.png" alt="inprogress" />
            <span>In-Progress</span>
          </ListTag>
          <span>{inProgress}</span>
        </ListItemRoadmap>
        <ListItemRoadmap>
          <ListTag>
            <img src="/images/livedot.png" alt="live" /> <span>Live</span>
          </ListTag>
          <span>{live}</span>
        </ListItemRoadmap>
      </UnorderedList>
    </RoadmapBar>
  );
}

export default SidebarRoadmap;
