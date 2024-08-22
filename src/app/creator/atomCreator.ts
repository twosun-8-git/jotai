import { atom } from "jotai";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import "dayjs/locale/en";

/** Atom Creator */
export const createDateAtom = (initialValue: Date | null) => {
  // この関数内でベースになるatom
  const baseAtom = atom(initialValue);

  // Write Read Atom
  const dateAtom = atom(
    (get) => {
      return get(baseAtom) ? dayjs(get(baseAtom)).format("YYYY-MM-DD") : "";
    },
    (_, set, update: Date | string) => {
      const _date = dayjs(update).toDate();
      set(baseAtom, !isNaN(_date.getTime()) ? _date : null);
    }
  );

  // Read only Atom
  const formatJpAtom = atom((get) => {
    return get(baseAtom)
      ? dayjs(get(baseAtom)).locale("ja").format("YYYY年M月D日")
      : "";
  });

  // Read only Atom
  const formatEnAtom = atom((get) => {
    return get(baseAtom)
      ? dayjs(get(baseAtom)).locale("en").format("MMMM D, YYYY")
      : "";
  });

  return [dateAtom, formatJpAtom, formatEnAtom] as const;
};
