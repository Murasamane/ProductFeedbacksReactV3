/* eslint-disable react/prop-types */
import { AsideHeader, AsideSubtitle, HeaderTitle } from "./SidebarComps";

function SidebarHeader({ title, subtitle }) {
  return (
    <AsideHeader>
      <HeaderTitle>{title}</HeaderTitle>
      <AsideSubtitle>{subtitle}</AsideSubtitle>
    </AsideHeader>
  );
}

export default SidebarHeader;
