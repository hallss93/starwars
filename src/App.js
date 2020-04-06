// Libary
import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Particles from 'react-particles-js';

// Strore
import store from './store'

// Components
import List from './components/List/List'
import { params } from './params.js'

// Style
import './App.css';
const { Logo, LogoContainer } = require('./assets/styled/Nav')


function App() {

  const Home = () => {
    return <List />
  }
  return (

    <Provider store={store}>

      <BrowserRouter>
        <Particles params={params} />
        <LogoContainer>
          <Logo src={require('./assets/img/starswars.png')} />
        </LogoContainer>
        <Switch>
          {/* Listagem */}
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
