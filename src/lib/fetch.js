const baseUrl =
  'https://devscale-mockapi.fly.dev/api/collections/notes/records/'

export const http = async (reqMethod, body = null, params = null) => {
  const url =
    `${baseUrl}${params != null ? params : ''}` + "?filter=(user='mrenaldyr')"

  const options = {
    method: reqMethod,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  }

  if (body != null) {
    options['body'] = JSON.stringify(body)
  }

  const result = await fetch(url, options)
  if (result.status != 204) {
    return await result.json()
  }
}
