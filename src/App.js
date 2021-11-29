import './App.css';
import { Fragment, useContext } from 'react';
import MainHeader from './components/Header/MainHeader';
import Login from './components/Login/Login';
import AuthContext from './store/auth-context';
import Home from './components/Home/Home';



function App() {

  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <MainHeader/>
      {!ctx.isLoggedIn && <Login/>}
      {ctx.isLoggedIn && <Home />}
    </Fragment>
  );
}

export default App;
