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

  screenSize: number;
  setScreenSize: React.Dispatch<React.SetStateAction<number>>;
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
  const [screenSize, setScreenSize] = useState(0);

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
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
