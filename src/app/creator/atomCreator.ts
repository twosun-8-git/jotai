import { atom } from "jotai";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import "dayjs/locale/en";

export const createCounterAtom = (initialValue: number) => {
  // 関数内でベースとなる Atom
  const baseAtom = atom(initialValue);

  // Read Write Atom
  const incAtom = atom(
    (get) => get(baseAtom),
    (_, set, newValue: number) => set(baseAtom, newValue + 1)
  );
  return incAtom;
};

export const createDateAtom = (initialValue: Date | null) => {
  const baseAtom = atom(initialValue);

  // Read Write Atom
  const dateAtom = atom(
    (get) => {
      return get(baseAtom) ? dayjs(get(baseAtom)).format("YYYY-MM-DD") : "";
    },
    (_, set, update: Date | string) => {
      const _date = dayjs(update).toDate();
      set(baseAtom, !isNaN(_date.getTime()) ? _date : null);
    }
  );

  // Read Only Atom
  const formatJpAtom = atom((get) => {
    return get(baseAtom)
      ? dayjs(get(baseAtom)).locale("ja").format("YYYY年M月D日")
      : "";
  });

  // Read Only Atom
  const formatEnAtom = atom((get) => {
    return get(baseAtom)
      ? dayjs(get(baseAtom)).locale("en").format("MMMM D, YYYY")
      : "";
  });

  return [dateAtom, formatJpAtom, formatEnAtom] as const;
};
