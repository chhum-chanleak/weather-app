import * as utils from "../utility/utils";

export class WeatherInfoCard {
  create(): HTMLElement {
    const weatherInfoCard = document.createElement("div");
    weatherInfoCard.setAttribute("class", "weather-info-card");

    utils.appendChildrenToParent(
      weatherInfoCard,
    );

    return weatherInfoCard;
  }
}