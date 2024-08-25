"use client";

import { useAtom, useAtomValue } from "jotai";

import { dateAtom, formatJpAtom, formatEnAtom } from "./atom";

/** Component */
export default function Page() {
  const [date, setDate] = useAtom(dateAtom);
  const dateJp = useAtomValue(formatJpAtom);
  const dateEn = useAtomValue(formatEnAtom);

  return (
    <div className="container">
      <form>
        <div className="formControll">
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <p>※日付を入力</p>
        </div>
      </form>
      <div className="content">
        <span>Result</span>
        <div className="contentInner result">
          <p>Date: {date}</p>
          <p>Date JP: {dateJp}</p>
          <p>Date EN: {dateEn}</p>
        </div>
      </div>
    </div>
  );
}
