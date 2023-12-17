import { MediaType, TrendingResult } from 'interfaces/apiResults';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
