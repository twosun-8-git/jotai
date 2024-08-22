"use client";

import { useState } from "react";
import { Form, Original, Result } from "./_components";

// TODO / Add Contents: Immer (https://zenn.dev/hsato_workman/books/4244c0104d943a/viewer/ff18ec)

/** Component */
export default function Page() {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      <p className="message">
        <b>Atom側</b> で Atom を編集する場合
      </p>
      <Form onSubmit={setShowResult} />
      <Result isShow={showResult} />
      <Original />
    </div>
  );
}
