import { appendChildrenToParent } from "../utility/utils";
import { FormWeather } from "./form";
import { WeatherInfoCards } from "./weather-info-cards";

class Main {
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

export const main = new Main([
  new FormWeather().create(),
  new WeatherInfoCards().create(),
]).create();