import { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom'
import Hero from './components/Hero'
import PortfolioGrid from './components/PortfolioGrid'
import About from './components/About'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails'

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const Navigation = ({ activeTab, setActiveTab }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (e, targetId) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(targetId);
      }
    } else {
      setActiveTab(targetId);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-6xl z-50 px-10 py-4 glass fade-in">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-accent tracking-tighter hover:scale-105 transition-transform" onClick={() => setActiveTab('home')}>JD.</Link>
        <ul className="flex items-center gap-10">
          {['work', 'about', 'contact'].map((item) => (
            <li key={item} className="relative group">
              <Link 
                to={`/#${item}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-[13px] font-medium uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 block ${activeTab === item ? 'text-accent' : 'text-muted hover:text-white'}`}
              >
                {item}
              </Link>
              <div className={`absolute -bottom-2 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ${activeTab === item ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Home = ({ setActiveTab }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveTab(id);
        }, 100);
      }
    }
  }, [hash, setActiveTab]);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          if (entry.target.id) setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [setActiveTab]);

  return (
    <>
      <div data-animate id="home" className="fade-in"><Hero /></div>
      <div data-animate id="work"><PortfolioGrid /></div>
      <div data-animate id="about"><About /></div>
      <div data-animate id="contact"><Contact /></div>
    </>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Router>
      <ScrollToTop />
      <div className="app selection:bg-accent/30 overflow-x-hidden">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main>
          <Routes>
            <Route path="/" element={<Home activeTab={activeTab} setActiveTab={setActiveTab} />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <footer className="py-24 bg-black border-t border-white/10">
          <div className="container mx-auto px-12 text-center">
            <p className="text-muted text-sm">&copy; 2026 Jane Doe. UI/UX Designer.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
