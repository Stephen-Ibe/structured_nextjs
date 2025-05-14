import { createContext } from "react";

type ExampleContextValue = {
  valA: string;
  valB: string;
};

const ExampleContext = createContext<ExampleContextValue | undefined>(
  undefined
);

export default ExampleContext;
