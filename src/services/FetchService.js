class FetchService {
  _apiBase = 'https://jsonplaceholder.typicode.com';

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getUsers = async (limit = 4) => {
    const res = await this.getResource(`${this._apiBase}/users?_limit=${limit}`);
    return res;
  }

};

export default FetchService;