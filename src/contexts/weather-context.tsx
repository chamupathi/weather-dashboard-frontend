'use client';  // Add this line since we're using hooks in the context

import { createContext, useContext, ReactNode, useState } from 'react';
import { useWeatherData } from '@/hooks/use-weather-data';
import { useForecasts } from '@/hooks/use-forecasts';
import { CurrentWeatherDTO } from '@/types/dto/current-weather';
import { ForecastItemDTO } from '@/types/dto/forecast';

interface WeatherContextType {
  weather: {
    data: CurrentWeatherDTO | null;
    error: string | null;
    isLoading: boolean;
  },
  forecast: {
    data: ForecastItemDTO[];
    error: string | null;
    isLoading: boolean;
    setShowMore: (show: boolean) => void;
    showMore: boolean;
  },
  city: string;
  setCity: (city: string) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState<string>('');

  const weather = useWeatherData(city);
  const forecast = useForecasts(city);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        forecast,
        setCity,
        city,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}; 