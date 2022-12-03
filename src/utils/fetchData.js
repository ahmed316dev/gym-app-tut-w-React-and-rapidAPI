export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.React_APP_X_RAPIDAPI_KEY_TWO,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}
export const YouTubeOptions = {
  method: 'GET',
  params: {
    type: 'v',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RARPIDAPI_KEY_ONE,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
}

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}
