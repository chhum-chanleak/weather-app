import * as utils from "./utility/utils";
import { handleSearch } from "./utility/handlers";
import { main } from "./components/main";
import "../src/styles/main.css";

// Apply event listeners
const applyEvents = (): void => {
  const submitButton = document.querySelector("button[name='location']") as HTMLButtonElement;
  submitButton.addEventListener("click", handleSearch);
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