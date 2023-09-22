import { useAtom } from "jotai";
import { countYearAtom } from "../atoms";

export default function useTimeline<T>(yarOrTimeline: T[]) {
  const [countYear] = useAtom(countYearAtom);
  const currentYearOrTimeline = yarOrTimeline[countYear];

  return currentYearOrTimeline;
}
