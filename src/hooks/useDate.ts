import { useEffect, useState } from "react";

export default function useDate(monthNumber: number, year: number) {
  const currentYear = new Date().getFullYear();
  const [amountMonth, setAmountMonth] = useState(monthNumber);
  const amountYear = Math.abs(currentYear - year);
  const monthOrYear = getMonthOrYear(amountMonth);

  useEffect(() => {
    setTimeout(() => {
      setAmountMonth((amountMonth) => amountMonth + 1);
    }, 2592000);
  }, []);

  function getMonthOrYear(amountMonth: number) {
    let monthOrYear = "";
    if (amountMonth >= 12) {
      monthOrYear = "ano";
      setAmountMonth(1);
      return monthOrYear;
    }
    if (amountMonth >= 24) {
      monthOrYear = "anos";
      setAmountMonth(2);
      return monthOrYear;
    }

    monthOrYear = "mês";
    return monthOrYear;
  }

  return [amountMonth, amountYear, monthOrYear];
}
