interface ToggleForecastsButtonProps {
  isLoading: boolean;
  showMore: boolean;
  onToggle: () => void;
}

export function ToggleForecastsButton({ isLoading, showMore, onToggle }: ToggleForecastsButtonProps) {

  
  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={onToggle}
        disabled={isLoading}
        className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium disabled:text-blue-300"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            Loading...
          </div>
        ) : showMore ? (
          'Show Less'
        ) : (
          'Show More Days'
        )}
      </button>
    </div>
  );
} 