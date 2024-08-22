import { atom } from "jotai";

export const firstNameAtom = atom<string>("");
export const lastNameAtom = atom<string>("");
export const birthdayAtom = atom<Date | null>(null);
export const currentAgeAtom = atom<number | null>(null);
