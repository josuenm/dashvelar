import { links } from "@assets/data/dummy";
import { useStateContext } from "@contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { IoMdClose } from "react-icons/io";
import { SiShopware } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-[#0047ff] text-white text-md duration-300 hover:opacity-80 m-2 dark:text-gray-200";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md duration-300 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const { screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <aside className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware />
              <span>Dashvelar</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prev) => !prev)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
              >
                <IoMdClose />
              </button>
            </TooltipComponent>
          </div>

          <ul className="mt-10">
            {links.map((item) => (
              <li key={item.title}>
                <p className="text-gray-400 m-3 mt-3 uppercase">{item.title}</p>
                {item.links.map((link, index) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={index}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
