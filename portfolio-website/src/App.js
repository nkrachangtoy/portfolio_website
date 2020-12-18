import './styles/main.css'

import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Header />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
