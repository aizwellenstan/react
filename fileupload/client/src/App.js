import React from "react";
import { Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import TopBar from "./TopBar";
import { createBrowserHistory as createHistory } from "history";
import { photosStore } from "./store";
const history = createHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Route
          path="/"
          exact
          component={props => (
            <HomePage {...props} photosStore={photosStore} />
          )}
        />
      </Router>
    </div>
  );
}
export default App;
