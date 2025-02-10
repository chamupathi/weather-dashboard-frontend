'use client';
import PageHeader from "@/components/common/page-header";
import SearchBar from "./components/search-bar";
import WeatherError from "./components/weather-error";

export default function Home() {
  return (
    <>
      <PageHeader title="Weather Dashboard" />

      <SearchBar />

      <WeatherError />
    </>
  );
}
