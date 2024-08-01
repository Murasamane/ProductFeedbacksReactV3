import styled from "styled-components";
import Sidebar from "../../features/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import MainHeader from "../../ui/MainHeader";


const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 2.4rem;
  gap: 1rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  @media (max-width: 800px) {
    grid-row: 2;
    grid-column: 2;
  }
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <MainHeader />
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
