import { createContext, useContext, useEffect, useState } from "react";

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
  currentColor: string;
  currentMode: string;
  setMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setColor: (color: string) => void;
  themeSettings: boolean;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext({} as ContextProps);

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }: ProviderProps) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<typeof initialState>(initialState);
  const [screenSize, setScreenSize] = useState<number>(0);
  const [currentColor, setCurrentColor] = useState<string>("#03C9D7");
  const [currentMode, setCurrentMode] = useState<string>("Light");
  const [themeSettings, setThemeSettings] = useState<boolean>(false);

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  function handleClick(prop: string) {
    setIsClicked({ ...initialState, [prop]: true });
  }

  useEffect(() => {
    const color = localStorage.getItem("colorMode");
    color && setCurrentColor(color);
  }, []);

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

        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
