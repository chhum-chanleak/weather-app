import * as utils from "../utility/utils";
import "../styles/weather-info-cards.css";

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