import './assets/css/App.css';

import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
