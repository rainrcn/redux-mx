import { createStore, applyMiddleware } from 'redux';

const state = {};
const reducers = [];
const middlewares = [];
const actions = [];
const effects = [];

const rootStore = createStore(rootReducer, applyMiddleware(createLogger()));

export default rootStore;
