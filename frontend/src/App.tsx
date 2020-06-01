import React from 'react';
import './App.css';
import  { Provider } from 'react-redux'
import { Route , BrowserRouter } from 'react-router-dom';
import  { rootReducer } from './redux/rootReducer'
import  { connect } from 'react-redux'
import  {  createStore } from 'redux'
import PREInputComponent from "./InputComponent"



const store = createStore(rootReducer)


const PREApp: React.FC = () =>  {
  return (
    <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact component={PREInputComponent} />
          </BrowserRouter>
        </Provider>
        <PREInputComponent />
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return state;
}

const App = connect(mapStateToProps)(PREApp);
export default App;
