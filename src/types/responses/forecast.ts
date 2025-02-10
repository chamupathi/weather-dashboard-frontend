export interface ForecastResponse {
  date: string;
  city: string;
  country: string;
  temperature: {
    min: number;
    max: number;
    average: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  wind: {
    speed: number;
    deg: number;
  };
  humidity: number;
}
