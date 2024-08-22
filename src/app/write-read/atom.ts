import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

/** Atoms ( atom -> atomWithResetに変更 ) */
export const firstNameAtom = atomWithReset<string>("");
export const lastNameAtom = atomWithReset<string>("");
export const birthdayAtom = atomWithReset<Date | null>(null);
export const currentAgeAtom = atomWithReset<number | null>(null);
export const darkModeAtom = atomWithReset(false);

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
  const birthday = get(birthdayAtom);
  return birthday ? dayjs(birthday).format("YYYY年M月D日") : "";
});

/** Write Only Atoms */
export const setCurrentAgeAtom = atom(null, (get, set) => {
  const birthday = get(birthdayAtom);
  set(currentAgeAtom, birthday ? dayjs().diff(birthday, "year") : null);
});
