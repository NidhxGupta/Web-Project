import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import HomePage from './containers/HomePage';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

  }, []);

  return (
    <div className="App">

      <Switch>
        <PrivateRoute path="/" exact component={HomePage} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />


        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>

    </div>
  );
}

export default App;
