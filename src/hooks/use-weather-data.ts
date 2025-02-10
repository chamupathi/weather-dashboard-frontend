import { WeatherResponse } from "@/types/responses/weather";
import { useEffect, useState } from "react";
import { API_BASE_URL, WEATHER_API_PATH } from '@/constants/api';
import { transformWeatherData } from "@/transformers/transform-weather-data";
import { APIError } from "@/types/responses/error";
import { CurrentWeatherDTO } from "@/types/dto/current-weather";

export const useWeatherData = (city: string) => {
    const [data, setData] = useState<CurrentWeatherDTO | null>(null);
    const [showMore, setShowMore] = useState<boolean>(false);

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchWeatherData = async (city: string) => {
        setData(null);
        setIsLoading(true);
        setError(null);

        const weatherResponse = await fetch(`${API_BASE_URL}${WEATHER_API_PATH}/${encodeURIComponent(city)}`);
        const weatherData = await weatherResponse.json();

        if (!weatherResponse.ok) {

            switch (weatherResponse.status) {
                case 404:
                    setError('City not found');
                    break;
                default:
                    setError((weatherData as APIError).message || 'Failed to fetch weather data');
                    break;
            }
            setIsLoading(false);
            return;
        }

        setData(transformWeatherData(weatherData as WeatherResponse));
        setIsLoading(false);
    }


    useEffect(() => {
        if (city) {
            fetchWeatherData(city);
        }

    }, [city, showMore]);

    return { data, error, isLoading, setShowMore, showMore };


}