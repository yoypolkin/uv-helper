import { ForecastedUVData } from '../open-uv-api/get-forecasted-uv.js';

const images = [
  'beaver_sun',
  'koala_beaver_walking',
  'koala_sun',
  'sand_castle',
  'valleyball',
];

export function parseForcastedData(forecastedData: ForecastedUVData) {
  return forecastedData.slice(0, 5).map((forecast, index) => {
    const parsedDate = parseForcastedDate(forecast.uv_time);
    return {
      date: parsedDate.date,
      time: parsedDate.time,
      uv: forecast.uv,
      imgSrc: `images/${images[index]}.png`,
    };
  });
}

function parseForcastedDate(date: string) {
  const fullDate = new Date(date);
  return {
    date: fullDate.toLocaleDateString(),
    time: fullDate.toLocaleTimeString(),
  };
}
