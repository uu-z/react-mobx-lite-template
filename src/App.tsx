import React from "react";
import { useObserver } from "mobx-react-lite";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { TodoPage } from "./pages/todo";
import { TestPage } from "./pages/test";

const App = () => {
  return useObserver(() => (
    //@ts-ignore
    <div className="text-center">
      <Router>
        <div>
          <Link to="/todo" className="text-blue-500 underline">
            Todo
          </Link>
          <Link to="/test" className="text-blue-500 underline ml-2">
            Test
          </Link>
        </div>
        <div className="mt-10">
          <Switch>
            <Route path="/todo">
              <TodoPage />
            </Route>
            <Route path="/test">
              <TestPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  ));
};

export default App;
