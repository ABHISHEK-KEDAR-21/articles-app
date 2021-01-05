import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './Login';
import ArticleDetail from './ArticleDetail';
import Articles from './Articles';

function App(props) {

  return (
    <Router>
      <Switch>
        <Route path="/article-details" exact component={ArticleDetail} />
        <Route path="/login" exact component={Login} />
        <Route path="/articles" exact component={Articles} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
