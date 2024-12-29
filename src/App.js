import './App.css';
import Main from './components/Main';
import Projects from './components/Projects';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

const App = () => {
  const [section, setSection] = useState(window.location.hash || '#hero');

  useEffect(() => {
    const handleHashChange = () => {
      setSection(window.location.hash || "#hero");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  },[]);

  
  const renderSection = () => {
    switch(section) {
      case "#main":
        return <Main />;

        case "#skills":
          return <Skills />;

          case "#projects":
            return <Projects />;

            case "#contact":
              return <Contact />;

        default:
          return <Main />
    }
  };

  return (
    <div>
      <Header />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  )
}

export default App;
