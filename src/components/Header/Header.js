import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Dodaj import NavLink
import { useMediaQuery } from 'react-responsive';
import logo from '../../images/logo.png';
import './Header.css';
import { twJoin, twMerge } from 'tailwind-merge';

const Header = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {pathname} = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    const handleObserver = (entries) => {
      const entry = entries[0];

      return entry && entry.isIntersecting ? setIntersecting(true) : setIntersecting(false);
    };

    if (ref.current) {
      observer = new IntersectionObserver(handleObserver);
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref]);

  return (
    <header ref={ref} className={twJoin("w-full h-[64px]   ",
      pathname === "/" ? "bg-transparent" : "bg-black",

    )}>
      <nav className={twMerge("flex text-white relative items-center px-5 py-3 justify-between h-[64px] transition-all duration-300 ease-in bg-blend-difference",
        pathname === "/" && !isIntersecting ? "bg-black " : "",
        !isIntersecting ? " fixed top-0 z-[21] w-full bg-black" : " relative top-0 bg-transparent z-[21] w-full",
        pathname !== "/" ? "bg-black fixed top-0" : "",

      )}>
        <NavLink to="/" className="text-white hover:text-gray-300 transition-all h-[50px] ">
          <img src={logo} alt="Logo" className='w-full h-full  ' />
        </NavLink>
        {isSmallScreen ? (
          <button
            className={`block text-white hover:text-gray-300 focus:text-white focus:outline-none ${isMenuOpen ? 'hidden' : 'visible'
              }`}
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        ) : (
          <ul className="flex text-gray-300 uppercase">
            <li>
              <NavLink
                exact
                to="/"
                className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "hover:border-white border-gray-300 border-b ease-in px-5 py-4 text-base font-medium header-element transition-all" : "hover:border-white border-b-transparent border-b ease-in px-5 py-4 text-base font-medium header-element transition-all"
                }
              >
                START
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nasza-oferta"
                className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "hover:border-white border-gray-300 border-b ease-in px-5 py-4 text-base font-medium header-element transition-all" : "hover:border-white border-b-transparent border-b ease-in px-5 py-4 text-base font-medium header-element transition-all"
                }
              >
                Katalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/o-nas"
                className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "hover:border-white border-gray-300 border-b ease-in px-5 py-4 text-base font-medium header-element transition-all" : "hover:border-white border-b-transparent border-b ease-in px-5 py-4 text-base font-medium header-element transition-all"
                }
              >
                O NAS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kontakt"
                className={({isActive, isPending})=>
                  isPending ? "pending" : isActive ? "hover:border-white border-gray-300 border-b ease-in px-5 py-4 text-base font-medium header-element transition-all" : "hover:border-white border-b-transparent border-b ease-in px-5 py-4 text-base font-medium header-element transition-all"
                }
              >
                KONTAKT
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
      {isSmallScreen && (
        <>
          <div
            className={`absolute inset-0 h-screen bg-gray-800 transition-opacity  ${isMenuOpen ? 'opacity-75 visible' : 'opacity-0 invisible'
              } z-50`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`absolute h-screen top-0 right-0 w-full max-w-md bg-white  transition-all transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } z-50`}
          >
            <div className="p-4 grid">
              <button
                className="text-gray-700 place-self-end mr-2 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
            <ul className="py-2 px-4">
              <li className="mb-2">
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-gray-900"
                  className="text-gray-700 hover:text-gray-900 font-medium block transition-all"
                >
                  Start
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/nasza-oferta"
                  activeClassName="text-gray-900"
                  className="text-gray-700 hover:text-gray-900 font-medium block transition-all"
                >
                  Katalog
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/o-nas"
                  activeClassName="text-gray-900"
                  className="text-gray-700 hover:text-gray-900 font-medium block transition-all"
                >
                  O Nas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kontakt"
                  activeClassName="text-gray-900"
                  className="text-gray-700 hover:text-gray-900 font-medium block transition-all"
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
