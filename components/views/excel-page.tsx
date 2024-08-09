"use client";
import { SheetBuilder, FileBuilder } from "excel-build";

import { Button } from "../ui/button";

export const ExcelPage = ({ data }: { data: any }) => {
  console.log(data);

  const downloadFile = () => {
    const file = new FileBuilder("Заполненные анкеты");

    const sheet = new SheetBuilder("Страница 1")
      .appendThead([
        "ФИО",
        "Телефон",
        "Почта",
        "Адрес",
        "Дата рождения",
        "Зарегистрирован в компании",
        "Цель",
        "Дата заполнения",
      ])
      .appendTbody(
        data.map((item: any) => [
          item.name,
          item.phone,
          item.email,
          item.address,
          item.birthDate,
          item.isNotRegistered,
          item.purpose === "partner" ? "Партнер" : "Для себя",
          item.created_at.toLocaleString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        ])
      );

    for (let index = 0; index <= 8; index++) {
      sheet.setColumnWidth(index, 200);
    }

    file.addSheet(sheet).download();
  };

  return (
    <main className="flex items-center justify-center h-screen w-screen flex-col gap-5">
      <p>Всего заполнено анкет {data.length}</p>
      <Button onClick={downloadFile}>Скачать в Excel</Button>
    </main>
  );
};
