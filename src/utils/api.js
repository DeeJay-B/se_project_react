const baseUrl = "http://localhost:3001";

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkRes);
}

function addItem({ name, imageUrl, weather }) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkRes);
}

function deleteCard(cardId) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
}

function addCardLike(cardId) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${cardId}/likes`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
}

function removeCardLike(cardId) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${cardId}/likes`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
}

function getCurrentUser() {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
}

function updateCurrentUser({ name, avatar }) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkRes);
}

export {
  checkRes,
  getItems,
  addItem,
  deleteCard,
  addCardLike,
  removeCardLike,
  getCurrentUser,
  updateCurrentUser,
};
