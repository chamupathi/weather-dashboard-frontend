import { ForecastItemDTO } from "@/types/dto/forecast";
import { ForecastResponse } from "@/types/responses/forecast";

export function transformForecastData(data: ForecastResponse[]): ForecastItemDTO[] {
  return data.map((item) => ({
    date: item.date,
    city: item.city,
    country: item.country,
    temperature: item.temperature,
    weather: item.weather,
    wind: item.wind,
    humidity: item.humidity
  }));
} 