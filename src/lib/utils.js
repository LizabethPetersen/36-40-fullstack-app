const cookieFetch = (key) => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {  // eslint-disable-line
    const [cookieKey, cookieValue] = cookie.split('=');

    if (key === cookieKey.trim()) {
      return cookieValue;
    }
  }
  return undefined;
};

const cookieDelete = (key) => {
  document.cookie = `${key}=: expires=Mon, 28 Sep 1959 00:00:00 GMT`;
};

export { cookieFetch, cookieDelete };
