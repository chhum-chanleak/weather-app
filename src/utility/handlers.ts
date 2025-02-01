import * as utils from "./utils";
import { WeatherInfoCard } from "../components/weather-info-card";
import { searchHistoryStorage } from "../data/data";

export const handleSubmit = (): void => {
  const input = document.querySelector("input[name='location']") as HTMLInputElement;
  const filteredValue = utils.filterInputValue(input.value);

  // Reject input value when the input value already exists
  // Example: You cannot fetch 'Paris' when you have already fetched it once.
  try {
    utils.rejectAlreadyExistsInputValue(filteredValue);
  } catch(error) {
    console.log(error);
    return;
  }

  // Check whether input exists and input.value is not empty
  if (utils.checkExistence(input) && filteredValue !== "") {
      utils.addCardToWeatherInfoCards(new WeatherInfoCard().create(filteredValue));
      utils.stopFormRefreshing();
      utils.fillWeatherInfoCardWithInformation();
      utils.handleLoading();
      searchHistoryStorage.register(filteredValue, filteredValue);
      console.log(searchHistoryStorage.getSearchHistoryList());

    // Clear input field
    input.value = "";
  } else {
    console.warn("input not found");
  }
};