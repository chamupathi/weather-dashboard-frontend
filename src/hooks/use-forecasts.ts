import { useEffect, useState } from "react";
import { API_BASE_URL, WEATHER_API_PATH } from '@/constants/api';
import { ForecastResponse } from "@/types/responses/forecast";
import { APIError } from "@/types/responses/error";
import { transformForecastData } from "@/transformers/transform-forecast-data";
import { FORECAST_DAYS_DEFAULT, FORECAST_DAYS_EXTENDED } from "@/constants/domain";

export const useForecasts = (city: string) => {

    const [showMore, setShowMore] = useState<boolean>(false);
    const [data, setData] = useState<ForecastResponse[]>([]);

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchForecast = async (city: string, days: number, loadMore: boolean = false) => {
        setIsLoading(true);
        setError(null);

        if (!loadMore) {
            setData([]);
        }

        const forecastResponse = await fetch(
            `${API_BASE_URL}${WEATHER_API_PATH}/${encodeURIComponent(city)}/forecast?days=${days}`
        );
        const forecastData = await forecastResponse.json();

        if (!forecastResponse.ok) {
            setError((forecastData as APIError).message || 'Failed to fetch forecast data');
            setIsLoading(false);
            return;
        }

        setData(transformForecastData(forecastData as ForecastResponse[]));
        setIsLoading(false);
    };

    useEffect(() => {
        if (city) {
            fetchForecast(city, showMore ? FORECAST_DAYS_EXTENDED : FORECAST_DAYS_DEFAULT);
        }
    }, [city]);

    useEffect(() => {
        if (showMore && (data.length <= FORECAST_DAYS_DEFAULT)) {
            fetchForecast(city, FORECAST_DAYS_EXTENDED, true);
        }
    }, [showMore]);

    return { error, isLoading, setShowMore, showMore, data };

}