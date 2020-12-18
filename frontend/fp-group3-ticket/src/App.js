import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TicketPage from './Components/TicketPage/TicketPage';
import Solutions from './Components/Solutions/Solutions';
import UpperNavBar from './Components/UpperNavBar';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage/>
          </Route>
          <Route path="/tickets" exact>
            <UpperNavBar/>
            <TicketPage/>
          </Route>
          <Route path="/solutions" exact>
            <UpperNavBar/>
            <Solutions/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
