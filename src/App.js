import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./Main";
import AddPage from "./AddPage";



function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Main /></Route>
          <Route path="/addpage" exact>
            <AddPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
