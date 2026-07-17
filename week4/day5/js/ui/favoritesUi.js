// js/ui/favoritesUi.js
// Renders the "Favorite Lines" gallery from a list of saved quotes.
// Emits a custom "removeFavorite" event so main.js can react without
// this module needing to know about storage at all.

import { colorForTag } from "../utils/helper.js";

const list = document.getElementById("favorites");
const emptyState = document.getElementById("favEmpty");
const countLabel = document.getElementById("favCount");

export function renderFavorites(favorites) {
  countLabel.textContent = `${favorites.length} saved`;
  emptyState.style.display = favorites.length ? "none" : "block";
  list.style.display = favorites.length ? "grid" : "none";

  list.innerHTML = favorites
    .map((q) => {
      const tag = q.tags?.[0] || "wisdom";
      return `
        <li class="fav-card" style="--tag-color:${colorForTag(tag)}" data-id="${q.id}">
          <p class="fav-card__quote">"${q.quote}"</p>
          <p class="fav-card__author">${q.author}</p>
          <button class="fav-card__remove" data-remove-id="${q.id}" aria-label="Remove from favorites">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </li>`;
    })
    .join("");
}

/** Wires up a single delegated click listener for all "remove" buttons. */
export function onFavoriteRemove(handler) {
  list.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-remove-id]");
    if (!btn) return;
    handler(btn.dataset.removeId);
  });
}
