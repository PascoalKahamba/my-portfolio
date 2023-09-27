import { useEffect, useState } from "react";

type Year = "2018" | "2019" | "2020" | "2021" | "2022" | "2023";
const MORE_ONE_MONTH = 1;

export default function useDate(monthNumber: number, year: number) {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const [amountMonth, setAmountMonth] = useState(monthNumber);
  // const [isYear, setIsYear] = useState(false);
  // const amountMonth = currentMonth + amountMonth;
  const amountYear = Math.abs(currentYear - year);
  const monthOrYear = getMonthOrYear(amountMonth);
  // const theYear = isYear && "anos";

  useEffect(() => {
    setTimeout(() => {
      setAmountMonth((amountMonth) => amountMonth + 1);
    }, 2592000);
  }, []);

  function getMonthOrYear(amountMonth: number) {
    let monthOrYear = "";
    if (amountMonth >= 12) {
      monthOrYear = "anos";
      return monthOrYear;
    }

    monthOrYear = "mes";
    return monthOrYear;
  }

  return [amountMonth, amountYear, monthOrYear];
}
