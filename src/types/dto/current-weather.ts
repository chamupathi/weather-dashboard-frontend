export interface CurrentWeatherDTO {
    name: string;
    country: string;
    temp: number;
    feels_like: number;
    humidity: number;
    description: string;
    icon: string;
    wind_speed: number;
  }