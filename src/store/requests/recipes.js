import { axiosInstance } from 'store/requests/index';

export const loadRecipesRequest = (limit = 10, offset = 0) => axiosInstance.get(
  `/v1/recipes?limit=${limit}&offset=${offset}`,
);

export const loadSingleRecipeRequest = (id) => axiosInstance.get(
  `/v1/recipes/${id}`,
);

export const rateRecipeRequest = (num, id) => axiosInstance.post(
  `/v1/recipes/${id}/ratings`,
  {
    score: num,
  },
);

export const createRecipeRequest = (
  name, description, ingredients, duration, info,
) => axiosInstance.post(
  'v1/recipes',
  {
    name,
    description,
    ingredients: [...ingredients],
    duration,
    info,
  },
);
