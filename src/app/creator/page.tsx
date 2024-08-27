"use client";

import { useAtom, useAtomValue } from "jotai";

import {
  incAtomX,
  incAtomY,
  dateAtom,
  formatJpAtom,
  formatEnAtom,
} from "./atom";

/** Component */
export default function Page() {
  const [valueIncX, setIncX] = useAtom(incAtomX);
  const [valueIncY, setIncY] = useAtom(incAtomY);

  const [date, setDate] = useAtom(dateAtom);
  const dateJp = useAtomValue(formatJpAtom);
  const dateEn = useAtomValue(formatEnAtom);

  return (
    <>
      <div className="container">
        <div className="formControll">
          <div>
            <label htmlFor="x">X</label>
            <input
              type="number"
              id="x"
              onChange={(e) => setIncX(Number(e.target.value))}
            />
          </div>
          <p>※半角数字で入力</p>
        </div>
        <div className="formControll">
          <div>
            <label htmlFor="y">Y</label>
            <input
              type="number"
              id="y"
              onChange={(e) => setIncY(Number(e.target.value))}
            />
          </div>
          <p>※半角数字で入力</p>
        </div>
        <div className="content">
          <span>Result</span>
          <div className="contentInner result">
            <p>X: {valueIncX}</p>
            <p>Y: {valueIncY}</p>
          </div>
        </div>
      </div>
      <div className="container">
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
        <div className="content">
          <span>Result</span>
          <div className="contentInner result">
            <p>Date: {date}</p>
            <p>Date JP: {dateJp}</p>
            <p>Date EN: {dateEn}</p>
          </div>
        </div>
      </div>
    </>
  );
}
