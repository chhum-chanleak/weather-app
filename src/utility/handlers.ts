import * as utils from "./utils";
import { WeatherInfoCard } from "../components/weather-info-card";

export const handleSearch = (): void => {
  const input = document.querySelector("input[name='location']") as HTMLInputElement;
  const filteredValue = utils.filterInputValue(input.value);

  // Check whether input exists and input.value is not empty
  if (utils.checkExistence(input) && filteredValue !== "") {
    utils.removeWeatherInfoCard(); // Remove old WeatherInfoCard before adding a new one
    utils.addCardToWeatherInfoCards(new WeatherInfoCard().create(filteredValue));
    utils.stopFormRefreshing();
    utils.fillWeatherInfoCardWithInformation();
    utils.handleLoading();

    // Clear input field
    input.value = "";
  } else {
    console.warn("Input field is empty. Search a location in the input field.");
  }
};

export const handleSelect = () => {
  utils.switchTemperatureUnit();
};