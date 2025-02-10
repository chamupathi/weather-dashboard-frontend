'use client';
import PageHeader from "@/components/common/page-header";
import SearchBar from "./components/search-bar";
import WeatherError from "./components/weather-error";
import CurrentWeather from "@/components/current-weather";
import Forecast from "./components/forecasts";

export default function Home() {
  return (
    <>
      <PageHeader title="Weather Dashboard" />

      <SearchBar />

      <CurrentWeather />

      <Forecast />

      <WeatherError />
    </>
  );
}
