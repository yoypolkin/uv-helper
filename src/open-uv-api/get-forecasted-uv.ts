import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = 'https://api.openuv.io/api/v1/forecast';

export type ForecastedUVData = {
  uv: number;
  uv_time: string;
  sun_position: {
    azimuth: number;
    altitude: number;
  };
}[];

export async function getForecastedUV(
  lat: number,
  lng: number
): Promise<ForecastedUVData> {
  const data = await axios.get(apiUrl, {
    headers: {
      'x-access-token': process.env.OPENUV_API_TOKEN,
      'Content-Type': 'application/json',
    },
    params: {
      lat,
      lng,
    },
  });
  console.log(data.data.result);
  return data.data.result;
}
