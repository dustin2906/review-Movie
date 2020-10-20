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
          <Route path="http://dustin2906.github.io/review-movie" component={Home} exact />
          <Route path="http://dustin2906.github.io/review-movie/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}


export default App;