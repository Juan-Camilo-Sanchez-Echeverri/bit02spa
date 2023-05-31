import {BrowserRouter,Switch,Route} from "react-router-dom";

import Home from "./pages/Home";

import './index.css'
import './App.css'

function App() {
  return <>
<BrowserRouter>
    <Switch>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </BrowserRouter>

  </>;
}

export default App;
