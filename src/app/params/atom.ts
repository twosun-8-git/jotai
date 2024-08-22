import { atom } from "jotai";
import { atomWithLocation } from "jotai-location";
import mockData from "./mock.json";

export type Person = {
  name: string;
  age: number;
  gender: string;
};

export const locationAtom = atomWithLocation();
export const paramsAtom = atom<{ [key: string]: string | null }>({
  gender: null,
});
export const peopleAtom = atom<Person[]>(mockData);
