import { WeatherIcon } from '@/components/common/weather-icon';
import { ForecastItemDTO } from '@/types/dto/forecast';

interface ForecastItemDTOProps {
  forecast: ForecastItemDTO;
}

export function ForecastItem({ forecast }: ForecastItemDTOProps) {
  const date = new Date(forecast.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="p-4 bg-white rounded-lg">
      <p className="text-sm text-gray-700 mb-2">{formattedDate}</p>
      <div className="flex items-center gap-2">
        <WeatherIcon
          icon={forecast.weather?.icon}
          description={forecast.weather?.description}
        />
        <div>
          <div className="flex gap-2 items-baseline">
            <p className="text-xl font-semibold text-black">
              {Math.round(forecast.temperature.average)}°C
            </p>
            <div className="text-xs text-gray-600">
              <span className="text-red-500">{Math.round(forecast.temperature.max)}°</span>
              {' / '}
              <span className="text-blue-500">{Math.round(forecast.temperature.min)}°</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 capitalize">
            {forecast.weather.description}
          </p>
        </div>
      </div>
    </div>
  );
} 