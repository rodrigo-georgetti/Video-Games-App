import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Landing, Home, Detail, Form} from './views'
import {Route, Switch, useLocation} from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      
<Switch>
      <Route exact path="/" > 
        <Landing></Landing>
      </Route>
      <Route path="/home" > 
        <Home></Home>
      </Route>
      <Route path="/detail/:id" > 
        <Detail></Detail>
      </Route>
      <Route path="/create" > 
        <Form></Form>
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
