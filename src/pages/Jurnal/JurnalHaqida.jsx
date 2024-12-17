import React from "react";
import { useTranslation } from "react-i18next";

function JurnalHaqida() {
  const {t} = useTranslation()
  return (
    <div className="align-elements mt-5 md:mt-10">
      <h1 className="xl:text-4xl md:text-3xl text-xl mb-5 font-semibold text-[#28c66f]">{t('journal_page.journalAboutTitle')}</h1>
      <p className="text-[green] text-sm md:text-lg text-justify">
      {t('journal_page.journalAboutDesc')}
      </p>
    </div>
  );
}

export default JurnalHaqida;
