import { useEffect, useState } from 'react';
import { getAllBreeds, getCatDetails } from './apis/getCatDetails';
import './App.scss';
import Home from './page/Home';
import Header from './sharedComponents/Header';
import queryString from 'query-string';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import Top from './page/Top';
import Benefits from './page/Benefits';
import CatDetails from './page/CatDetails';
import Footer from './sharedComponents/Footer';

function App() {
  const [mostBreeds, setMostBreeds] = useState([])
  const [allBreeds, setAllBreeds] = useState([])
  const [filters, setFilters] = useState({
    limit: 4,
    page: 0
  })

  console.log('current limit', filters.limit);

  useEffect(() => {
    const queryParams = queryString.stringify(filters, {
      skipNull: true
    })
    getCatDetails(queryParams)
      .then((res) => {
        console.log(res.data);
        setMostBreeds(res.data);
      })
  }, [filters])

  //Get all breeds to fill search box
  useEffect(() => {
    getAllBreeds()
      .then((res) => {
        setAllBreeds(res.data);
      })
  }, [])

  const handleBackToHome = () => {
    setFilters({
      ...filters,
      limit: 4
    })
  }

  return (
    <div className="app">
      <Router>
        <Header
          onBackToHome={handleBackToHome}
        />
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
          <Route path="/:id">
            <CatDetails />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
