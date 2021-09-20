import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware,combineReducers} from 'redux';
import { createLogger, } from 'redux-logger';
import  thunkMiddleware  from 'redux-thunk';
import './index.css';
// import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
// import Hellow2 from './Hello2';
import 'tachyons';

import App from './containers/App'
import { searchRobots,requestRobots } from './reducers';

const logger=createLogger();
const rootReducer=combineReducers({searchRobots,requestRobots})
const store= createStore(rootReducer,applyMiddleware( thunkMiddleware,logger ));
ReactDOM.render(
  <React.StrictMode>
   {/* <Hellow2 greeting={'Hola hermano como estas'}/> */}
   {/* <div>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
        <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
     </div> */}
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
