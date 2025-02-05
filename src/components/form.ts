import { appendChildrenToParent } from "../utility/utils";
import "../styles/form.css";

export class FormWeather {
  create(): HTMLElement {
    const formWeather = document.createElement("form");
    formWeather.setAttribute("class", "form-weather");

    const submitButton = document.createElement("button");
    submitButton.textContent = "Search";
    submitButton.name = "location"

    const input = document.createElement("input");
    input.type = "text";
    input.name = "location";
    input.placeholder = "Ex: New York";

    const select = document.createElement("select");
    select.setAttribute("class", "select-temperature-unit");
    select.setAttribute("name", "select-temperature-unit");

    const fahrenheitOption = document.createElement("option");
    fahrenheitOption.classList.add("fahrenheit-option");
    fahrenheitOption.value = "fahrenheit";
    fahrenheitOption.textContent = "°F";

    const celsiusOption = document.createElement("option");
    celsiusOption.classList.add("celsius-option");
    celsiusOption.value = "celsius";
    celsiusOption.textContent = "°C";

    appendChildrenToParent(
      select,
      fahrenheitOption,
      celsiusOption,
    );

    // Append elements to FormWeather component
    appendChildrenToParent(
      formWeather,      
      input,
      submitButton,
      select,
    );

    return formWeather;
  }
}