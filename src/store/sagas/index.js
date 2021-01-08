import { all } from 'redux-saga/effects';

import recipesSaga from 'store/sagas/recipes';

export default function* rootSaga() {
  const sagas = [
    recipesSaga(),
  ];

  yield all(sagas);
}
