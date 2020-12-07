import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import GMen from './containers/Men/general';
import GWomen from './containers/Women/general';
import WTops from './containers/Women/topspage';
import WBottoms from './containers/Women/bottomspage';
import WFootwear from './containers/Women/footwearpage';
import WAccessories from './containers/Women/accessoriespage';
import GKids from './containers/Kids/general';
import KTops from './containers/Kids/topspage';
import KBottoms from './containers/Kids/bottomspage';
import KFootwear from './containers/Kids/footwearpage';
import KAccessories from './containers/Kids/accessoriespage';
import Profile from './containers/Profile/profile';
import ProductScreen from '../src/containers/ProductScreen';
import Cart from './containers/Cart/cart';

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
        {/*Route for Homepage */}
        <Route path="/" exact component={HomePage} />
        <Route path="/product/:id" component={ProductScreen} />

        {/*Routes for Mens Category */}
        <Route path="/Men/General" exact component={GMen} />
        <Route path="/Men/Tops" exact component={MTops} />
        <Route path="/Men/Bottoms" exact component={MBottoms} />
        <Route path="/Men/Footwear" exact component={MFootwear} />
        <Route path="/Men/Accessories" exact component={MAccessories} />
        {/*Routes for Womens Category */}
        <Route path="/Women/General" exact component={GWomen} />
        <Route path="/Women/Tops" exact component={WTops} />
        <Route path="/Women/Bottoms" exact component={WBottoms} />
        <Route path="/Women/Footwear" exact component={WFootwear} />
        <Route path="/Women/Accessories" exact component={WAccessories} />
        {/*Routes for Kids Category */}
        <Route path="/Kids/General" exact component={GKids} />
        <Route path="/Kids/Tops" exact component={KTops} />
        <Route path="/Kids/Bottoms" exact component={KBottoms} />
        <Route path="/Kids/Footwear" exact component={KFootwear} />
        <Route path="/Kids/Accessories" exact component={KAccessories} />
        {/*Route for Profile */}
        <PrivateRoute path="/Profile" exact component={Profile} />
        <PrivateRoute path="/Cart" exact component={Cart} />
        {/*Route for Authenticating the user */}
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>

    </div>

  );
}

export default App;
