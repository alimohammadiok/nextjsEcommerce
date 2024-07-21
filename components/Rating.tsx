interface RatingProps {
    value: number;
  }
  
  const Rating = ({ value }: RatingProps) => {
    return (
      <div className="flex items-center justify-center">
        <span className="text-yellow-500 text-xl">&#9733;</span>
        <span className="text-lg font-semibold text-gray-900 ml-1">{value.toFixed(1)}</span>
      </div>
    );
  };
  
  export default Rating;
  