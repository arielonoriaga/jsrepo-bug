import { ExampleType } from "../domain/example";
import { justPrintHere } from "./other";

export const print = ({ msg }: ExampleType) => {
  justPrintHere(msg);
}

export const displayPrompt = (title: string) => {
  const result = prompt(title);
  if (!result) {
    return null;
  }

  return result;
}
