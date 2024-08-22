import { useAtomValue } from "jotai";

import { firstNameAtom, lastNameAtom, birthdayAtom } from "../atom";

export function Original() {
  const firstName = useAtomValue(firstNameAtom);
  const lastName = useAtomValue(lastNameAtom);
  const birthday = useAtomValue(birthdayAtom);

  return (
    <div className="content original">
      <span>Original</span>
      <div className="contentInner">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Birthday: {birthday && birthday.toString()}</p>
      </div>
    </div>
  );
}
