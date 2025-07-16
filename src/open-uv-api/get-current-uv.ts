import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiUrl = 'https://api.openuv.io/api/v1/uv';

export type UVData = {
  uv: number;
  uv_time: string;
  uv_max: number;
  uv_max_time: string;
  ozone: number;
  ozone_time: string;
  safe_exposure_time: {
    st1: number | null;
    st2: number | null;
    st3: number | null;
    st4: number | null;
    st5: number | null;
    st6: number | null;
  };
  sun_info: {
    sun_times: {
      solarNoon: string;
      nadir: string;
      sunrise: string;
      sunset: string;
      sunriseEnd: string;
      sunsetStart: string;
      dawn: string;
      dusk: string;
      nauticalDawn: string;
      nauticalDusk: string;
      nightEnd: null;
      night: null;
      goldenHourEnd: string;
      goldenHour: string;
    };
    sun_position: {
      azimuth: number;
      altitude: number;
    };
  };
};

export async function getCurrentUV(
  lat: number,
  lng: number,
  alt?: number | null
): Promise<UVData> {
  const data = await axios.get(apiUrl, {
    headers: {
      'x-access-token': process.env.OPENUV_API_TOKEN,
      'Content-Type': 'application/json',
    },
    params: {
      lat,
      lng,
      alt,
    },
  });
  console.log(data.data.result);
  return data.data.result;
}
