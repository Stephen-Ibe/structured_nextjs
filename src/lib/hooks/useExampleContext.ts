import { use } from "react";
import { ExampleContext } from "../contexts";

export const useExampleContext = () => {
  const context = use(ExampleContext);

  if (!context) {
    throw new Error("useExampleContext must be used within a ExampleProvider");
  }

  return context;
};
