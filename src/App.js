import React, { Component } from 'react'
import './styles/App.scss';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import JokesContainer from './components/JokesContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={JokesContainer}/>
        </div>
      </Provider>
    )
  }
}

export default App;
