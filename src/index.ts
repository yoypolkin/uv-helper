import express, { Express } from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getCurrentUV, UVData } from './open-uv-api/get-current-uv.js';
import { generateTitle } from './main-logic/generate-title.js';
import { getForecastedUV } from './open-uv-api/get-forecasted-uv.js';
import { parseForcastedData } from './main-logic/parse-forcasted-data.js';

const app: Express = express();
const port: number = 3000;
const __dirname: string = dirname(fileURLToPath(import.meta.url));

app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.baseUrl);
  res.render('index', {
    title: "Let's check if sunscreen is needed today!",
  });
});

app.get('/uv-help', async (req, res) => {
  const { latitude, longitude, altitude } = req.query;
  console.log(`Longitude: ${longitude}; Latitude: ${latitude}`);

  const uvData: UVData = await getCurrentUV(
    Number(latitude),
    Number(longitude)
  );
  const forecastedData = await getForecastedUV(
    Number(latitude),
    Number(longitude)
  );

  const parsedForecast = parseForcastedData(forecastedData);

  res.render('index', {
    title: generateTitle(Number(uvData.uv)),
    forecastedCards: parsedForecast,
  });
});

app.listen(port, (): void => {
  console.log('Server started on port: ' + port);
});
