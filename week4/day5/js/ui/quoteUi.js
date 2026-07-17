// js/ui/quoteUi.js
// Pure UI rendering for the "quote of the moment" card.

import { colorForTag, capitalize } from "../utils/helper.js";

const card = document.getElementById("quoteCard");
const saveBtn = document.getElementById("saveQuoteBtn");
const saveLabel = document.getElementById("saveQuoteLabel");

export function renderQuoteSkeleton() {
  card.innerHTML = `<div class="skeleton skeleton--quote"></div>`;
}

export function renderQuoteError(message) {
  card.innerHTML = `
    <div class="weather-error">
      <strong>Couldn't load a quote.</strong><br/>
      ${message}
    </div>`;
}

/**
 * @param {{quote:string, author:string, tags:string[]}} data
 */
export function displayQuote(data) {
  const tag = data.tags?.[0] || "wisdom";
  const tagColor = colorForTag(tag);

  card.innerHTML = `
    <span class="quote-tag" style="background:${tagColor}">${capitalize(tag)}</span>
    <p class="quote-text">${data.quote}</p>
    <p class="quote-author">${data.author}</p>
  `;
}

/** Reflects whether the currently-shown quote is already saved. */
export function setSaveButtonState(isSaved) {
  saveBtn.classList.toggle("is-saved", isSaved);
  saveBtn.setAttribute("aria-pressed", String(isSaved));
  saveLabel.textContent = isSaved ? "Saved" : "Save";
}
