import React from 'react';
import {
  Router, Switch, Route,
} from 'react-router-dom';

import {
  RECIPES, SINGLE_RECIPE, CREATE, FINISH,
} from 'constants/routes';

import Home from 'pages/Home/Home';
import Recipes from 'pages/Recipes/Recipes';
import SingleRecipe from 'pages/SingleRecipe';
import Create from 'pages/Create';
import Finish from 'pages/Create/finish';

import { Container, CommonWrapper } from 'styles/common';

import history from './history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Container>
        <CommonWrapper>
          <Route exact path="/" component={Home} />
          <Route path={RECIPES} component={Recipes} />
          <Route path={SINGLE_RECIPE} component={SingleRecipe} />
          <Route path={CREATE} component={Create} />
          <Route path={FINISH} component={Finish} />
        </CommonWrapper>
      </Container>
    </Switch>
  </Router>
);

export default Routes;
