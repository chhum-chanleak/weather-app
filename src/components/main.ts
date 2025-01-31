import { appendChildrenToParent } from "../utility/utils";

export class Main {
  constructor(
    private children: HTMLElement[]
  ) {}

  create(): HTMLElement {
    const main = document.createElement("main");

    // Append elements to main
    appendChildrenToParent(
      main,
      ...this.children,
    );

    return main;
  }
}