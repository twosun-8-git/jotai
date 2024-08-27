import { useState, useEffect } from "react";
import { useAtomValue } from "jotai";

import { paramsAtom, peopleAtom, Person } from "../atom";
import { MALE, FEMALE } from "../constants";

export function Result() {
  const [showResult, setShowResult] = useState(false);
  const params = useAtomValue(paramsAtom);
  const people = useAtomValue(peopleAtom);

  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);

  useEffect(() => {
    // 絞り込み
    const _gender = params.gender;

    const _filteredByGender =
      _gender && (_gender === MALE || _gender === FEMALE)
        ? people.filter((person) => person.gender === _gender)
        : people;

    setFilteredPeople(_filteredByGender);
    setShowResult(true);
  }, [params]);

  return (
    <>
      {!showResult ? (
        <div className="loader"></div>
      ) : (
        <div className="content">
          <span>Result</span>
          <div className="contentInner result">
            <ul>
              {filteredPeople.map((person, index) => (
                <li key={index}>
                  <b>{person.name}</b>
                  <span>
                    Age: <i>{person.age}</i>, Gender: <i>{person.gender}</i>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
