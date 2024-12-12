import React from "react";
import { Link } from "react-router-dom";
// #2596be
// 45b3c2
function Header() {
  return (
    <div className={`bg-[#28c66f] py-5 mb-10`}>
      <div className="align-elements flex justify-between items-center">
        <Link to="/" className="font-semibold text-xl text-[#fafeff]">
          ILM VA TADQIQOT JURNALI
        </Link>
        <nav className="flex items-center">
          <ul className="menu menu-horizontal rounded-box">
            <li>
              <Link to="/" className="text-lg text-[#fafeff]">Bosh sahifa</Link>
            </li>
            <li>
              <details>
                <summary className="text-lg text-[#fafeff]">Jurnal</summary>
                <ul className="p-1 bg-[#28c66f] w-48">
                  <li>
                    <Link to="/jurnal-haqida" className="text-lg text-[#fafeff]">
                      Jurnal haqida
                    </Link>
                  </li>
                  <li>
                    <Link to="/tahririyat-jamoasi" className="text-lg text-[#fafeff]">
                      Tahririyat jamoasi
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link className="text-lg text-[#fafeff]" to="/nashrlar">
                Nashrlar
              </Link>
            </li>
            <li>
              <Link className="text-lg text-[#fafeff]">Talabnoma</Link>
            </li>
            <li>
              <Link className="text-lg text-[#fafeff]">Yangiliklar</Link>
            </li>
            <li>
              <Link className="text-lg text-[#fafeff]">Bog'lanish</Link>
            </li>
          </ul>
          <form action="">
            <select className="menu outline-none rounded bg-[#28c66f] text-white text-lg">
              <option className="bg-none text-lg" value="uzbek">
                O‘zbekcha
              </option>
              <option className="bg-none text-lg" value="rus">
                Русский
              </option>
              <option className="bg-none text-lg" value="english">
                English
              </option>
            </select>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default Header;
