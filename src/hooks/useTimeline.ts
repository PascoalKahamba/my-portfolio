import { useAtom } from "jotai";
import React from "react";
import { countYearAtom } from "../atoms";

type CurrentYear = string[] | "";

export default function useTimeline() {
  const [countYear] = useAtom(countYearAtom);
  return {};
}
