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

const mockedUVData: UVData = {
  uv: 0,
  uv_time: '2025-07-15T19:30:07.154Z',
  uv_max: 6.7239,
  uv_max_time: '2025-07-15T10:59:38.542Z',
  ozone: 348.4,
  ozone_time: '2023-04-12T15:04:31.773Z',
  safe_exposure_time: {
    st1: null,
    st2: null,
    st3: null,
    st4: null,
    st5: null,
    st6: null,
  },
  sun_info: {
    sun_times: {
      solarNoon: '2025-07-15T10:59:38.542Z',
      nadir: '2025-07-14T22:59:38.542Z',
      sunrise: '2025-07-15T02:49:38.197Z',
      sunset: '2025-07-15T19:09:38.886Z',
      sunriseEnd: '2025-07-15T02:54:03.715Z',
      sunsetStart: '2025-07-15T19:05:13.369Z',
      dawn: '2025-07-15T02:03:16.286Z',
      dusk: '2025-07-15T19:56:00.797Z',
      nauticalDawn: '2025-07-15T00:54:04.593Z',
      nauticalDusk: '2025-07-15T21:05:12.490Z',
      nightEnd: null,
      night: null,
      goldenHourEnd: '2025-07-15T03:43:08.869Z',
      goldenHour: '2025-07-15T18:16:08.214Z',
    },
    sun_position: {
      azimuth: 2.313473663703457,
      altitude: -0.058338550604393684,
    },
  },
};

export async function getCurrentUV(
  lat: number,
  lng: number,
  alt?: number | null
): Promise<UVData> {
  // const data = await axios.get(apiUrl, {
  //   headers: {
  //     'x-access-token': process.env.OPENUV_API_TOKEN,
  //     'Content-Type': 'application/json',
  //   },
  //   params: {
  //     lat,
  //     lng,
  //     alt,
  //   },
  // });
  // console.log(data.data.result);
  // return data.data.result;
  return mockedUVData;
}
