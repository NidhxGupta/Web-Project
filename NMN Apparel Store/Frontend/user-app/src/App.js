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
import MTops from './containers/Men/topspage';
import MBottoms from './containers/Men/bottomspage';
import MFootwear from './containers/Men/footwearpage';
import MAccessories from './containers/Men/accessoriespage';

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
        <Route path="/" exact component={HomePage} />
        <Route path="/Men/Tops" exact component={MTops} />
        <Route path="/Men/Bottoms" exact component={MBottoms} />
        <Route path="/Men/Footwear" exact component={MFootwear} />
        <Route path="/Men/Accessories" exact component={MAccessories} />


        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>

    </div>
  );
}

export default App;
