import { appendChildrenToParent } from "../utility/utils";
import { BadRequestMessage } from "./bad-request-message";
import { FormWeather } from "./form";
import { Loading } from "./loading";
import { WeatherInfoCards } from "./weather-info-cards";

class Main {
  constructor(
    private children: HTMLElement[]
  ) {}

  create(): HTMLElement {
    const main = document.createElement("main");
    main.classList.add("main");

    // Append elements to main
    appendChildrenToParent(
      main,
      ...this.children,
    );

    return main;
  }
}

// Append components to main
export const main = new Main([
  new FormWeather().create(),
  new WeatherInfoCards().create(),
  new Loading().create(),
  new BadRequestMessage().create(),
]).create();