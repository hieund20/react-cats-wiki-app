import { useEffect, useState } from 'react';
import { getAllBreeds, getMostBreed } from './apis/getCatDetails';
import Home from './page/Home';
import Header from './sharedComponents/Header';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import Top from './page/Top';
import Benefits from './page/Benefits';
import CatDetails from './page/CatDetails';
import Footer from './sharedComponents/Footer';
import NotFound from './page/NotFound';

import './App.scss';


function App() {
  const [mostBreeds, setMostBreeds] = useState([])
  const [allBreeds, setAllBreeds] = useState([])

  //Get demo 4 breed to show most breed at home page
  useEffect(() => {
    const queryParams = 'limit=4&page=0';
    getMostBreed(queryParams)
      .then((res) => {
        console.log(res.data);
        setMostBreeds(res.data);
      })
  }, [])

  //Get all breeds to fill search box
  useEffect(() => {
    getAllBreeds()
      .then((res) => {
        setAllBreeds(res.data);
      })
  }, [])


  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              mostBreeds={mostBreeds}
              allBreeds={allBreeds}
            />
          </Route>
          <Route path="/top">
            <Top />
          </Route>
          <Route path="/benefits">
            <Benefits />
          </Route>
          <Route path="/breed/:id">
            <CatDetails />
          </Route>
          <Route path="/:something" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
