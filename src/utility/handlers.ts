import * as utils from "./utils";
import { WeatherInfoCard } from "../components/weather-info-card";

export const handleSubmit = (): void => {
  const input = document.querySelector("input[name='location']") as HTMLInputElement;
  const filteredValue = utils.filterInputValue(input.value);

  if (utils.checkExistence(input)) {
    utils.addCardToWeatherInfoCards(new WeatherInfoCard().create(filteredValue));
    utils.stopFormRefreshing();
    utils.fillWeatherInfoCardWithInformation();

    // Clear input field
    input.value = "";
  } else {
    console.warn("input not found");
  }
};