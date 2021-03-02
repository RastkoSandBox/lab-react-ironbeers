
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { MoreDetails } from './components/MoreDetails';
import { Products } from './components/Products';
import React from 'react';
import { Allbears } from './components/Allbears';


function App() {
  let routes = (
    <Switch>
      <Route path="/product/:id" exact component={MoreDetails} />
      <Route path="/product" exact component={Products} />
      <Route path="/bears" component={Allbears} />
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
  return <div>{routes}</div>;
}

export default App;