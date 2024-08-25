import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { useResetAtom, RESET } from "jotai/utils"; // リセット用。RESETはシンボル

import {
  firstNameAtom,
  lastNameAtom,
  birthdayAtom,
  birthdayFormatAtom,
  currentAgeAtom,
  setCurrentAgeAtom,
} from "../atom";

type Props = {
  onSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Form({ onSubmit }: Props) {
  const [firstName, setFirstName] = useAtom(firstNameAtom);

  const [lastName, setLastName] = useAtom(lastNameAtom);

  const birthday = useAtomValue(birthdayAtom);
  const [valueBirthday, onChangeBirthday] = useAtom(birthdayFormatAtom);

  const setCurrentAge = useSetAtom(setCurrentAgeAtom);

  /** フォーム送信 */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(true);
    setCurrentAge();
  };

  /** フォームリセット */
  const resetAll = useResetAtom(
    atom(null, (_, set) => {
      set(firstNameAtom, RESET);
      set(lastNameAtom, RESET);
      set(birthdayAtom, RESET);
      set(currentAgeAtom, RESET);
    })
  );

  const handleReset = () => {
    resetAll();
    onSubmit(false);
    setCurrentAge();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formControll">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <p>※ 英字（小文字）のみ入力</p>
      </div>
      <div className="formControll">
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <p>※ 英字（小文字）のみ入力</p>
      </div>
      <div className="formControll">
        <div>
          <label htmlFor="birthday">Biirthday</label>
          <input
            type="date"
            id="birthday"
            value={valueBirthday}
            onChange={(e) => onChangeBirthday(e.target.value)}
          />
        </div>
        <p>※日付を入力</p>
      </div>
      <div className="buttonGroup">
        <button type="submit" disabled={!firstName || !lastName || !birthday}>
          送信
        </button>
        <button type="button" onClick={handleReset}>
          リセット
        </button>
      </div>
    </form>
  );
}
