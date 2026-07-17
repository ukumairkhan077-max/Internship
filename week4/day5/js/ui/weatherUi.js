// js/ui/weatherUi.js
// Pure UI rendering for the weather panel. Takes already-fetched data
// and turns it into DOM — no fetch calls live here.

import { getWeatherInfo, formatDay } from "../utils/helper.js";

const card = document.getElementById("weatherCard");

const DIAL_RADIUS = 58;
const DIAL_CIRC = 2 * Math.PI * DIAL_RADIUS;

export function renderWeatherSkeleton() {
  card.innerHTML = `<div class="skeleton skeleton--weather"></div>`;
}

export function renderWeatherError(message) {
  card.innerHTML = `
    <div class="weather-error">
      <strong>Couldn't load weather.</strong><br/>
      ${message}
    </div>`;
}

/**
 * @param {object} place - { name, region }
 * @param {object} weather - raw Open-Meteo response
 */
export function displayWeather(place, weather) {
  const current = weather.current;
  const daily = weather.daily;

  const info = getWeatherInfo(current.weather_code);
  const todayMax = Math.round(daily.temperature_2m_max[0]);
  const todayMin = Math.round(daily.temperature_2m_min[0]);
  const temp = Math.round(current.temperature_2m);

  // How full the dial ring is: temp's position between today's min/max.
  const span = Math.max(todayMax - todayMin, 1);
  const fraction = Math.min(Math.max((temp - todayMin) / span, 0.06), 1);
  const dashOffset = DIAL_CIRC * (1 - fraction);

  const forecastHtml = daily.time
    .slice(0, 6)
    .map((dateStr, i) => {
      const dayInfo = getWeatherInfo(daily.weather_code[i]);
      const label = i === 0 ? "Today" : formatDay(dateStr);
      return `
        <div class="forecast-day">
          <span class="forecast-day__label">${label}</span>
          <span class="forecast-day__icon">${dayInfo.icon}</span>
          <span class="forecast-day__temps">
            <b>${Math.round(daily.temperature_2m_max[i])}°</b>
            <span>${Math.round(daily.temperature_2m_min[i])}°</span>
          </span>
        </div>`;
    })
    .join("");

  card.innerHTML = `
    <div class="weather-top">
      <div class="weather-dial">
        <svg viewBox="0 0 140 140">
          <defs>
            <linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f2b544" />
              <stop offset="100%" stop-color="#e2665a" />
            </linearGradient>
          </defs>
          <circle class="weather-dial__track" cx="70" cy="70" r="${DIAL_RADIUS}" />
          <circle class="weather-dial__value" cx="70" cy="70" r="${DIAL_RADIUS}"
            stroke-dasharray="${DIAL_CIRC}" stroke-dashoffset="${dashOffset}" />
        </svg>
        <div class="weather-dial__center">
          <span class="weather-dial__icon">${info.icon}</span>
          <span class="weather-dial__temp">${temp}°</span>
        </div>
      </div>
      <div class="weather-meta">
        <p class="weather-place">${place.name}${place.region ? `, ${place.region}` : ""}</p>
        <p class="weather-condition">${info.label} · feels like ${Math.round(current.apparent_temperature)}°</p>
        <div class="weather-range">
          <span>High <b>${todayMax}°</b></span>
          <span>Low <b>${todayMin}°</b></span>
        </div>
      </div>
    </div>

    <div class="weather-stats">
      <div class="stat-chip">
        <span class="stat-chip__label">Humidity</span>
        <span class="stat-chip__value">${Math.round(current.relative_humidity_2m)}%</span>
      </div>
      <div class="stat-chip">
        <span class="stat-chip__label">Wind</span>
        <span class="stat-chip__value">${Math.round(current.wind_speed_10m)} km/h</span>
      </div>
      <div class="stat-chip">
        <span class="stat-chip__label">UV Index</span>
        <span class="stat-chip__value">${Math.round(daily.uv_index_max[0])}</span>
      </div>
    </div>

    <div class="forecast-strip">
      ${forecastHtml}
    </div>
  `;
}
