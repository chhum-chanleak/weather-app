export class WeatherInfoCards {
  create(): HTMLElement {
    const weatherInfoCards = document.createElement("div");
    weatherInfoCards.setAttribute("class", "weather-info-cards");

    return weatherInfoCards
  }
}