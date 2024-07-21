interface PriceProps {
    amount: number;
  }
  
  const PriceText = ({ amount }: PriceProps) => {
    return (
      <div className="flex items-center justify-center">
        <span className="text-xl font-semibold text-gray-900">${amount.toFixed(2)}</span>
      </div>
    );
  };
  
  export default PriceText;
  