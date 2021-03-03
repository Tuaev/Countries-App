import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeView from './views/HomeView';
import CountryView from './views/CountryView';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/:countryAlpha">
          <CountryView />
        </Route>
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />

        <Route path="*">'ERROR'</Route>
      </Switch>
    </Router>
  );
}

export default App;
