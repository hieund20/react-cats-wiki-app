import { useEffect, useRef, useState } from 'react';
import { getCatDetails } from './apis/getCatDetails';
import './App.scss';
import Home from './page/Home';
import Header from './sharedComponents/Header';
import queryString from 'query-string';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import Top from './page/Top';

function App() {
  const [mostBreeds, setMostBreeds] = useState([])
  const [filters, setFilters] = useState({
    limit: 4,
    page: 0
  })
  const prevLimit = useRef(filters.limit);

  console.log('current limit', filters.limit);
  console.log('prev limit', prevLimit.current);


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

  const handleSeeMore = () => {
    setFilters({
      ...filters,
      limit: 10
    })
  }

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
              onSeeMore={handleSeeMore}
            />
          </Route>
          <Route path="/top">
            <Top
              mostBreeds={mostBreeds}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
