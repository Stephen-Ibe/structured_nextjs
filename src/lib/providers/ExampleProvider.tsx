"use client";

import { ReactNode, useState } from "react";
import { ExampleContext } from "../contexts";

const ExampleProvider = ({ children }: { children: ReactNode }) => {
  const [values, _] = useState({
    valA: "A",
    valB: "B",
  });
  return <ExampleContext value={values}>{children}</ExampleContext>;
};

export default ExampleProvider;
