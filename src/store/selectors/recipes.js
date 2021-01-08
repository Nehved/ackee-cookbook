import { createSelector } from 'reselect';
import { get } from 'lodash/fp';

const localState = (state) => state.recipesReducer;

export const getIsLoading = createSelector(
  localState,
  get(['isLoading']),
);

export const getData = createSelector(
  localState,
  get(['data']),
);

export const getActiveRecipeId = createSelector(
  localState,
  get(['activeId']),
);

export const getActiveRecipe = createSelector(
  localState,
  get(['activeRecipe']),
);

export const getIsPassVoting = createSelector(
  localState,
  get(['passVoting']),
);
