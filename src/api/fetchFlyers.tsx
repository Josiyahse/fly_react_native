var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


function getFlyerByCategorie<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json<T>();
  });
}

export default getFlyerByCategorie;
