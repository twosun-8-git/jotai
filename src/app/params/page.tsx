"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";

import { locationAtom, paramsAtom } from "./atom";
import { MALE, FEMALE } from "./constants";

import { Result, Params } from "./_components";

/** Component */
export default function Page() {
  const [location, setLocation] = useAtom(locationAtom);
  const [params, setParams] = useAtom(paramsAtom);

  /** paramsを取得 */
  useEffect(() => {
    if (!location.searchParams) return;
    setParams({
      gender: location.searchParams.get("gender") ?? null,
    });
  }, [location.searchParams]);

  const hanldeToggleParams = () => {
    setLocation((prev) => ({
      ...prev,
      pathname: "/params",
      searchParams: new URLSearchParams([
        ["gender", params.gender === MALE ? FEMALE : MALE],
      ]),
    }));
  };

  return (
    <div className="container">
      <div className="container__head">
        <button onClick={hanldeToggleParams}>Toggle</button>
      </div>
      <Result />
      <Params />
    </div>
  );
}
