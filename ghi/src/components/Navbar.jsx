import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinksLoggedIn, navLinksNotLoggedIn } from "../constants";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import pickleplay_logo from "../assets/logos/pickleplay_logo.png";
import useToken from "@galvanize-inc/jwtdown-for-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { token } = useToken();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={pickleplay_logo}
              alt="logo"
              className="w-9 h-9 object-contain"
            />
            <p className="orange-text-gradient text-[18px] font-bold cursor-pointer flex">
              PicklePlay
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {token
              ? navLinksLoggedIn.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.id
                        ? "orange-text-gradient"
                        : "blue-text-gradient"
                    } hover:orange-text-gradient text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(nav.id)}
                  >
                    <Link to={`${nav.url}`}>{nav.id}</Link>
                  </li>
                ))
              : navLinksNotLoggedIn.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.id
                        ? "orange-text-gradient"
                        : "blue-text-gradient"
                    } hover:orange-text-gradient text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(nav.id)}
                  >
                    <Link to={`${nav.url}`}>{nav.id}</Link>
                  </li>
                ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {token
                  ? navLinksLoggedIn.map((nav) => (
                      <li
                        key={nav.id}
                        className={`${
                          active === nav.id
                            ? "orange-text-gradient"
                            : "blue-text-gradient"
                        } font-Roboto font-medium cursor-pointer text-[16px]`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.id);
                        }}
                      >
                        <Link to={`${nav.url}`}>{nav.id}</Link>
                      </li>
                    ))
                  : navLinksNotLoggedIn.map((nav) => (
                      <li
                        key={nav.id}
                        className={`${
                          active === nav.id
                            ? "orange-text-gradient"
                            : "blue-text-gradient"
                        } font-Roboto font-medium cursor-pointer text-[16px]`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.id);
                        }}
                      >
                        <Link to={`${nav.url}`}>{nav.id}</Link>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
