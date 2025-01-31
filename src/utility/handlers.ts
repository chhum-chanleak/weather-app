import * as utils from "./utils";
import { WeatherInfoCard } from "../components/weather-info-card";

export const handleSubmit = (): void => {
  const input = document.querySelector("input[name='location']") as HTMLInputElement;

  if (utils.checkExistence(input)) {
    utils.addCardToWeatherInfoCards(new WeatherInfoCard().create(input.value));
    utils.showInputValue();
    utils.stopFormRefreshing();
    utils.fillWeatherInfoCardWithInformation();

    // Clear input field
    input.value = "";
  } else {
    console.warn("input not found");
  }
};