import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n/i18n.jsx"

function Header() {
  const {t} = useTranslation()
  function changeLanguage(e){
    i18n.changeLanguage(e.target.value);
    
  }
  return (
    <div className={`bg-[#28c66f] py-5`}>
      <div className="align-elements flex justify-between items-center">
        <Link
          to="/"
          className="font-semibold text-2xl text-[#fafeff] lg:text-xl"
        >
          {t('navbar.logo')}
        </Link>
        <nav className="flex items-center">
          <ul className="menu lg:menu-sm menu-horizontal rounded-box">
            <li>
              <Link to="/" className="lg:text-base xl:text-lg text-[#fafeff]">
              {t('navbar.home')}
              </Link>
            </li>
            <li className="group">
              <summary className="flex items-center justify-center lg:text-base xl:text-lg text-[#fafeff]">
                <p className="lg:text-base xl:text-lg text-[#fafeff]">{t('navbar.journal')}</p>
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
                    {t('navbar.journalAbout')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tahririyat-jamoasi"
                    className="lg:text-base xl:text-lg text-[#fafeff]"
                  >
                    {t('navbar.journalTeam')}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="lg:text-base xl:text-lg text-[#fafeff]"
                to="/nashrlar"
              >
                {t('navbar.nashr')}
              </Link>
            </li>
            <li>
              <Link
                to="/talabnoma"
                className="lg:text-base xl:text-lg text-[#fafeff]"
              >
                {t('navbar.talabnoma')}
              </Link>
            </li>
            <li>
              <Link
                to="/yangiliklar"
                className="lg:text-base xl:text-lg text-[#fafeff]"
              >
                {t('navbar.news')}
              </Link>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                className="lg:text-base xl:text-lg text-[#fafeff]"
              >
                {t('navbar.contact')}
              </HashLink>
            </li>
          </ul>
          <select onChange={changeLanguage} className="menu outline-none rounded bg-[#28c66f] text-white lg:text-base xl:text-lg">
            <option className="bg-none lg:text-base xl:text-lg" value="uz">
              O‘zbekcha
            </option>
            <option className="bg-none lg:text-base xl:text-lg" value="ru">
              Русский
            </option>
            <option className="bg-none lg:text-base xl:text-lg" value="en">
              English
            </option>
          </select>
        </nav>
      </div>
    </div>
  );
}

export default Header;
