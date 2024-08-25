"use client";

import { useState } from "react";
import { Form, Original, Result } from "./_components";

/** Component */
export default function Page() {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      <Form onSubmit={setShowResult} />
      <Result isShow={showResult} />
      <Original />
    </div>
  );
}
