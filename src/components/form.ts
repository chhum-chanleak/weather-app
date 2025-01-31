import { appendChildrenToParent } from "../utility/utils";

export class FormWeather {
  create(): HTMLElement {
    const form = document.createElement("form");
    form.setAttribute("class", "form-weather");

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.name = "location"

    const input = document.createElement("input");
    input.type = "text";
    input.name = "location";

    // Append elements to form
    appendChildrenToParent(
      form,
      submitButton,
      input
    );

    return form;
  }
}