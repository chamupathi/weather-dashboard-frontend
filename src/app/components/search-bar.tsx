import { useWeather } from '@/contexts/weather-context';
import { useState } from 'react';


export default function SearchBar() {

  const {
    setCity,
    city,
    weather: { isLoading },
  } = useWeather();

  const [cityInput, setCityInput] = useState(city);

  const handleSearch = async (city: string) => {
    setCity(city);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cityInput?.trim()) {
      handleSearch(cityInput.trim());
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex gap-2">
          
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            placeholder="Enter city name..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            disabled={isLoading}
          />
          
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>
    </div>
  );
} 