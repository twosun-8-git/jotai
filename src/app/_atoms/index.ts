import { atom } from "jotai";
import { atomWithReset, atomWithStorage } from "jotai/utils";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

/** Atoms */
export const firstNameAtom = atomWithReset<string>("");
export const lastNameAtom = atomWithReset<string>("");
export const birthdayAtom = atomWithReset<Date | null>(null);
export const currentAgeAtom = atomWithReset<number | null>(null);

/** Write Read Atoms */
export const birthdayFormatAtom = atom(
  (get) => {
    const _birthday = get(birthdayAtom);
    return _birthday ? dayjs(_birthday).format("YYYY-MM-DD") : "";
  },
  (_, set, update: string) => {
    const _date = dayjs(update).toDate();
    set(birthdayAtom, !isNaN(_date.getTime()) ? _date : null);
  }
);

/** Read Only Atoms */
export const fullNameAtom = atom((get) =>
  `${get(firstNameAtom)} ${get(lastNameAtom)}`.toUpperCase()
);

export const birthdayJpAtom = atom((get) => {
  const _birthday = get(birthdayAtom);
  return _birthday ? dayjs(_birthday).format("YYYY年M月D日") : "";
});

/** Write Only Atoms */
export const setCurrentAgeAtom = atom(null, (get, set) => {
  const _birthday = get(birthdayAtom);
  set(currentAgeAtom, _birthday ? dayjs().diff(_birthday, "year") : null);
});

/** Storage */
export const darkModeAtom = atomWithStorage("darkMode", false);
