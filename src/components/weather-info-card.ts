import * as utils from "../utility/utils";
import "../styles/weather-info-card.css";

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
    cityName.classList.add("city-name");

    const image = document.createElement("img");

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const temperature = document.createElement("div");
    temperature.classList.add("temperature");

    const temp = document.createElement("span");
    temp.classList.add("temp");

    const tempUnit = document.createElement("span");
    tempUnit.classList.add("temp-unit");

    const condition = document.createElement("div");
    condition.classList.add("condition");

    const conditionHeader = document.createElement("h6");
    conditionHeader.classList.add("condition-header");

    const conditionDescription = document.createElement("small");
    conditionDescription.classList.add("condition-description");

    utils.appendChildrenToParent(
      temperature,
      temp,
      tempUnit,
    );

    utils.appendChildrenToParent(
      condition,
      conditionHeader,
      conditionDescription,
    );

    utils.appendChildrenToParent(
      descriptionContainer,
      temperature,
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
    day1.classList.add("day1");
    
    const day1Image = document.createElement("img");
    day1Image.classList.add("day1-image");

    const dayAfterNextDay = document.createElement("div");
    dayAfterNextDay.classList.add("day-after-next-day");

    const day2 = document.createElement("span");
    day2.classList.add("day2");

    const day2Image = document.createElement("img");
    day2Image.classList.add("day2-image");

    utils.appendChildrenToParent(
      nextDay,
      day1,
      day1Image,
    );

    utils.appendChildrenToParent(
      dayAfterNextDay,
      day2,
      day2Image,
    );

    utils.appendChildrenToParent(
      cardFooter,
      nextDay,
      dayAfterNextDay,
    );

    return cardFooter;
  }
}