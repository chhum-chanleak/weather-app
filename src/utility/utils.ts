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