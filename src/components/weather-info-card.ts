import * as utils from "../utility/utils";

export class WeatherInfoCard {
  create(): HTMLElement {
    const weatherInfoCard = document.createElement("div");
    weatherInfoCard.setAttribute("class", "weather-info-card");

    return weatherInfoCard;
  }
}

export class InformationList {
  create(): HTMLElement {
    const ul = document.createElement("ul");
    ul.setAttribute("class", "weather-info-list");

    const city = document.createElement("li");
    city.className = "city";

    const description = document.createElement("li");
    description.className = "description";

    const timezone = document.createElement("li");
    timezone.className = "timezone";

    utils.appendChildrenToParent(
      ul,
      city,
      description,
      timezone,
    );

    return ul;
  }
}