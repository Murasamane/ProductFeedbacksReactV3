/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  image: "./assets/user-images/image-zena.jpg",
  name: "Zena Kelley",
  username: "velvetround",
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};
function UserContextProvider({ children }) {
  const [{ image, name, username }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <UserContext.Provider
      value={{
        image,
        name,
        username,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("user context being used outside of provider");

  return context;
};

export { UserContextProvider, useUser };
