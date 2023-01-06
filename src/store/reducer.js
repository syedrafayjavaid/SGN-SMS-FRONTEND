import { combineReducers } from 'redux';
import dashboardReducer from './reducers/dashboardReducer';
import callReducer from './reducers/callReducer';
// project import
import menu from './reducers/menu';

export default combineReducers({
  dashboard: dashboardReducer,
  call: callReducer,
  menu: menu
});
