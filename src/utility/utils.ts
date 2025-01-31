export const fetchWeatherDataFromLocation = async (location: string): Promise<WeatherInfo | null> => {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=58BNYSLW5JBTD7K5WWJ46YRBL`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    console.log(JSON.stringify(getWeatherData(data)));

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

type WeatherInfo = {
  city: string,
  currentConditions: CurrentConditions,
  days: Day[];
  description: string;
  timezone: string;
};

export const getWeatherData = ({ 
  city,
  currentConditions,
  days,
  description,
  timezone,
}: WeatherInfo) => {
  const weatherInfo = {
    city,
    currentConditions,
    days,
    description,
    timezone,
  };

  return weatherInfo;
};

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
    input.value = "";
  } else {
    console.log("input not found");
  }
};

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