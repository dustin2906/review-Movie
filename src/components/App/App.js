import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import NotFound from '../elements/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header/>
        <Switch>
          <Route path="/review-Movie" component={Home} exact />
          <Route path="review-Movie/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}


export default App;