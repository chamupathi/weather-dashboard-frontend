interface ForecastHeaderProps {
  showMore: boolean;
}

export function ForecastHeader({ showMore }: ForecastHeaderProps) {
  return (
    <h2 className="text-xl font-semibold mb-4 text-black">
      {showMore ? '5-Day' : '3-Day'} Forecast
    </h2>
  );
} 