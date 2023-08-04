import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Landing, Home, Detail, Form} from './views'
import {Route, Routes, useLocation} from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      
<Routes>
      <Route exact path="/" element={<Landing />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/detail/:id" element={<Detail />}/>
      <Route path="/create" element={<Form />}/>
      </Routes>
      
    </div>
  );
}

export default App;
