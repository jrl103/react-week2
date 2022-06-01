import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadWordFB } from "./redux/modules/word";

import Main from "./Main";
import AddPage from "./AddPage";


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, [dispatch]);

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
