import logo from './logo.svg'
import './styles/css/App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Greeting from './components/Greeting.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contacts from './components/Contacts.jsx'

function App() {
  return (
    <div className="App">  
      <Navbar/>
      <Greeting/>
      <About/>
      <Portfolio/>
      <Contacts/>
    </div>
  );
}

export default App;
