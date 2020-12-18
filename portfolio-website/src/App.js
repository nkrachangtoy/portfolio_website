import './styles/main.css'

import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Header />
        <Projects />
      </div>
    </div>
  );
}

export default App;
