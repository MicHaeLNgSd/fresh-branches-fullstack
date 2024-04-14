import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Header from './components/Header';
import ProfilePage from './pages/ProfilePage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Header} />
      <Route path='/profile' component={ProfilePage} />
      <Route path='/reg' component={RegistrationPage} />
    </Switch>
  );
}

export default App;
