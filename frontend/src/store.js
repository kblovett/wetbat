import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer imports
import { agentLoginReducer } from 'reducers';

const reducer = combineReducers({
  agentLogin: agentLoginReducer,
});

const agentInfoFromLocalStorage = localStorage.getItem('agentInfo')
  ? JSON.parse(localStorage.getItem('agentInfo'))
  : null;

const initialState = {
  agentLogin: { agentInfo: agentInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
