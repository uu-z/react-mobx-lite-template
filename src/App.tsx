import React from "react";
import { useObserver } from "mobx-react-lite";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { TodoPage } from "./pages/todo";

const App = () => {
  return useObserver(() => (
    <div className="text-center">
      <Router>
        <div>
          <Link to="/todo" className="text-blue-500 underline">
            Todo
          </Link>
        </div>
        <div className="mt-10">
          <Switch>
            <Route path="/todo">
              <TodoPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  ));
};

export default App;
