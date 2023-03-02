import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Sign from '../routes/Sign';
import Register from '../routes/Register';
import Category from './category/Category';
import Product from './product/Product';

const index = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/signin">
        <Sign/>
      </Route>
      <Route path="/product/:id">
        <Product/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/category/:id">
        <Category/>
      </Route>
    </Switch>
  )
}

export default index