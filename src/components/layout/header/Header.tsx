import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoDark from "public/images/logo.gif";
import LogoLight from "public/images/logo.gif";
import LogoTwoDark from "public/images/logo.gif";
import LogoTwoLight from "public/images/logo.gif";
import LogoThreeDark from "public/images/logo.gif";
import { researches } from "@/data/researches";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " nav__menu-link--dropdown-active" : " ";
  };

  // window resize
  useEffect(() => {
    // eslint-disable-next-line
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };
    // eslint-disable-next-line
    handleResizeHeader();
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line
    const handleScroll = () => {
      // eslint-disable-next-line
      const scrollPosition = window.scrollY;
      // eslint-disable-next-line
      if (scrollPosition > 100) {
        // eslint-disable-next-line
        setScrolled(true);
      } else {
        // eslint-disable-next-line
        setScrolled(false);
      }
    };
    // eslint-disable-next-line
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // conditional classes for header
  const defaultClasses = "header";

  let logoSrc = LogoLight;
  let logoSrcMobile = LogoLight;

  const getPageHeaderClass = (pathname: string): string => {
    if (pathname === "/") {
      logoSrc = LogoDark;
      logoSrcMobile = LogoDark;
      return "header--dark";
    } else if (pathname === "/researches") {
      logoSrc = LogoDark;
      logoSrcMobile = LogoDark;
      return "header--dark";
    } else if (pathname === "/news") {
      logoSrc = LogoDark;
      logoSrcMobile = LogoDark;
      return "header--dark";
    } else if (pathname === "/index-light") {
      logoSrc = LogoLight;
      logoSrcMobile = LogoLight;
      return "";
    } else if (pathname === "/index-two") {
      logoSrc = LogoTwoDark;
      logoSrcMobile = LogoTwoDark;
      return "header--dark header-two";
    } else if (pathname === "/index-two-light") {
      logoSrc = LogoTwoLight;
      logoSrcMobile = LogoTwoLight;
      return "header--dark header-two";
    } else if (pathname === "/index-three") {
      logoSrc = LogoThreeDark;
      logoSrcMobile = LogoThreeDark;
      return "header--dark";
    } else if (pathname === "/index-three-light") {
      logoSrc = LogoLight;
      logoSrcMobile = LogoLight;
      return "header--dark";
    }
    return "";
  };

  const router = useRouter();
  const headerClass = "header--dark";

  const combinedClasses = `${
    scrolled ? " header-active" : ""
  } ${headerClass} ${defaultClasses}`;

  return (
    <header className={combinedClasses}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="nav">
              <div className="nav__content">
                <div className="nav__logo" id="header_logo">
                  <Link href="/">
                    <Image src={logoSrc} priority alt="Logo" />
                    <span className="logo_name">RiskLab AI Library</span>
                  </Link>
                </div>
                <div
                  className={
                    (openNav ? " nav__menu-active" : " ") + " nav__menu"
                  }
                >
                  <div className="nav__menu-logo d-flex d-xl-none">
                    <Link href="/" className="text-center hide-nav">
                      <Image src={logoSrcMobile} priority alt="Logo" />
                      <span style={{ fontSize: 14 }} className="logo_name">
                        RiskLab AI Library
                      </span>
                    </Link>
                    <button
                      aria-label="close the menu"
                      className="nav__menu-close"
                      onClick={closeNav}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <ul className="nav__menu-items">
                    {/* home */}
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <Link href="/" className="nav__menu-link hide-nav">
                        Home
                      </Link>
                    </li>
                    {/* news */}
                    <li className="nav__menu-item">
                      <Link href="/news" className="nav__menu-link hide-nav">
                        News
                      </Link>
                    </li>
                    {/* about */}
                    <li className="nav__menu-item">
                      <Link
                        href="/about-us"
                        className="nav__menu-link hide-nav"
                      >
                        About
                      </Link>
                    </li>
                    {/* contact us */}
                    <li className="nav__menu-item">
                      <Link
                        href="/contact-us"
                        className="nav__menu-link hide-nav"
                      >
                        Contact Us
                      </Link>
                    </li>
                    {/* research */}
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <a
                        className={`nav__menu-link nav__menu-link--dropdown ${isSubMenuButton(
                          "research"
                        )}`}
                        onClick={() => {
                          handleSubmenu("research");
                          router.push("/researches");
                        }}
                      >
                        Researches
                      </a>
                      <div
                        className={`nav__dropdown nav__dropdown--alt ${isSubMenuOpen(
                          "research"
                        )}`}
                      >
                        <ul>
                          {researches?.map((research, index) => (
                            <li key={index}>
                              <Link
                                className="nav__dropdown-item hide-nav"
                                href={`/researches/${research.id}`}
                              >
                                {research.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <div className="social">
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
                <div className="nav__uncollapsed">
                  <button
                    className={
                      (openNav ? " nav__bar-toggle" : " ") +
                      " nav__bar d-block d-xl-none"
                    }
                    onClick={handleNav}
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={(openNav ? " backdrop-active" : " ") + " backdrop"}
        onClick={closeNav}
      ></div>
    </header>
  );
};

export default Header;
