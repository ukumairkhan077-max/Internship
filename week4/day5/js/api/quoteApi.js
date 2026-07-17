// js/api/quoteApi.js
// Handles all communication with public quote APIs.
// Uses async/await + fetch, with a fallback chain so the UI never
// breaks just because one free API is temporarily down.

const PRIMARY_URL = "https://quoteslate.vercel.app/api/quotes/random";
const FALLBACK_URL = "https://dummyjson.com/quotes/random";

// Used only if BOTH network APIs fail (offline demo, no CORS, etc.)
const OFFLINE_QUOTES = [
  { id: "offline-1", quote: "The obstacle is the way.", author: "Marcus Aurelius", tags: ["stoicism"] },
  { id: "offline-2", quote: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci", tags: ["design"] },
  { id: "offline-3", quote: "Do the work; the words will follow.", author: "Unknown", tags: ["focus"] },
];

function normalize(raw, source) {
  // QuoteSlate sometimes returns an array, sometimes a single object.
  const data = Array.isArray(raw) ? raw[0] : raw;
  return {
    id: String(data.id ?? `${source}-${data.quote?.slice(0, 12)}`),
    quote: data.quote,
    author: data.author || "Unknown",
    tags: data.tags && data.tags.length ? data.tags : [source],
  };
}

/**
 * Fetches one random quote, trying the primary API first and
 * silently falling back if it fails or is unreachable.
 * @returns {Promise<{id:string, quote:string, author:string, tags:string[]}>}
 */
export async function getRandomQuote() {
  try {
    const response = await fetch(PRIMARY_URL);
    if (!response.ok) throw new Error(`QuoteSlate responded ${response.status}`);
    const data = await response.json();
    return normalize(data, "quoteslate");
  } catch (primaryError) {
    console.warn("Primary quote API failed, trying fallback…", primaryError);
    try {
      const response = await fetch(FALLBACK_URL);
      if (!response.ok) throw new Error(`DummyJSON responded ${response.status}`);
      const data = await response.json();
      return normalize(data, "dummyjson");
    } catch (fallbackError) {
      console.warn("Fallback quote API failed too, using offline quote.", fallbackError);
      const pick = OFFLINE_QUOTES[Math.floor(Math.random() * OFFLINE_QUOTES.length)];
      return pick;
    }
  }
}
