import { appendChildrenToParent } from "../utility/utils";
import { searchHistoryStorage } from "../data/data";

export class FormWeather {
  create(): HTMLElement {
    const formWeather = document.createElement("form");
    formWeather.setAttribute("class", "form-weather");

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.name = "location"

    const input = document.createElement("input");
    input.type = "text";
    input.name = "location";

    const rejectMessage = document.createElement("span");
    rejectMessage.classList.add("reject-message");

    // Append elements to FormWeather component
    appendChildrenToParent(
      formWeather,
      rejectMessage,
      input,
      submitButton,
    );

    return formWeather;
  }
}