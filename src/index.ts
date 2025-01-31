import * as utils from "./utility/utils";
import { Main } from "./components/main";
import { FormWeather } from "./components/form";
import { handleSubmit } from "./utility/handlers";

// fetchWeatherDataFromLocation("phnom_penh");

// Apply event listeners
const applyEvents = (): void => {
  const submitButton = document.querySelector("button[name='location']") as HTMLButtonElement;
  submitButton.addEventListener("click", handleSubmit);
};

const app = () => {
  const container = document.querySelector(".container") as HTMLElement;

  utils.appendChildrenToParent(
    container,
    new Main([
      new FormWeather().create(),
    ]).create(),
  );

  // Apply event listeners
  applyEvents();
};

app();