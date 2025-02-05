import { Loading } from "../components/loading";
import { weatherImageSources } from "../data/images";
import * as WeatherInfoTypes from "../types/weather";

// Fetch weather data of a location
export const fetchWeatherDataFromLocation = async (location: string): Promise<WeatherInfoTypes.WeatherInfo | null> => {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${filterInputValue(location)}?key=58BNYSLW5JBTD7K5WWJ46YRBL`);

    // Check for HTTP errors
    if (!response.ok) {
      removeWeatherInfoCard();
      hideElementByClassName("main", "loading"); // Hide Loading component when Bad Request takes place
      showBadRequestMessage(location);
      showElementByClassName("main", "bad-request-message");
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return getFilteredWeatherData(data);
  } catch(error) {
    console.log(error);

    return null;
  }
};

// Return only necessary data
export const getFilteredWeatherData = ({ 
  resolvedAddress,
  currentConditions,
  days,
  description,
  timezone,
}: WeatherInfoTypes.WeatherInfo) => {
  const weatherInfo = {
    resolvedAddress,
    currentConditions,
    days,
    description,
    timezone,
  };

  return weatherInfo;
};

// Append child elements to a parent element
type AppendChildrenToParent = (parent: HTMLElement, ...children: HTMLElement[]) => void;
export const appendChildrenToParent: AppendChildrenToParent = (parent, ...children) => {
  for (let i = 0; i < children.length; i += 1) {
    parent.appendChild(children[i]);
  }
}

// Check whether an element exists
export const checkExistence = (element: HTMLElement): boolean => {
  if (element) {
    return true;
  }

  return false;
};

export const stopFormRefreshing = (): void => {
  const form = document.querySelector(".form-weather") as HTMLFormElement;

  if (checkExistence(form)) {
    form.addEventListener("submit", (event: Event) => {
      event.preventDefault();
    });
  } else {
    console.log("form not found");
  }
};

// Append weatherInfoCard component to weatherInfoCards
export const addCardToWeatherInfoCards = (weatherInfoCard: HTMLElement): void => {
  const weatherInfoCards = document.querySelector(".weather-info-cards") as HTMLDivElement;

  if (checkExistence(weatherInfoCards)) {
    appendChildrenToParent(
      weatherInfoCards,
      weatherInfoCard,
    );
  } else {
    console.log("weatherInfoCards not found");
  }
};

export const fillWeatherInfoCardWithInformation = (): void => {
  const input = document.querySelector("input[name='location']") as HTMLInputElement;
  const filteredInputValue = filterInputValue(input.value);

  fetchWeatherDataFromLocation(filteredInputValue)
  .then((info) => {
    try {
      // When info exists, run this condition
      if (info) {
        fillCardMainContent(info);
        fillCardFooter(info);
        hideElementByClassName("main", "loading") // Stop displaying Loading component when the weather information is shown
        hideElementByClassName("main", "bad-request-message");
        setTemperatureUnitAccordingly(info.currentConditions.temp);
        setSelectDefaultOption(getTemperatureUnit(info.currentConditions.temp));
      } else {
        throw new Error("Failed fetching data");
      }
    } catch(error){
      console.log(error);
    }
  });
};

// Return a filtered string which contains only lowercase a to z
export const filterInputValue = (str: string): string => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const charactersArray: string[] = str.toLowerCase().split("");
  const filteredArray: string[] = [];

  for (let i = 0; i < charactersArray.length; i += 1) {
    if (!alphabets.includes(charactersArray[i])) {
      continue;
    }

    filteredArray.push(charactersArray[i]);
  }

  return filteredArray.join("");
};

// Show Loading component
export const showLoading = (): void => {
  const loading = document.querySelector(".loading") as HTMLElement;
  loading.style.display = "flex";
};

// Display Loading component when fetching data from the server and hide it when the data is fetched successfully
export const handleLoading = () => {
  const input = document.querySelector("input[name='location']") as HTMLInputElement;
  const filteredInputValue = filterInputValue(input.value);

  const cityName = document.querySelector(`.weather-info-card.${filteredInputValue} h6.city-name`) as HTMLElement;

  // Display Loading component when the data is being fetched
  if (cityName.textContent === "") {
    showLoading();
  }  
};

// Fill main content of the WeatherInfoCard component with information
export const fillCardMainContent = (info: WeatherInfoTypes.WeatherInfo): void => {
  const date = new Date();
  const currentDate = document.querySelector(".current-date") as HTMLElement;
  currentDate.textContent = date.toDateString();

  const cityName = document.querySelector(".city-name") as HTMLElement;
  cityName.textContent = info.resolvedAddress;

  const image = document.querySelector(".card-main-content img") as HTMLImageElement;
  image.src = `${getWeatherImageSource(info.currentConditions.conditions)}`;

  const conditionHeader = document.querySelector(".condition-header") as HTMLElement;
  conditionHeader.textContent = `${convertToSingleCondition(info.currentConditions.conditions)}`;

  const conditionDescription = document.querySelector(".condition-description") as HTMLElement;
  conditionDescription.textContent = info.description;
};

// Fill footer of the WeatherInfoCard component with information
export const fillCardFooter = (info: WeatherInfoTypes.WeatherInfo): void => {

  const date1 = new Date();
  date1.setDate(date1.getDate() + 1); // Move to the next day

  const nextDay = date1.toDateString();

  const date2 = new Date();
  date2.setDate(date2.getDate() + 2); // Move to the day after next day

  const dayAfterNextDay = date2.toDateString();
  const nextTwoDaysInfo: WeatherInfoTypes.Day[] = [info.days[1], info.days[2]];

  const day1 = document.querySelector(".day1") as HTMLElement;
  day1.textContent = `${nextDay}`;

  const day1Image = document.querySelector(".day1-image") as HTMLImageElement;
  day1Image.alt = nextTwoDaysInfo[0].conditions;
  day1Image.src = `${getWeatherImageSource(nextTwoDaysInfo[0].conditions)}`;

  const day2 = document.querySelector(".day2") as HTMLElement;
  day2.textContent = `${dayAfterNextDay}`;

  const day2Image = document.querySelector(".day2-image") as HTMLImageElement;
  day2Image.alt = nextTwoDaysInfo[1].conditions;
  day2Image.src = `${getWeatherImageSource(nextTwoDaysInfo[1].conditions)}`;
};

// Remove WeatherInfoCard component if it exists
export const removeWeatherInfoCard = (): void => {
  const weatherInfoCard = document.querySelector(".weather-info-card") as HTMLElement;

  if (weatherInfoCard) {
    weatherInfoCard.remove();
  } else {
    console.log("Add new WeatherInfoCard");
  }
};

// Return a weather image source from weather conditions
export const getWeatherImageSource = (conditions: string): number | void => {
  switch (convertToSingleCondition(conditions).toLowerCase()) {
    case "clear": return weatherImageSources.clear;
    case "partially cloudy": return weatherImageSources.partlyCloudy;
    case "snow": return weatherImageSources.snow;
    case "overcast": return weatherImageSources.overcast;
    case "rain": return weatherImageSources.rain;
    default: 
      try {
        throw new Error(`Unknown weather condition '${convertToSingleCondition(conditions)}'`);
      } catch(error) {
        console.error(error);
      }
  }
};

// Convert a multiple-condition and return a single-condition
// Example: 'Snow, Partly cloudy' will be converted to just 'Snow'
const convertToSingleCondition = (condition: string): string => {
  const firstCondition: string[] = [];

  for (let i = 0; i < condition.length; i += 1) {
    if (condition[i] !== ",") {
      firstCondition.push(condition[i]);
    } else {
      break; // Break out of loop prematurely
    }
  }

  return firstCondition.join("");
};

// Set the temperature unit to °F when it is greater 60 degree.
const setTemperatureUnitAccordingly = (temp: number): void => {
  const tempSpan = document.querySelector(".temp") as HTMLElement;
  const tempUnit = document.querySelector(".temp-unit") as HTMLElement;

  // Assume the temperature is in Fahrenheit (°F) when it is greater than 60 degree
  if (temp >= 60) {
    tempSpan.textContent = `${temp}`;
    tempUnit.textContent = "°F";
  } else { // If it is less than 60 degree, then assume it as celsius
    tempSpan.textContent = `${temp}`;
    tempUnit.textContent = "°C";
  }
};

// Convert celsius and return fahrenheit
// Example: 20°C to 68°F
const convertToFahrenheit = (celsius: number): number  => {
  return Number(((celsius * (9 / 5)) + 32).toFixed(1));
};

// Convert fahrenheit and return celsius
// Example: 68°F to 20°C
const convertToCelsius = (fahrenheit: number): number  => {
  return Number(((fahrenheit - 32) * (5 / 9)).toFixed(1));
};

// Return temperature unit of location
const getTemperatureUnit = (temp: number): string => {
  if (temp >= 60) {
    return "fahrenheit";
  }

  return "celsius";
};

// Set the default option of select element according to temperature unit
const setSelectDefaultOption = (TemperatureUnit: string): void => {
  const celsiusOption = document.querySelector(".celsius-option") as HTMLOptionElement;
  const fahrenheitOption = document.querySelector(".fahrenheit-option") as HTMLOptionElement;

  if (TemperatureUnit === "celsius") {
    celsiusOption.selected = true;
  } else {
    fahrenheitOption.selected = true;
  }
};

// Convert the element's text content to number
const convertToNumber = (element: HTMLElement): number => {
  return Number(element.textContent); // Convert element's text content to number;
};

// Enable select to switch between celsius and fahrenheit
export const switchTemperatureUnit = (): void => {
  const select = document.querySelector(".select-temperature-unit") as HTMLSelectElement;
  const tempSpan = document.querySelector(".temp") as HTMLElement;
  const tempUnit = document.querySelector(".temp-unit") as HTMLElement;

  // If tempSpan exists
  if (tempSpan) {
    const temperatureValue = convertToNumber(tempSpan);

    // When current temperature is celsius
    if (getTemperatureUnit(temperatureValue) === "celsius") {
      // When switch select option from celsius to fahrenheit (onchange event)
     if (select.value === "fahrenheit") {
       tempSpan.textContent = `${convertToFahrenheit(temperatureValue)}`;
       tempUnit.textContent = "°F";
     } 
    }
  
    // When current temperature unit is fahrenheit
    if (getTemperatureUnit(temperatureValue) === "fahrenheit") {
      // When switch select option from fahrenheit to celsius (onchange event)
      tempSpan.textContent = `${convertToCelsius(temperatureValue)}`;
      tempUnit.textContent = "°C";
    }
  }
}

// Show a Bad Request message
const showBadRequestMessage = (location: string): void => {
  const message = document.querySelector(".bad-request-message .message") as HTMLElement;

  // If element exists, then hide the element
  if (message) {
    message.textContent = `'${location}' not found. Please try to enter a correct location.`;
  } else {
    console.error(".message not found");
  }  
};

// Hide element by their parent class and its class name
export const hideElementByClassName = (parentClass: string, elementClass: string): void => {
  const element = document.querySelector(`.${parentClass} .${elementClass}`) as HTMLElement;

  // If element exists, then hide the element
  if (element) {
    element.style.display = "none";
  }
};

// Show element by their parent class and its class name
export const showElementByClassName = (parentClass: string, elementClass: string): void => {
  const element = document.querySelector(`.${parentClass} .${elementClass}`) as HTMLElement;

  // If element exists, then show the element
  if (element) {
    element.style.display = "block";
  }
};

// Set display: flex to element by their parent class and its class name
export const flexElementByClassName = (parentClass: string, elementClass: string): void => {
  const element = document.querySelector(`.${parentClass} .${elementClass}`) as HTMLElement;

  // If element exists, then flex the element
  if (element) {
    element.style.display = "flex";
  }
};


