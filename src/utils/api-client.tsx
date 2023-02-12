/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const apiURL = "https://jsonplaceholder.typicode.com/todos/1";

async function client(
  endpoint,
  { data, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return window.fetch(`${apiURL}`, config).then(async (response) => {
    if (response.status === 401) {
      // queryCache.clear();
      // await auth.logout();
      // refresh the page for them
      window.location.assign(window.location);
      return Promise.reject({ message: "Please re-authenticate." });
    }
    const data = await response.json();
    if (response.ok) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { client };
