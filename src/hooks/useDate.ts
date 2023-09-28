import { useEffect, useState } from "react";

export default function useDate(monthNumber: number, year: number) {
  const currentYear = new Date().getFullYear();
  const [amountMonth, setAmountMonth] = useState(monthNumber);
  const amountYear = Math.abs(currentYear - year);

  useEffect(() => {
    setTimeout(() => {
      setAmountMonth((amountMonth) => amountMonth + 1);
    }, 2592000);
  }, []);

  return [amountMonth, amountYear];
}
