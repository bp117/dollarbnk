import { applyMiddleware, createStore } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

// Activate Redux DevTools only in dev mode
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger';

const middlewares = [thunk, logger, ];

export default function configureStore(initialState) {
   const store = createStore(
      rootReducer(),
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares))
   );

   return store;
}