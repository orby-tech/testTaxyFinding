import React from 'react';
import './App.css';
import  { Provider } from 'react-redux'
import { Route , BrowserRouter } from 'react-router-dom';
import  { rootReducer } from './redux/rootReducer'
import  { connect } from 'react-redux'
import  {  createStore } from 'redux'
import InputComponent from "./InputComponent"
import FindedCar from "./FindedCar"

import YandexMap from "./Map"


const store = createStore(rootReducer)


const PREApp: React.FC = () =>  {
  return (
    <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact component={InputComponent} />
            <Route exact component={FindedCar} />
            <Route exact component={YandexMap} />
          </BrowserRouter>
        </Provider>
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return state;
}

const App = connect(mapStateToProps)(PREApp);
export default App;
