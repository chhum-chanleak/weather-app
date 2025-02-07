import * as utils from "./utility/utils";
import { handleSearch, handleSelect } from "./utility/handlers";
import { main } from "./components/main";
import "../src/styles/main.css";

// Apply event listeners
const applyEvents = (): void => {
  const submitButton = document.querySelector("button[name='location']") as HTMLButtonElement;
  submitButton.addEventListener("click", handleSearch);

  const select = document.querySelector(".select-temperature-unit") as HTMLSelectElement;
  select.addEventListener("change", handleSelect);

  // Fetch weather information of Frankfurt when DOM content loads
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input[name='location']") as HTMLInputElement
    input.value = "frankfurt";
    handleSearch();
  });
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