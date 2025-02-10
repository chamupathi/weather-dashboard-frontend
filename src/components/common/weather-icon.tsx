interface WeatherIconProps {
  icon?: string;
  description?: string;
  size?: 'small' | 'large';
}

export function WeatherIcon({ icon, description, size = 'small' }: WeatherIconProps) {
  const sizeClasses = {
    small: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  return (
    <img
      src={`http://openweathermap.org/img/wn/${icon}${size === 'large' ? '@2x' : ''}.png`}
      alt={description}
      className={`${sizeClasses[size]} bg-blue-500 rounded-full`}
    />
  );
} 