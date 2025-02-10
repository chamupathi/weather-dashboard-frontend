import ErrorMessage from '@/components/common/error-message';
import { useWeather } from '@/contexts/weather-context';

export default function WeatherError() {

  const {
    weather,
    forecast,
  } = useWeather();

  const error = weather.error || forecast.error;

  if (!error) {
    return null;
  }

  return (
    <ErrorMessage message={error} />
  );
} 