import * as utils from "../utility/utils";

export class WeatherInfoCard {
  create(cardName: string): HTMLElement {
    const weatherInfoCard = document.createElement("div");
    weatherInfoCard.setAttribute("class", `weather-info-card ${cardName}`);

    utils.appendChildrenToParent(
      weatherInfoCard,
      new CardHeader().create(),
      new CardMainContent().create(),
      new InformationList().create(),
    );

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

class CardHeader {
  create(): HTMLElement {
    const cardHeader = document.createElement("h2");
    cardHeader.textContent = "TODAY";

    return cardHeader;
  }
}