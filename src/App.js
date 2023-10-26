import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import Resume from './Component/Resume/Resume';
import Sidebar from './Component/Sidebar/Sidebar';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Skills from './Component/Skills/Skills';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        {/* <Blog />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
