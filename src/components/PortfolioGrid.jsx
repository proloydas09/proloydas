import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const PortfolioGrid = () => {
  return (
    <section id="work" className="section-padding container mx-auto px-12">
      <h2 className="text-6xl mb-6 text-center">Selected <span className="text-accent">Works</span></h2>
      <p className="text-lg text-muted text-center max-w-2xl mx-auto mb-20">Explorations in digital craft and human-centric design.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="group glass overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-accent hover:shadow-2xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <Link to={`/project/${project.id}`} className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <span className="btn btn-outline">View Project</span>
              </Link>
            </div>
            <div className="p-10 flex justify-between items-end">
              <div>
                <span className="text-xs text-muted uppercase tracking-widest block mb-2">{project.category}</span>
                <h3 className="text-2xl font-serif">{project.title}</h3>
              </div>
              <Link to={`/project/${project.id}`} className="text-accent hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
