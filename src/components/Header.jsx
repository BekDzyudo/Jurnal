import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
function Header() {
  return (
    <div className={`bg-[#28c66f] py-5`}>
      <div className="align-elements flex justify-between items-center">
        <Link
          to="/"
          className="font-semibold text-2xl text-[#fafeff] lg:text-xl"
        >
          ILM VA TADQIQOT JURNALI
        </Link>
        <nav className="flex items-center">
          <ul className="menu lg:menu-sm menu-horizontal rounded-box">
            <li>
              <Link to="/" className="lg:text-base xl:text-lg text-[#fafeff]">
                Bosh sahifa
              </Link>
            </li>
            <li className="group">
              {/* <details> */}
              <summary className="flex items-center justify-center lg:text-base xl:text-lg text-[#fafeff]">
                <p className="lg:text-base xl:text-lg text-[#fafeff]">Jurnal</p>
                <span className="block group-hover:hidden transition duration-300">
                  <FaAngleDown/>
                </span>{" "}
                <span className="hidden group-hover:block transition duration-300">
                  <FaAngleUp/>
                </span>{" "}
              </summary>
              <ul className="p-1 bg-[#28c66f] z-50 w-48 absolute -left-4 top-9 hidden group-hover:block rounded-md">
                <li>
                  <Link
                    to="/jurnal-haqida"
                    className="lg:text-base xl:text-lg text-[#fafeff]"
                  >
                    Jurnal haqida
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tahririyat-jamoasi"
                    className="lg:text-base xl:text-lg text-[#fafeff]"
                  >
                    Tahririyat jamoasi
                  </Link>
                </li>
              </ul>
              {/* </details> */}
            </li>
            <li>
              <Link
                className="lg:text-base xl:text-lg text-[#fafeff]"
                to="/nashrlar"
              >
                Nashrlar
              </Link>
            </li>
            <li>
              <Link
                to="/talabnoma"
                className="lg:text-base xl:text-lg text-[#fafeff]"
              >
                Talabnoma
              </Link>
            </li>
            <li>
              <Link
                to="/yangiliklar"
                className="lg:text-base xl:text-lg text-[#fafeff]"
              >
                Yangiliklar
              </Link>
            </li>
            <li>
              {/* <Link to="/#contact" className="lg:text-base xl:text-lg text-[#fafeff]">Bog'lanish</Link> */}
              <HashLink
                smooth
                to="/#contact"
                className="lg:text-base xl:text-lg text-[#fafeff]"
              >
                Bog'lanish
              </HashLink>
            </li>
          </ul>
          <select className="menu outline-none rounded bg-[#28c66f] text-white lg:text-base xl:text-lg">
            <option className="bg-none lg:text-base xl:text-lg" value="uzbek">
              O‘zbekcha
            </option>
            <option className="bg-none lg:text-base xl:text-lg" value="rus">
              Русский
            </option>
            <option className="bg-none lg:text-base xl:text-lg" value="english">
              English
            </option>
          </select>
        </nav>
      </div>
    </div>
  );
}

export default Header;
