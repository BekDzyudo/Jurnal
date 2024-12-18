import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n/i18n.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const { t } = useTranslation();
  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div className={`bg-[#28c66f] py-5`}>
      <div className="align-elements flex flex-col lg:flex-row justify-between items-center">
        <Link
          to="/"
          className="font-semibold text-[15px] xl:text-2xl text-[#fafeff] md:text-base lg:text-xl"
        >
          {t("navbar.logo")}
        </Link>
        <nav className="flex items-center md:justify-start justify-between w-full md:w-auto">
          <div className="dropdown dropdown-end md:hidden">
            <GiHamburgerMenu
              tabIndex={0}
              role="button"
              className=" text-2xl text-white  btn btn-ghost btn-circle avatar p-2"
            />
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#28c66f] rounded-box z-[1] w-48 mr-[-130px] mt-3 p-2 shadow"
            >
              <li>
                <Link
                  to="/"
                  className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/jurnal-haqida"
                  className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                >
                  {t("navbar.journalAbout")}
                </Link>
              </li>
              <li>
                <Link
                  to="/tahririyat-jamoasi"
                  className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                >
                  {t("navbar.journalTeam")}
                </Link>
              </li>
              <li>
                <Link
                  className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                  to="/nashrlar"
                >
                  {t("navbar.nashr")}
                </Link>
              </li>
              <li>
                <Link
                  to="/talabnoma"
                  className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                >
                  {t("navbar.talabnoma")}
                </Link>
              </li>
              <li>
                <Link
                  to="/yangiliklar"
                  className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                >
                  {t("navbar.news")}
                </Link>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#contact"
                  className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                >
                  {t("navbar.contact")}
                </HashLink>
              </li>
            </ul>
          </div>
          <ul className="menu lg:menu-sm menu-horizontal rounded-box hidden md:flex">
            <li>
              <Link
                to="/"
                className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li className="group">
              <summary className="flex items-center justify-center lg:text-lg text-[15px] xl:text-lg text-[#fafeff]">
                <p className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]">
                  {t("navbar.journal")}
                </p>
                <span className="block group-hover:hidden transition duration-300">
                  <FaAngleDown />
                </span>{" "}
                <span className="hidden group-hover:block transition duration-300">
                  <FaAngleUp />
                </span>{" "}
              </summary>
              <ul className="p-1 bg-[#28c66f] z-50 w-48 absolute -left-4 top-9 hidden group-hover:block rounded-md">
                <li>
                  <Link
                    to="/jurnal-haqida"
                    className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                  >
                    {t("navbar.journalAbout")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tahririyat-jamoasi"
                    className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                  >
                    {t("navbar.journalTeam")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
                to="/nashrlar"
              >
                {t("navbar.nashr")}
              </Link>
            </li>
            <li>
              <Link
                to="/talabnoma"
                className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
              >
                {t("navbar.talabnoma")}
              </Link>
            </li>
            <li>
              <Link
                to="/yangiliklar"
                className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
              >
                {t("navbar.news")}
              </Link>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                className="lg:text-lg text-[15px] xl:text-lg text-[#fafeff]"
              >
                {t("navbar.contact")}
              </HashLink>
            </li>
          </ul>
          <select
            onChange={changeLanguage}
            className="menu outline-none rounded bg-[#28c66f] text-white lg:text-lg text-[15px] xl:text-lg"
          >
            <option
              className="bg-none lg:text-lg text-[15px] xl:text-lg"
              value="uz"
            >
              O‘zbekcha
            </option>
            <option
              className="bg-none lg:text-lg text-[15px] xl:text-lg"
              value="ru"
            >
              Русский
            </option>
            <option
              className="bg-none lg:text-lg text-[15px] xl:text-lg"
              value="en"
            >
              English
            </option>
          </select>
        </nav>
      </div>
    </div>
  );
}

export default Header;
