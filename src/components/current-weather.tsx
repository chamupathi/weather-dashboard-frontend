import { useWeather } from '@/contexts/weather-context';
import { WeatherIcon } from './common/weather-icon';


export default function CurrentWeather() {
  const { weather } = useWeather();
  const { data: weatherData } = weather;

  if (!weatherData) {
    return null;
  }

  return (
    <div className="p-6 bg-blue-50 rounded-lg shadow-md max-w-md mx-auto ">
      <h2 className="text-xl font-semibold mb-4 text-black">Current Weather in {weatherData?.name}, {weatherData?.country}</h2>
      <div className="flex items-center gap-4">
        <WeatherIcon 
          icon={weatherData?.icon} 
          description={weatherData?.description}
          size="large"
        />
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-black">{weatherData.temp}°C</p>
            <p className="text-gray-700">Feels like {weatherData.feels_like}°C</p>
          </div>
          <p className="text-gray-600 capitalize">{weatherData.description}</p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Wind: {weatherData.wind_speed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
} 