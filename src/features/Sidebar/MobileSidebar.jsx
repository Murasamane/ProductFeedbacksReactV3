/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  AsideSubtitle,
  HeaderTitle,
} from "../../ui/SidebarComponents/SidebarComps";
import Hamburger from "hamburger-react";
import { useState } from "react";
import SidebarNavigation from "../../ui/SidebarComponents/SidebarNavigation";
import SidebarRoadmap from "../../ui/SidebarComponents/SidebarRoadmap";

const StyledMobileSidebar = styled.aside`
  display: flex;
  grid-column: 1 / -1;
  width: 100%;
`;

const MobileAsideHeader = styled.header`
  display: flex;
  background: radial-gradient(
    166.82% 166.82% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  padding: 2.4rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 13.7rem;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: flex-start;
  top: 77px;
  right: 11px;
  height: 100%;
  padding: 2.4rem;
  gap: 2.4rem;
  background-color: #f2f4ff;
  &::after {
    content: "";
    width: 55%;
    height: 100%;
    background-color: rgb(255 255 255 / 30%);
    backdrop-filter: blur(1px);
    position: absolute;
    left: -155%;
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(255 255 255 / 30%);
    backdrop-filter: blur(1px);
    position: absolute;
    left: -100%;
  }
`;

function MobileSidebar({
  title,
  subtitle,
  navigationSlugs,
  planned,
  inProgress,
  live,
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <StyledMobileSidebar>
      <MobileAsideHeader>
        <div>
          <HeaderTitle>{title}</HeaderTitle>
          <AsideSubtitle>{subtitle}</AsideSubtitle>
        </div>
        <Hamburger
          toggled={isNavOpen}
          toggle={setIsNavOpen}
          size={20}
          color="#fff"
        />
      </MobileAsideHeader>
      {isNavOpen && (
        <AbsoluteContainer>
          <SidebarNavigation
            $isMobile={true}
            data={navigationSlugs}
            handlePagination={() => setIsNavOpen(false)}
          />
          <SidebarRoadmap
            planned={planned}
            inProgress={inProgress}
            live={live}
          />
        </AbsoluteContainer>
      )}
    </StyledMobileSidebar>
  );
}

export default MobileSidebar;
