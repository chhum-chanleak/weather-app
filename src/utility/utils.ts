import { weatherImageSources } from "../data/images";
import * as WeatherInfoTypes from "../types/weather";

// Fetch weather data of a location
export const fetchWeatherDataFromLocation = async (location: string): Promise<WeatherInfoTypes.WeatherInfo | null> => {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${filterInputValue(location)}?key=58BNYSLW5JBTD7K5WWJ46YRBL`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return getFilteredWeatherData(data);
  } catch(error) {
    console.log("Failed to fetch weather data:", error);

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
  const filteredValue = filterInputValue(input.value);

  fetchWeatherDataFromLocation(filteredValue)
  .then((info) => {
    try {
      // When info exists, run this condition
      if (info) {
        fillCardMainContent(info);
        hideLoading(); // Stop displaying Loading component when the weather information is shown
      } else {
        throw new Error("Error fetching data");
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

// Hide Loading component
export const hideLoading = (): void => {
  const loading = document.querySelector(".loading") as HTMLElement;
  loading.style.display = "none";
};

// Show Loading component
export const showLoading = (): void => {
  const loading = document.querySelector(".loading") as HTMLElement;
  loading.style.display = "flex";
};

// Display Loading component when fetching data from the server and hide it when the data is fetched successfully
export const handleLoading = () => {
  const input = document.querySelector("input[name='location']") as HTMLInputElement;
  const filteredValue = filterInputValue(input.value);

  const cityName = document.querySelector(`.weather-info-card.${filteredValue} h6.city-name`) as HTMLElement;

  // Display Loading component when the data is being fetched
  if (cityName.textContent === "") {
    showLoading();
  }  
};

// Fill main content of the WeatherInfoCard component with information
export const fillCardMainContent = (info: WeatherInfoTypes.WeatherInfo): void => {
  const currentDate = document.querySelector(".current-date") as HTMLElement;
  currentDate.textContent = info.days[0].datetime;

  const cityName = document.querySelector(".city-name") as HTMLElement;
  cityName.textContent = info.resolvedAddress;

  const image = document.querySelector(".card-main-content img") as HTMLImageElement;
  image.style.width = "200px";
  image.style.height = "100px";
  image.src = `${weatherImageSources.thunder}`;

  const degree = document.querySelector(".degree") as HTMLElement;
  degree.textContent = `${info.currentConditions.temp} °C`;

  const conditionHeader = document.querySelector(".condition-header") as HTMLElement;
  conditionHeader.textContent = info.currentConditions.conditions;

  const conditionDescription = document.querySelector(".condition-description") as HTMLElement;
  conditionDescription.textContent = info.description;
};

// Fill footer of the WeatherInfoCard component with information
export const fillCardFooter = (info: WeatherInfoTypes.WeatherInfo): void => {
  const nextTwoDaysInfo: WeatherInfoTypes.Day[] = [info.days[1], info.days[2]];

  const day1 = document.querySelector(".day1") as HTMLElement;
  day1.textContent = nextTwoDaysInfo[0].datetime;

  const day1Image = document.querySelector(".day1-image") as HTMLImageElement;
  day1Image.alt = nextTwoDaysInfo[0].conditions;

  const day2 = document.querySelector(".day2") as HTMLElement;
  day2.textContent = nextTwoDaysInfo[1].datetime;

  const day2Image = document.querySelector(".day2-image") as HTMLImageElement;
  day2Image.alt = nextTwoDaysInfo[1].conditions;
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