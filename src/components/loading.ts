import * as utils from "../utility/utils";
import "../styles/loading.css";

export class Loading {
  create(): HTMLElement {
    const loading = document.createElement("div");
    loading.setAttribute("class", "loading")

    const loadingText = document.createElement("span");
    loadingText.classList.add("loading-text");
    loadingText.textContent = "Loading";

    const circlesContainer = document.createElement("div");
    circlesContainer.classList.add("circles-container");

    // Create 3 circles inside loading component
    for (let i = 0; i < 5; i += 1) {
      const circle = document.createElement("div");
      circle.classList.add("circle");

      circlesContainer.appendChild(circle);
    }

    utils.appendChildrenToParent(
      loading,
      loadingText,
      circlesContainer,
    );

    return loading;
  }
}