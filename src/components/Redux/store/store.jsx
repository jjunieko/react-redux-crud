import { legacy_createStore as createStore } from 'react-redux';
import rootReducer  from './reducers/rootReducer';


export const store = createStore(rootReducer);

