import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets/icons";
import { pickleplay_logo } from "../assets/logos";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { linkRef } = useRef(null);

  useEffect(() => {
    console.log(linkRef);

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
  }, [linkRef]);

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
          {/* logo */}
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
            <p
              ref={linkRef}
              className="text-white text-[18px] font-bold cursor-pointer flex"
            >
              PicklePlay
            </p>
          </Link>

          {/* desktop screen Nav */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            <Link
              ref={linkRef}
              to="/api/players/profile"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-secondary"
            >
              Profile
            </Link>

            <Link
              ref={linkRef}
              to="/api/players"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-secondary"
            >
              Players
            </Link>

            <Link
              ref={linkRef}
              to="/api/teams"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-secondary"
            >
              Teams
            </Link>

            <Link
              ref={linkRef}
              to="/api/tournaments"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-secondary"
            >
              Tournaments
            </Link>

            <Link
              ref={linkRef}
              to="/api/locations"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-secondary"
            >
              Locations
            </Link>

            <Link
              ref={linkRef}
              to="/api/signup"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-secondary"
            >
              Signup
            </Link>

            <Link
              ref={linkRef}
              to="/api/login"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-secondary"
            >
              Login
            </Link>

            <Link
              ref={linkRef}
              to="/api/logout"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-secondary"
            >
              Logout
            </Link>

            {navLinks.map((nav) => (
              <li
                ref={linkRef}
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* mobile & tablet screen Nav */}
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
                <Link
                  to="/api/players/profile"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="text-secondary"
                >
                  Profile
                </Link>

                <Link
                  to="/api/players"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="text-secondary"
                >
                  Players
                </Link>

                <Link
                  to="/api/teams"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="text-secondary"
                >
                  Teams
                </Link>

                <Link
                  to="/api/tournaments"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="text-secondary"
                >
                  Tournaments
                </Link>

                <Link
                  to="/api/locations"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="text-secondary"
                >
                  Locations
                </Link>

                <Link
                  to="/api/signup"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="text-secondary"
                >
                  Signup
                </Link>

                <Link
                  to="/api/login"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="text-secondary"
                >
                  Login
                </Link>

                <Link
                  to="/api/logout"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="text-secondary"
                >
                  Logout
                </Link>

                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
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
