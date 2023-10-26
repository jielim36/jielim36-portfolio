import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import Resume from './Component/Resume/Resume';
import Sidebar from './Component/Sidebar/Sidebar';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;
