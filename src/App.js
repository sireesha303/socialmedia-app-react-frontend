import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../src/components/Login';
import Home from '../src/components/Home';
// import Header from '../src/components/Header'
import Modal from '../src/components/Modal'

const App = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
