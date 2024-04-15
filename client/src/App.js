import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import Header from './components/Header';
import ProfilePage from './pages/ProfilePage';
import RegistrationPage from './pages/RegistrationPage';
import { useState } from 'react';

function App() {
  const testUser = {
    id: 1,
    firstName: 'Test',
    lastName: 'Testovich',
    imgSrc: 'http',
    email: 'email@gmail.com',
    password: 'password',
    isMale: true,
  };
  const [user, setUser] = useState(testUser);

  return (
    <Switch>
      <Route exact path='/' component={Header} />
      <Route path='/profile' render={() => <ProfilePage userData={[user, setUser]} />} />
      <Route path='/reg' render={() => <RegistrationPage userData={[user, setUser]} />} />
    </Switch>
  );
}

export default App;
