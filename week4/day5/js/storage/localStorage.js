// js/storage/localStorage.js
// Single source of truth for reading/writing favorite quotes to localStorage.
// Every other module talks to storage only through these functions.

const STORAGE_KEY = "skyAndWords.favoriteQuotes";

/** @returns {Array<{id:string, quote:string, author:string, tags:string[]}>} */
export function getFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("Could not read favorites from localStorage", error);
    return [];
  }
}

function persist(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

export function isFavorite(quoteId) {
  return getFavorites().some((q) => q.id === quoteId);
}

/** Adds a quote to favorites if it isn't already saved. Returns the new list. */
export function saveFavorite(quote) {
  const favorites = getFavorites();
  if (favorites.some((q) => q.id === quote.id)) return favorites;
  const updated = [{ ...quote, savedAt: Date.now() }, ...favorites];
  persist(updated);
  return updated;
}

/** Removes a quote from favorites by id. Returns the new list. */
export function removeFavorite(quoteId) {
  const updated = getFavorites().filter((q) => q.id !== quoteId);
  persist(updated);
  return updated;
}

/** Toggles favorite state for a quote. Returns { favorites, saved }. */
export function toggleFavorite(quote) {
  if (isFavorite(quote.id)) {
    return { favorites: removeFavorite(quote.id), saved: false };
  }
  return { favorites: saveFavorite(quote), saved: true };
}
