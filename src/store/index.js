import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(sagas);
  return store;
}

const store = configureStore({});

export default store;
