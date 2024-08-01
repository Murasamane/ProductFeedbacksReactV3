import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Homepage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import DetailLayout from "./layouts/DetailLayout/DetailLayout";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";
import RoadmapLayout from "./layouts/RoadmapLayout/RoadmapLayout";
import RoadmapPage from "./pages/RoadmapPage";
import NotFound from "./pages/NotFound";

function App() {
  const queryClinet = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClinet}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/categories/:category" element={<Homepage />} />
          </Route>

          <Route path="/feedback" element={<DetailLayout />}>
            <Route path="/feedback/:id" element={<DetailPage />} />
            <Route path={`/feedback/edit/:id`} element={<EditPage />} />
            <Route path={`/feedback/create`} element={<CreatePage />} />
          </Route>

          <Route path="/roadmap" element={<RoadmapLayout />}>
            <Route index element={<RoadmapPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#4661E6",
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
