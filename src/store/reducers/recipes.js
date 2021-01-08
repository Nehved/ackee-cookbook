import { assoc, compose } from 'lodash/fp';

import { ACTIONS } from 'store/actions/recipes';

const initialState = {
  isLoading: false,
  data: [],
  error: '',
  activeId: '',
  activeRecipe: {},
  passVoting: false,
  isCreated: false,
};

const recipesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ON_LOAD_RECIPES_REQUEST:
    case ACTIONS.ON_LOAD_SINGLE_RECIPE_REQUEST:
    case ACTIONS.ON_CREATE_REQUEST:
      return assoc(['isLoading'], true, state);

    case ACTIONS.ON_LOAD_RECIPES_SUCCESS:
      return compose(
        assoc(['isLoading'], false),
        assoc(['data'], payload.data),
      )(state);

    case ACTIONS.ON_LOAD_RECIPES_FAILED:
      return compose(
        assoc(['isLoading'], false),
        assoc(['data'], []),
        assoc(['error'], payload.err),
      )(state);

    case ACTIONS.ON_LOAD_SINGLE_RECIPE_SUCCESS:
      return compose(
        assoc(['activeRecipe'], payload.data),
        assoc(['isLoading'], false),
      )(state);

    case ACTIONS.ON_SET_ACTIVE_ID:
      return assoc(['activeId'], payload.id, state);

    case ACTIONS.ON_RATE_SUCCESS:
      return assoc(['passVoting'], true, state);

    case ACTIONS.ON_CREATE_SUCCESS:
      return compose(
        assoc(['isCreated'], true),
        assoc(['isLoading'], false),
      )(state);

    default:
      return state;
  }
};

export default recipesReducer;
