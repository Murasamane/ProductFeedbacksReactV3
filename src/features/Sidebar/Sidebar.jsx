import { StyledSidebar } from "../../ui/SidebarComponents/SidebarComps";
import useCount from "../../hooks/useCount";
import SidebarHeader from "../../ui/SidebarComponents/SidebarHeader";
import SidebarNavigation from "../../ui/SidebarComponents/SidebarNavigation";
import SidebarRoadmap from "../../ui/SidebarComponents/SidebarRoadmap";
import useResize from "../../hooks/useResize";
import MobileSidebar from "./MobileSidebar";


const navigationSlugs = [
  {
    name: "All",
    toSlug: "/",
  },
  {
    name: "UI",
    toSlug: "/categories/ui",
  },
  {
    name: "UX",
    toSlug: "/categories/ux",
  },
  {
    name: "Enhancment",
    toSlug: "/categories/enhancement",
  },
  {
    name: "Features",
    toSlug: "/categories/feature",
  },
  {
    name: "Bugs",
    toSlug: "/categories/bug",
  },
];

function Sidebar() {
  const { plannedProjectCount, inProgressProjectCount, liveProjectCount } =
    useCount();
  const innerWidth = useResize();

  if (innerWidth < 400)
    return (
      <MobileSidebar
        title="Frontend Mentor"
        subtitle="Feedback Board"
        navigationSlugs={navigationSlugs}
        planned={plannedProjectCount}
        inProgress={inProgressProjectCount}
        live={liveProjectCount}
      />
    );
  return (
    <StyledSidebar>
      <SidebarHeader title="Frontend Mentor" subtitle="Feedback Board" />
      <SidebarNavigation data={navigationSlugs} />
      <SidebarRoadmap
        planned={plannedProjectCount}
        inProgress={inProgressProjectCount}
        live={liveProjectCount}
      />
    </StyledSidebar>
  );
}

export default Sidebar;
