import * as utils from "./utils";
import { WeatherInfoCard } from "../components/weather-info-card";

export const handleSubmit = (): void => {
  const input = document.querySelector("input[name='location']") as HTMLInputElement;

  if (utils.checkExistence(input)) {
    console.log(input.value);
    utils.addCardToWeatherInfoCards(new WeatherInfoCard().create(input.value));
  } else {
    console.warn("input not found");
  }

  utils.showInputValue();
  utils.stopFormRefreshing();
};