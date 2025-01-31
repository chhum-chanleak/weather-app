import * as utils from "./utility/utils";
import { Main } from "./components/main";
import { Form } from "./components/form";

// fetchWeatherDataFromLocation("phnom_penh");

const app = () => {
  const container = document.querySelector(".container") as HTMLElement;

  utils.appendChildrenToParent(
    container,
    new Main([
      new Form().create(),
    ]).create(),
  );
};

app();