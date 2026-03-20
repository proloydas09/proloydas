import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useEffect } from 'react';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center glass m-10 p-20">
        <h2 className="text-4xl mb-6">Project Not Found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 fade-in">
      <div className="container mx-auto px-6 md:px-12">
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-12 group">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span className="uppercase tracking-[0.2em] text-xs font-semibold">Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="glass overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="lg:pt-10">
            <span className="text-accent text-sm uppercase tracking-[0.3em] font-bold block mb-4">{project.category}</span>
            <h1 className="text-7xl md:text-8xl mb-10 leading-none">{project.title}</h1>
            <div className="flex flex-wrap gap-3 mb-12">
              {project.tech.map((item) => (
                <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-muted uppercase tracking-wider">{item}</span>
              ))}
            </div>
            <p className="text-2xl text-muted leading-relaxed font-light italic">
              "{project.description}"
            </p>
          </div>
        </div>

        {/* Content Tabs/Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 mb-20">
          <div className="glass p-10 rounded-[2rem]">
            <h3 className="text-2xl mb-6 text-accent font-serif italic">The Challenge</h3>
            <p className="text-muted leading-relaxed text-lg">{project.challenges}</p>
          </div>
          <div className="glass p-10 rounded-[2rem]">
            <h3 className="text-2xl mb-6 text-accent font-serif italic">The Solution</h3>
            <p className="text-muted leading-relaxed text-lg">{project.solution}</p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center py-12 border-t border-white/10">
          <Link to={project.id > 1 ? `/project/${project.id - 1}` : `/project/${projects.length}`} className="group py-4">
            <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">Previous</span>
            <span className="text-xl group-hover:text-accent transition-colors">Project</span>
          </Link>
          <Link to={project.id < projects.length ? `/project/${project.id + 1}` : `/project/1`} className="group text-right py-4">
            <span className="text-[10px] uppercase tracking-widest text-muted block mb-1">Next</span>
            <span className="text-xl group-hover:text-accent transition-colors">Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
