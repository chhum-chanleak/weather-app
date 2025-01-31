// Fetch weather data of a location
export const fetchWeatherDataFromLocation = async (location: string): Promise<WeatherInfo | null> => {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=58BNYSLW5JBTD7K5WWJ46YRBL`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return getWeatherData(data);
  } catch(error) {
    console.log("Failed to fetch weather data:", error);

    return null;
  }
};

type CurrentConditions = {
  datetime: string;
  temp: number;
  feelslike: number;
  humidity: number;
  pressure: number;
  snow: number;
  snowdepth: number;
  sunrise: string;
  sunset: string;
  visibility: number;
  windspeed: number;
  source: string;
};

type Day = {
  cloudcover: number;
  conditions: string;
  datetime: string;
  description: string;
  feelslike: number;
  humidity: number;
  pressure: number;
  snow: number;
  snowdepth: number;
  sunrise: string;
  sunset: string;
  temp: number;
  visibility: number;
  windspeed: number;
  source: string;
};

export type WeatherInfo = {
  address: string,
  currentConditions: CurrentConditions,
  days: Day[];
  description: string;
  timezone: string;
};

export const getWeatherData = ({ 
  address,
  currentConditions,
  days,
  description,
  timezone,
}: WeatherInfo) => {
  const weatherInfo = {
    address,
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

// Show input value
export const showInputValue = (): void => {
  const input = document.querySelector("input[name='location']") as HTMLInputElement;

  if (checkExistence(input)) {
    console.log(input.value);
  } else {
    console.log("input not found");
  }
};

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