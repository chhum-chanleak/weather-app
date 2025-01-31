import * as utils from "./utility/utils";
import { handleSubmit } from "./utility/handlers";
import { main } from "./components/main";

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
    main,
  );

  // Apply event listeners
  applyEvents();
};

app();