import { useEffect, useState } from "react";

export default function useDate(monthNumber: number, year: number) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [amountMonth, setAmountMonth] = useState(monthNumber);
  const amountYear = Math.abs(currentYear - year);

  useEffect(() => {
    setAmountMonth((amountMonth) => amountMonth + 1);
  }, [currentMonth]);

  return [amountMonth, amountYear];
}
