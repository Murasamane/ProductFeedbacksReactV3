/* eslint-disable react/prop-types */
import { ModalContextProvider } from "./ModalContext";
import { SortContextProvider } from "./SortContext";
import { SuggestionCountContextProvider } from "./SuggestionCountContext";
import { UserContextProvider } from "./UserContext";

function MainContextProvider({ children }) {
  return (
    <UserContextProvider>
      <SuggestionCountContextProvider>
        <SortContextProvider>
          <ModalContextProvider>{children}</ModalContextProvider>
        </SortContextProvider>
      </SuggestionCountContextProvider>
    </UserContextProvider>
  );
}

export default MainContextProvider;
