import { useSelector } from 'react-redux';

const TempDisplay = ({ celsiusValue }) => {
  const unit = useSelector((state) => state.weather.unit);

  const convert = (val) => {
    if (unit === 'F') return (val * 9/5) + 32;
    if (unit === 'K') return val + 273.15;
    return val;
  };

  return (
    <span>
      {convert(celsiusValue).toFixed(1)}°{unit}
    </span>
  );
};

export default TempDisplay;