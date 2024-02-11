import { React, useState, useEffect } from "react";
import { logo } from "../assets";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [projectsActive, setProjectsActive] = useState(true);
  const [linkClicked, setLinkClicked] = useState(false);

  useEffect(() => {
    if (window.location.pathname == "/portfolio/about") {
      setProjectsActive(false);
    }
  }, []);

  function clickLink() {
    setLinkClicked(!linkClicked);
  }

  return (
    <>
      <nav className="fixed w-full flex items-center justify-between z-20 py-8 px-8 xm:px-12">
        <div className="title flex items-center gap-4">
          <div className="img w-6 xs:w-8">
            <img src={logo} className="w-full" />
          </div>
          <div className="text hidden xm:block">
            <h4 className="text-xl font-medium">Fattah Rizqi</h4>
            <p className="text-xs text-gray-400">Frontend Web Dev</p>
          </div>
        </div>

        <div className="menu relative flex bg-semitransparent rounded-full border border-[rgba(255,255,255,0.1)] backdrop-blur-sm p-2 overflow-hidden">
          <div className={`bg-color-menu absolute ${projectsActive ? "left-2 right-1/2" : "left-1/2 right-2"} top-2 bottom-2 rounded-full bg-semitransparent transition-all`}></div>
          <Link to="/portfolio/" onClick={() => setProjectsActive(true)} className="rounded-full text-center text-sm px-4 xs:px-6 py-2">
            Works
          </Link>
          <Link to="/portfolio/about" onClick={() => setProjectsActive(false)} className="rounded-full text-center text-sm px-4 xs:px-6 py-2">
            About
          </Link>
          {/* <p>{window.location.pathname}</p> */}
        </div>

        {/* desktop */}
        <div className="relative hidden xm:flex gap-6">
          <a href="https://linkedin.com/in/fattahrizqi" target="__blank" className="flex items-center text-sm gap-1">
            LinkedIn <ArrowUpRight size={20} />
          </a>
          <a href="https://github.com/fattahrizqi" target="__blank" className="flex items-center text-sm gap-1">
            Github <ArrowUpRight size={20} />
          </a>
        </div>

        {/* mobile */}
        <div className="relative block xm:hidden">
          <div onClick={() => clickLink()} className="icon  border border-[rgba(255,255,255,0.3)] backdrop-blur-sm rounded-full cursor-pointer p-[10px] xs:p-[14px]">
            <ArrowUpRight size={24} />
          </div>
          <div className={`${linkClicked ? "flex" : "hidden"} absolute top-16 right-0 flex-col gap-6  border border-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-lg p-4 transition-all`}>
            <a href="https://linkedin.com/in/fattahrizqi" target="__blank" className="flex items-center text-sm gap-1">
              LinkedIn <ArrowUpRight size={20} />
            </a>
            <a href="https://github.com/fattahrizqi" target="__blank" className="flex items-center text-sm gap-1">
              Github <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </nav>

      <div className="dark-gradient bg-navbarLinear fixed top-0 left-0 right-0 h-36 z-10"></div>
    </>
  );
}

export default Navbar;
