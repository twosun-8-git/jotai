import { useAtom, useSetAtom } from "jotai";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import {
  firstNameAtom,
  lastNameAtom,
  birthdayAtom,
  currentAgeAtom,
} from "../atom";

type Props = {
  onSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Form({ onSubmit }: Props) {
  const [firstName, setFirstName] = useAtom(firstNameAtom);

  const [lastName, setLastName] = useAtom(lastNameAtom);

  const [birthday, setBirthday] = useAtom(birthdayAtom);

  const setCurrentAge = useSetAtom(currentAgeAtom);

  /** フォーム送信 */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(true);
    setCurrentAge(dayjs().diff(birthday, "year"));
  };

  /** フォームリセット */
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setBirthday(null);
    setCurrentAge(null);
    onSubmit(false);
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
            value={birthday ? dayjs(birthday).format("YYYY-MM-DD") : ""}
            onChange={(e) => setBirthday(dayjs(e.target.value).toDate())}
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
