const rapidApiKey= import.meta.env.VITE_APP_RAPID_API_KEY;
const rapidApiHost= import.meta.env.VITE_APP_RAPID_API_HOST;
const rapidApiYouTubeKey= import.meta.env.VITE_APP_RAPID_API_YOUTUBE_KEY;
const rapidApiYouTubeHost= import.meta.env.VITE_APP_RAPID_API_YOUTUBE_HOST;

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': rapidApiHost,
    'X-RapidAPI-Key': rapidApiKey,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': rapidApiYouTubeHost,
    'X-RapidAPI-Key': rapidApiYouTubeKey,
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
