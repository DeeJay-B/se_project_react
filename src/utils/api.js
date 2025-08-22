const baseUrl = "http://localhost:3001";

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

// 👇 central request wrapper
function request(endpoint, options = {}) {
  const token = localStorage.getItem("jwt");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  return fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers,
  }).then(checkRes);
}

// Items
function getItems() {
  return request("/items");
}

function addItem({ name, imageUrl, weather }) {
  return request("/items", {
    method: "POST",
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

function deleteCard(cardId) {
  return request(`/items/${cardId}`, {
    method: "DELETE",
  });
}

function addCardLike(cardId) {
  return request(`/items/${cardId}/likes`, {
    method: "PUT",
  });
}

function removeCardLike(cardId) {
  return request(`/items/${cardId}/likes`, {
    method: "DELETE",
  });
}

// Users
function getCurrentUser() {
  return request("/users/me");
}

function updateCurrentUser({ name, avatar }) {
  return request("/users/me", {
    method: "PATCH",
    body: JSON.stringify({ name, avatar }),
  });
}

export {
  checkRes,
  request,
  getItems,
  addItem,
  deleteCard,
  addCardLike,
  removeCardLike,
  getCurrentUser,
  updateCurrentUser,
};
