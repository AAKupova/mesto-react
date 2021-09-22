class Api {
  #options;

  constructor(options) {
    this.#options = options;
  }

  getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
    return res.json();
  }

  getUser() {
    const { baseUrl, headers } = this.#options;

    return fetch(`${baseUrl}users/me`, {
      method: "GET",
      headers,
    }).then(this.getResponseData);
  }

  getCards() {
    const { baseUrl, headers } = this.#options;

    return fetch(`${baseUrl}cards`, {
      method: "GET",
      headers,
    }).then(this.getResponseData);
  }

  deleteCard(id) {
    const { baseUrl, headers } = this.#options;

    return fetch(`${baseUrl}cards/${id}`, {
      method: "DELETE",
      headers,
    }).then(this.getResponseData);
  }

  disLike(id) {
    const { baseUrl, headers } = this.#options;

    return fetch(`${baseUrl}cards/likes/${id}`, {
      method: "DELETE",
      headers,
    }).then(this.getResponseData);
  }

  like(id) {
    const { baseUrl, headers } = this.#options;

    return fetch(`${baseUrl}cards/likes/${id}`, {
      method: "PUT",
      headers,
    }).then(this.getResponseData);
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-27/",
  headers: {
    authorization: "88e85c38-3673-4758-b064-e9b8bb0341f1",
    "Content-Type": "application/json",
  },
});
