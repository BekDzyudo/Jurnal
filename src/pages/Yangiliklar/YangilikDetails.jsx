import React from "react";
import news3 from "../../assets/news3.jpg";

function YangilikDetails() {
  return (
    <div className="align-elements">
      <div className="w-full flex gap-10 rounded-lg p-3 pr-5 bg-[#dcefe4]">
        <div className="w-[30%]">
          <img src={news3} className="h-auto w-full rounded-lg object-cover" />
        </div>
        <div className="flex flex-col gap-4 w-[70%]">
          <h2 className="font-semibold text-3xl">
            “Ўзбекистонда олий таълим” jurnali yana maqolalar tanlovini eʼlon
            qiladi!
          </h2>
          <span className="text-[green] font-semibold text-lg">13-dekabr 2024-yil</span>
          <p className="text-lg text-justify">
            Oʻzbekiston Respublikasida oliy taʼlimni tizimli isloh qilishning
            ustuvor yoʻnalishlari, xususan, oliy taʼlim mazmunini sifat jihatdan
            yangi bosqichga koʻtarish, oʻquv jarayonlarida qoʻllaniladigan
            ilgʻor texnologiyalar, kredit-modul tizimi istiqbollari, ilmiy
            tadqiqotlarni kuchaytirish, “Universitet 3.0” konsepsiyasini
            bosqichma-bosqich joriy etish, xalqaro reytinglarga kirish, xalqaro
            hamkorlik va boshqa muhim yoʻnalishlarga bagʻishlangan boʻlishi
            lozim; – maqolalar professor-oʻqituvchilar uchun foydali, yangi
            gʻoyalarni oʻzida aks ettirgan, kelgusida metodologik manba sifatida
            foydalaniladigan darajada boʻlishi kerak; – ilmiy tahlil va
            tugallangan fikrlarga asoslangan, tahliliy-tanqidiy, tanlangan mavzu
            boʻyicha mavjud muammolar yechimiga oid aniq amaliy taklif va
            tavsiyalar bilan taqdim yetilishi lozim; – oʻzbek, rus va ingliz
            tillaridan birida boʻlishi mumkin; – maqolalarga qoʻyilgan talablar
            asosida shakllantirilishi va unda muallif haqida maʼlumotlar aniq
            koʻrsatilishi shart (hajmi 14 shriftda, 1,15 interval bilan, 10-12
            betgacha boʻlishi maqsadga muvofiq). Maqolalar telegram
            messenjeridagi @EduJournalBot boti orqali 2023-yilning 20-noyabriga
            qadar qabul qilinadi. Tanlovga topshiriladigan maqolalardagi
            maʼlumotlarning toʻgʻriligiga mualliflar javobgardir. Maqolalar
            maxsus mutaxassislardan iborat hayʼat tomonidan koʻrib chiqiladi
            hamda baholanadi. Eng yaxshi deb topilgan maqola mualliflariga
            tashkilotchilar tomonidan pul mukofoti va gʻoliblik sertifikati
            taqdim etiladi. Eng yaxshi maqola muallifning ish va yashash joyi,
            lavozimi hamda maqomidan qatʼi nazar, sifat koʻrsatkichlari asosida
            xolis tanlanadi. Tanlov mukofot jamgʻarmasi 10 million soʻm: 1-oʻrin
            5 000 000 (besh million) soʻm 2-oʻrin 3 000 000 (uch million) soʻm
            3-oʻrin 2 000 000 (ikki million) soʻm Tanlov jarayoni va natijalari
            haqidagi maʼlumotlar Markazning ijtimoiy tarmoqlardagi rasmiy
            sahifalari (www.edujournal.uz, https://devedu.uz)da eʼlon qilib
            boriladi. Gʻolib boʻlgan mualliflarning maqolalari esa “Ўзбекистонда
            олий таълим” jurnalining kelgusi sonlarida chop etiladi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default YangilikDetails;
