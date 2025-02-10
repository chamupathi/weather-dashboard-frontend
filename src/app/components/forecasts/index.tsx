import React from 'react';
import { useWeather } from '@/contexts/weather-context';
import { ForecastHeader } from './forecast-header';
import { ForecastItem } from './forecast-item';
import { ToggleForecastsButton } from './load-more-button';
import { FORECAST_DAYS_DEFAULT, FORECAST_DAYS_EXTENDED } from '@/constants/domain';


export default function Forecast() {

  const { forecast } = useWeather();

  const {
    isLoading,
    data: forecasts,
    setShowMore: toggleLoadMore,
    showMore,
  } = forecast;

  const handleToggle = async () => {
    await toggleLoadMore(!showMore);
  };

  const displayForecasts = forecasts.slice(0, showMore ? FORECAST_DAYS_EXTENDED : FORECAST_DAYS_DEFAULT);

  if (!forecasts.length) {
    return null;
  }

  return (
    <div className="mt-6 p-6 bg-blue-50 rounded-lg shadow-md">
      <ForecastHeader showMore={showMore} />
      
      <div className={`grid grid-cols-1 lg:grid-cols-${forecasts.length} md:grid-cols-3 gap-4`}>
        {displayForecasts?.map((forecast) => (
          <ForecastItem key={forecast.date} forecast={forecast} />
        ))}
      </div>
      
      {forecasts.length >= 1 && (
        <ToggleForecastsButton
          isLoading={isLoading}
          showMore={showMore}
          onToggle={handleToggle}
        />
      )}
    </div>
  );
} 