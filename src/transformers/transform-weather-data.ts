import { CurrentWeatherDTO } from "@/types/dto/current-weather";
import { WeatherResponse } from "@/types/responses/weather";


export function transformWeatherData(data: WeatherResponse): CurrentWeatherDTO {
  return {
    name: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    wind_speed: Math.round(data.wind.speed * 3.6)
  };
}
