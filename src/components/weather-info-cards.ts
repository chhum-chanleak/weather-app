import * as utils from "../utility/utils";
import { WeatherInfoCard } from "./weather-info-card";

export class WeatherInfoCards {
  create(): HTMLElement {
    const weatherInfoCards = document.createElement("div");
    weatherInfoCards.setAttribute("class", "weather-info-cards");

    utils.appendChildrenToParent(
      weatherInfoCards,
      new WeatherInfoCard().create(),
    );

    return weatherInfoCards
  }
}