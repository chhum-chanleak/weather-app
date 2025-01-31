import * as utils from "../utility/utils";

export class WeatherInfoCards {
  create(): HTMLElement {
    const weatherInfoCards = document.createElement("div");
    weatherInfoCards.setAttribute("class", "weather-info-cards");

    utils.appendChildrenToParent(
      weatherInfoCards,
    );

    return weatherInfoCards
  }
}