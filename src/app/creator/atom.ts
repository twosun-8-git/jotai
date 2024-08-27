import { createCounterAtom, createDateAtom } from "./atomCreator";

export const incAtomX = createCounterAtom(0);
export const incAtomY = createCounterAtom(0);

export const [dateAtom, formatJpAtom, formatEnAtom] = createDateAtom(null);
