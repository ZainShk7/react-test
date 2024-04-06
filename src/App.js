/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import NotFoundPage from 'pages/NotFoundPage';
import 'assets/css/styles.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/jobs" component={NotFoundPage} />
      <Route exact path="/profile" component={NotFoundPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
