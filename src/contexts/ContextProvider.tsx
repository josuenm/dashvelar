import { createContext, useContext, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

interface InitialStateProps {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

interface ContextProps {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;

  handleClick: (prop: string) => void;

  isClicked: InitialStateProps;
  setIsClicked: React.Dispatch<React.SetStateAction<InitialStateProps>>;
}

const StateContext = createContext({} as ContextProps);

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }: ProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  function handleClick(prop: string) {
    setIsClicked({ ...initialState, [prop]: true });
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
