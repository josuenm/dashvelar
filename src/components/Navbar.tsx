import Profile from "@assets/profile.jpg";
import { useStateContext } from "@contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { Cart, Chat, Notification, UserProfile } from "./index";

interface NavButtonProps {
  title: string;
  customFunc: () => void;
  color: string;
  icon: React.ReactNode;
  dotColor: string;
}

const NavButton = ({
  title,
  color,
  icon,
  dotColor,
  customFunc,
}: NavButtonProps) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        className={`relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-gray-600`}
        style={{ color }}
        onClick={customFunc}
      >
        <span
          className={"absolute inline-flex rounded-full h-2 w-2 right-2 top-2"}
          style={{ backgroundColor: dotColor }}
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav className="relative flex justify-between p-2 md:mx-6">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
        dotColor=""
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
          dotColor=""
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor={currentColor}
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification2Line />}
          dotColor={currentColor}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-gray-600 rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={Profile}
              alt="Profile picture"
              className="w-8 h-8 rounded-full"
            />
            <p>
              <span className="text-gray-400 dark:text-gray-300 text-14">
                Hi,
              </span>{" "}
              <span className="text-gray-400 dark:text-gray-300 text-14 font-bold ml-1">
                Josué
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </nav>
  );
};

export default Navbar;
