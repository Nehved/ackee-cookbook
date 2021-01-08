export const ACTIONS = {
  ON_LOAD_RECIPES_REQUEST: 'recipes/onLoadRecipesRequest',
  ON_LOAD_RECIPES_SUCCESS: 'recipes/onLoadRecipesSuccess',
  ON_LOAD_RECIPES_FAILED: 'recipes/onLoadRecipesFailed',

  ON_LOAD_SINGLE_RECIPE_REQUEST: 'recipes/onLoadSingleRecipesRequest',
  ON_LOAD_SINGLE_RECIPE_SUCCESS: 'recipes/onLoadSingleRecipesSuccess',
  ON_LOAD_SINGLE_RECIPE_FAILED: 'recipes/onLoadSingleRecipesFailed',

  ON_SET_ACTIVE_ID: 'recipes/onSetActiveId',

  ON_RATE_REQUEST: 'recipes/onRateRequest',
  ON_RATE_SUCCESS: 'recipes/onRateSuccess',
  ON_RATE_FAILED: 'recipes/onRateFailed',

  ON_CREATE_REQUEST: 'recipes/onCreateRequest',
  ON_CREATE_SUCCESS: 'recipes/onCreateSuccess',
  ON_CREATE_FAILED: 'recipes/onCreateFailed',
};

export const onLoadRecipesRequest = () => ({
  type: ACTIONS.ON_LOAD_RECIPES_REQUEST,
});

export const onLoadRecipesSuccess = (data) => ({
  type: ACTIONS.ON_LOAD_RECIPES_SUCCESS,
  payload: { data },
});

export const onLoadRecipesFailed = (err) => ({
  type: ACTIONS.ON_LOAD_RECIPES_FAILED,
  payload: { err },
});

export const onLoadSingleRecipeRequest = (id) => ({
  type: ACTIONS.ON_LOAD_SINGLE_RECIPE_REQUEST,
  payload: { id },
});

export const onLoadSingleRecipeSuccess = (data) => ({
  type: ACTIONS.ON_LOAD_SINGLE_RECIPE_SUCCESS,
  payload: { data },
});

export const onLoadSingleRecipeFailed = (err) => ({
  type: ACTIONS.ON_LOAD_SINGLE_RECIPE_FAILED,
  payload: { err },
});

export const onSetActiveId = (id) => ({
  type: ACTIONS.ON_SET_ACTIVE_ID,
  payload: { id },
});

export const onRateRequest = (num) => ({
  type: ACTIONS.ON_RATE_REQUEST,
  payload: { num },
});

export const onRateSuccess = () => ({
  type: ACTIONS.ON_RATE_SUCCESS,
});

export const onRateFailed = (err) => ({
  type: ACTIONS.ON_RATE_FAILED,
  payload: { err },
});

export const onCreateRequest = (inputs, ingredients) => ({
  type: ACTIONS.ON_CREATE_REQUEST,
  payload: { inputs, ingredients },
});

export const onCreateSuccess = () => ({
  type: ACTIONS.ON_CREATE_SUCCESS,
});

export const onCreateFailed = () => ({
  type: ACTIONS.ON_CREATE_FAILED,
});
