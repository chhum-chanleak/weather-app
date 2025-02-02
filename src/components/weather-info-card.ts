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

class CardMainContent {
  create(): HTMLElement {    
    const mainContent = document.createElement("div");
    mainContent.classList.add("card-main-content");

    const date = document.createElement("time");
    date.classList.add("date");

    const image = document.createElement("img");

    const description = document.createElement("div");
    const degree = document.createElement("span");
    const condition = document.createElement("div");
    const conditionHeader = document.createElement("h6");
    const conditionDescription = document.createElement("p");

    utils.appendChildrenToParent(
      condition,
      conditionHeader,
      conditionDescription,
    );

    utils.appendChildrenToParent(
      description,
      degree,
      condition,
    );

    utils.appendChildrenToParent(
      mainContent,
      date,
      image,
      description,
    );

    return mainContent;
  }
}