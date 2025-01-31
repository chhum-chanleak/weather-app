export const fetchWeatherDataFromLocation = async (location: string): Promise<void> => {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=58BNYSLW5JBTD7K5WWJ46YRBL`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
  
    console.log("Weather Data:", data);
  } catch(error) {
    console.log("Failed to fetch weather data:", error);
  }
};