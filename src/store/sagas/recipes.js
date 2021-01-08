import {
  takeLatest, put, call, select,
} from 'redux-saga/effects';

import { FINISH } from 'constants/routes';

import { getActiveRecipeId } from 'store/selectors/recipes';
import {
  loadRecipesRequest, loadSingleRecipeRequest, rateRecipeRequest,
  createRecipeRequest,
} from 'store/requests/recipes';
import {
  ACTIONS, onLoadRecipesFailed, onLoadRecipesSuccess, onLoadSingleRecipeFailed,
  onLoadSingleRecipeSuccess, onRateFailed, onRateSuccess, onCreateFailed, onCreateSuccess,
} from 'store/actions/recipes';

import history from '../../history';

function* loadRecipes() {
  try {
    const { data } = yield call(loadRecipesRequest);
    yield put(onLoadRecipesSuccess(data));
  } catch (e) {
    yield put(onLoadRecipesFailed(e));
  }
}

function* loadSingleRecipe({ payload: { id } }) {
  try {
    const { data } = yield call(loadSingleRecipeRequest, id);
    yield put(onLoadSingleRecipeSuccess(data));
  } catch (e) {
    yield put(onLoadSingleRecipeFailed(e));
  }
}

function* rateRecipe({ payload: { num } }) {
  const id = yield select(getActiveRecipeId);
  try {
    yield call(rateRecipeRequest, num, id);
    // eslint-disable-next-line
    localStorage.setItem('isRated', num);
    yield put(onRateSuccess());
  } catch (e) {
    yield put(onRateFailed(e));
  }
}

function* createRecipe({ payload: { inputs, ingredients } }) {
  try {
    yield call(createRecipeRequest,
      inputs.name, inputs.description, ingredients, inputs.duration, inputs.info);
    history.push(FINISH);
    yield put(onCreateSuccess());
  } catch (e) {
    yield put(onCreateFailed(e));
  }
}

export default function* recipesSaga() {
  yield takeLatest(ACTIONS.ON_LOAD_RECIPES_REQUEST, loadRecipes);
  yield takeLatest(ACTIONS.ON_LOAD_SINGLE_RECIPE_REQUEST, loadSingleRecipe);
  yield takeLatest(ACTIONS.ON_RATE_REQUEST, rateRecipe);
  yield takeLatest(ACTIONS.ON_CREATE_REQUEST, createRecipe);
}
