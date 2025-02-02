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
    );

    return weatherInfoCard;
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

    const currentDate = document.createElement("time");
    currentDate.classList.add("current-date");

    const cityName = document.createElement("h6");

    const image = document.createElement("img");

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");
    
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
      descriptionContainer,
      degree,
      condition,
    );

    utils.appendChildrenToParent(
      mainContent,
      currentDate,
      cityName,
      image,
      descriptionContainer,
    );

    return mainContent;
  }
}

class CardFooter {
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