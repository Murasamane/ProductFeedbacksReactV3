/* eslint-disable react/prop-types */
import { AsideNavigation, StyledNavLinkCategory } from "./SidebarComps";

function SidebarNavigation({ data, handlePagination }) {
  return (
    <AsideNavigation>
      {data.map((nav) => (
        <StyledNavLinkCategory
          key={nav.name}
          onClick={handlePagination}
          to={nav.toSlug}
        >
          {nav.name}
        </StyledNavLinkCategory>
      ))}
    </AsideNavigation>
  );
}

export default SidebarNavigation;
