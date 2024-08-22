import { useAtomValue } from "jotai";
import { fullNameAtom, birthdayJpAtom, currentAgeAtom } from "../atom";

type Props = {
  isShow: boolean;
};

export function Result({ isShow }: Props) {
  const fullName = useAtomValue(fullNameAtom);
  const birthdayJp = useAtomValue(birthdayJpAtom);
  const currentAge = useAtomValue(currentAgeAtom);

  return (
    <>
      {isShow && (
        <div className="content">
          <span>Result</span>
          <div className="contentInner result">
            <p>
              <b>{fullName}</b>さんは
              {<b>{birthdayJp}</b>}生まれです。
            </p>
            <p>
              現在の年齢は<b>{currentAge}</b>歳です。
            </p>
          </div>
        </div>
      )}
    </>
  );
}
