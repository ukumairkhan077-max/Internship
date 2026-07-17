// js/main.js
// Orchestrates the dashboard: wires api/ + ui/ + storage/ modules together.
// This is the only file that knows about all three layers at once.

import { getRandomQuote } from "./api/quoteApi.js";
import { getWeatherForCity, getWeatherForCoords } from "./api/weatherApi.js";

import {
  renderQuoteSkeleton,
  renderQuoteError,
  displayQuote,
  setSaveButtonState,
} from "./ui/quoteUi.js";

import {
  renderWeatherSkeleton,
  renderWeatherError,
  displayWeather,
} from "./ui/weatherUi.js";

import { renderFavorites, onFavoriteRemove } from "./ui/favoritesUi.js";

import {
  getFavorites,
  toggleFavorite,
  isFavorite,
  removeFavorite,
} from "./storage/localStorage.js";

const DEFAULT_CITY = "Islamabad";

let currentQuote = null;

const newQuoteBtn = document.getElementById("newQuoteBtn");
const saveQuoteBtn = document.getElementById("saveQuoteBtn");
const citySearchForm = document.getElementById("citySearchForm");
const cityInput = document.getElementById("cityInput");
const locateBtn = document.getElementById("locateBtn");

/* ---------------------------------------------------------- *
 * Quote flow
 * ---------------------------------------------------------- */
async function loadNewQuote() {
  renderQuoteSkeleton();
  try {
    const quote = await getRandomQuote();
    currentQuote = quote;
    displayQuote(quote);
    setSaveButtonState(isFavorite(quote.id));
  } catch (error) {
    console.error(error);
    renderQuoteError("Please check your connection and try again.");
  }
}

function handleSaveToggle() {
  if (!currentQuote) return;
  const { saved } = toggleFavorite(currentQuote);
  setSaveButtonState(saved);
  renderFavorites(getFavorites());
}

/* ---------------------------------------------------------- *
 * Weather flow
 * ---------------------------------------------------------- */
async function loadWeatherByCity(city) {
  renderWeatherSkeleton();
  try {
    const { place, weather } = await getWeatherForCity(city);
    displayWeather(place, weather);
  } catch (error) {
    console.error(error);
    renderWeatherError(error.message || "Try a different city name.");
  }
}

async function loadWeatherByCoords(latitude, longitude) {
  renderWeatherSkeleton();
  try {
    const { place, weather } = await getWeatherForCoords(latitude, longitude);
    displayWeather(place, weather);
  } catch (error) {
    console.error(error);
    renderWeatherError("Could not read weather for your location.");
  }
}

function handleLocateClick() {
  if (!navigator.geolocation) {
    renderWeatherError("Geolocation isn't supported by this browser.");
    return;
  }
  renderWeatherSkeleton();
  navigator.geolocation.getCurrentPosition(
    (position) => loadWeatherByCoords(position.coords.latitude, position.coords.longitude),
    () => renderWeatherError("Location access was denied.")
  );
}

/* ---------------------------------------------------------- *
 * Clock
 * ---------------------------------------------------------- */
function tickClock() {
  const now = new Date();
  document.getElementById("clockTime").textContent = now.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  document.getElementById("clockDate").textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

/* ---------------------------------------------------------- *
 * Wiring
 * ---------------------------------------------------------- */
newQuoteBtn.addEventListener("click", loadNewQuote);
saveQuoteBtn.addEventListener("click", handleSaveToggle);
locateBtn.addEventListener("click", handleLocateClick);

citySearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;
  loadWeatherByCity(city);
  cityInput.value = "";
});

onFavoriteRemove((id) => {
  removeFavorite(id);
  renderFavorites(getFavorites());
  if (currentQuote && currentQuote.id === id) setSaveButtonState(false);
});

/* ---------------------------------------------------------- *
 * Boot
 * ---------------------------------------------------------- */
function boot() {
  tickClock();
  setInterval(tickClock, 30_000);

  loadNewQuote();
  loadWeatherByCity(DEFAULT_CITY);
  renderFavorites(getFavorites());
}

document.addEventListener("DOMContentLoaded", boot);
