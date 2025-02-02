import * as utils from "../utility/utils";

export class WeatherInfoCard {
  create(cardName: string): HTMLElement {
    const weatherInfoCard = document.createElement("div");
    weatherInfoCard.setAttribute("class", `weather-info-card ${cardName}`);

    utils.appendChildrenToParent(
      weatherInfoCard,
      new CardHeader().create(),
      new CardMainContent().create(),
      new CardFooter().create(),
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
    cardHeader.classList.add("card-header");
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

    const cityName = document.createElement("h6");

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

class CardFooter {
  constructor(
    private theNextDay?: string,
    private theDayAfterNextDay?: string,
  ) {}

  create(): HTMLElement {
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    
    const nextDay = document.createElement("div");
    nextDay.classList.add("next-day");
    const day1 = document.createElement("span");
    const image1 = document.createElement("img");

    const dayAfterNextDay = document.createElement("div");
    dayAfterNextDay.classList.add("day-after-next-day");
    const day2 = document.createElement("span");
    const image2 = document.createElement("img");

    utils.appendChildrenToParent(
      nextDay,
      day1,
      image1,
    );

    utils.appendChildrenToParent(
      dayAfterNextDay,
      day2,
      image2,
    );

    utils.appendChildrenToParent(
      cardFooter,
      nextDay,
      dayAfterNextDay,
    );

    return cardFooter;
  }
}