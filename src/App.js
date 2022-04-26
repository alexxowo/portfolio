import './assets/css/App.css';

import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
