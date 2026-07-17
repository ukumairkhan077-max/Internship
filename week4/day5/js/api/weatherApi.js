// js/api/weatherApi.js
// Uses Open-Meteo's free, key-less geocoding + forecast endpoints.
// Everything runs client-side — no server, no secrets.

const GEOCODE_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";
const REVERSE_URL = "https://geocoding-api.open-meteo.com/v1/reverse";

/**
 * Resolves a free-text city name to coordinates + display name.
 * @param {string} city
 */
export async function geocodeCity(city) {
  const url = `${GEOCODE_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Could not search for that city");
  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    throw new Error(`No location found for "${city}"`);
  }
  const place = data.results[0];
  return {
    name: place.name,
    region: place.admin1 || place.country || "",
    latitude: place.latitude,
    longitude: place.longitude,
  };
}

/** Reverse-geocodes GPS coordinates (from navigator.geolocation) to a place name. */
export async function reverseGeocode(latitude, longitude) {
  try {
    const url = `${REVERSE_URL}?latitude=${latitude}&longitude=${longitude}&language=en&format=json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("reverse geocode failed");
    const data = await response.json();
    const place = data.results?.[0];
    return place ? { name: place.name, region: place.admin1 || place.country || "" } : { name: "My location", region: "" };
  } catch {
    return { name: "My location", region: "" };
  }
}

/**
 * Fetches current conditions + a 5-day forecast for the given coordinates.
 */
export async function getWeather(latitude, longitude) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,apparent_temperature",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset",
    timezone: "auto",
    forecast_days: "6",
  });

  const response = await fetch(`${FORECAST_URL}?${params.toString()}`);
  if (!response.ok) throw new Error("Weather service unavailable");
  const data = await response.json();
  return data;
}

/**
 * Convenience wrapper: resolve a city name, then fetch its weather in one go.
 */
export async function getWeatherForCity(city) {
  const place = await geocodeCity(city);
  const weather = await getWeather(place.latitude, place.longitude);
  return { place, weather };
}

/**
 * Convenience wrapper for geolocation coordinates.
 */
export async function getWeatherForCoords(latitude, longitude) {
  const [place, weather] = await Promise.all([
    reverseGeocode(latitude, longitude),
    getWeather(latitude, longitude),
  ]);
  return { place, weather };
}
