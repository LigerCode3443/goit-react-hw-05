import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const key = "b98f20d8e4be4d6440d75535167c729a";

export const getMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, {
    params: {
      api_key: key,
    },
  });
  return data.results;
};

export const getSearchMovies = async (query) => {
  const { data } = await axios.get("search/movie", {
    params: {
      api_key: key,
      query,
    },
  });
  return data.results;
};
export const getMoviesDetails = async (id) => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: key,
    },
  });
  return data;
};

export const getMoviesCredits = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: key,
    },
  });
  return data.cast;
};

export const getMoviesReviews = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: key,
    },
  });
  return data.results;
};
