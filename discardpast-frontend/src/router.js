import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ArticlePage from './routes/ArticlePage';
import CodePage from './routes/CodePage';
import MusicPage from './routes/MusicPage';
import GamePage from './routes/GamePage';
import ContactPage from './routes/ContactPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/article" exact component={ArticlePage} />
        <Route path="/code" exact component={CodePage} />
        <Route path="/music" exact component={MusicPage} />
        <Route path="/game" exact component={GamePage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
