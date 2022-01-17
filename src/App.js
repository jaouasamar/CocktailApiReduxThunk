import logo from './logo.svg';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import "./App.css"
import SingleCocktail from './pages/SingleCocktail';

function App() {
  return (
    <div className="App">
   
     <Header/>
     <Router>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
     </Routes>
     </Router>
     
     
    </div>
  );
}

export default App;
