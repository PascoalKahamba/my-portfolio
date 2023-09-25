import { useAtom } from "jotai";
import { countYearAtom } from "../atoms";
import Alldata from "../../contents/alldata";
import { useEffect } from "react";

type Year = "2018" | "2019" | "2020" | "2021" | "2022" | "2023";

export default function useDate(monthNumber: number, year: number) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [count] = useAtom(countYearAtom);
  const { allYears } = Alldata();
  const lastyear = allYears[count];
  const theTime = currentMonth + monthNumber;

  useEffect(() => {
    // Aqui começa o trabalho da implementação da lógica de obter a data
  }, [currentMonth, currentYear]);

  function getYear(year: Year) {
    let currentYear = "";
    switch (year) {
      case "2018":
        currentYear = "mes";
        break;
    }
  }

  return theTime;
}
