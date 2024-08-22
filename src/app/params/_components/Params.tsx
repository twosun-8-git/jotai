import { useAtomValue } from "jotai";

import { paramsAtom } from "../atom";
import { MALE, FEMALE } from "../contants";

export function Params() {
  const params = useAtomValue(paramsAtom);

  return (
    <div className="content original">
      <span>Params</span>
      <div className="contentInner">
        <p>
          Gender:&nbsp;
          {params.gender !== MALE && params.gender !== FEMALE ? (
            !params.gender ? (
              <span className="empty">No Params</span>
            ) : (
              <span className="error">
                Error: Prams is not &quot;male&quot; or &quot;female&quot;
              </span>
            )
          ) : (
            <span className="success">{params.gender}</span>
          )}
        </p>
      </div>
    </div>
  );
}
