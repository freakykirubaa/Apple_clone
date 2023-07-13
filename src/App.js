
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Grid from './components/Grid';
import Home from './components/Home';
import NavBar from './components/Navbar';
import 'aos/dist/aos.css';
function App() {
  return (
  <>
 <NavBar/>
 <Home/><br/><br/>
 <About/>
 <Grid/>
 <br/>
 <hr/>
 <Footer/>
  </> 
  );
}

export default App;
