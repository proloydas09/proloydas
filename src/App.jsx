import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import PortfolioGrid from './components/PortfolioGrid'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Update active tab based on scroll
          if (entry.target.id) setActiveTab(entry.target.id);
          else if (entry.target.closest('section')?.id) setActiveTab(entry.target.closest('section').id);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app selection:bg-accent/30 overflow-x-hidden">
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-6xl z-50 px-10 py-4 glass fade-in"
      >
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-accent tracking-tighter hover:scale-105 transition-transform" onClick={() => setActiveTab('home')}>JD.</a>
          <ul className="flex items-center gap-10">
            {['work', 'about', 'contact'].map((item) => (
              <li key={item} className="relative group">
                <a 
                  href={`#${item}`} 
                  onClick={() => setActiveTab(item)}
                  className={`text-[13px] font-medium uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 block ${activeTab === item ? 'text-accent' : 'text-muted hover:text-white'}`}
                >
                  {item}
                </a>
                <div className={`absolute -bottom-2 left-0 h-[2px] bg-accent rounded-full transition-all duration-300 ${activeTab === item ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <div data-animate id="home" className="fade-in"><Hero /></div>
        <div data-animate id="work"><PortfolioGrid /></div>
        <div data-animate id="about"><About /></div>
        <div data-animate id="contact"><Contact /></div>
      </main>
      <footer className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-12 text-center">
          <p className="text-muted text-sm">&copy; 2026 Jane Doe. UI/UX Designer.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
