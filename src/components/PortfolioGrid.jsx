const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Luxe Watches",
      category: "E-Commerce / E-Branding",
      image: "./luxe_watch.png",
    },
    {
      id: 2,
      title: "Zenith Banking",
      category: "Fintech / App Design",
      image: "./zenith_banking.png",
    },
    {
      id: 3,
      title: "Aether Real Estate",
      category: "Proptech / Web Experience",
      image: "./aether_estate.png",
    },
    {
      id: 4,
      title: "Organic Harvest",
      category: "Sustainability / UX Research",
      image: "./organic_harvest.png",
    }
  ];

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
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="btn btn-outline pointer-events-none">View Project</span>
              </div>
            </div>
            <div className="p-10">
              <span className="text-xs text-muted uppercase tracking-widest block mb-2">{project.category}</span>
              <h3 className="text-2xl font-serif">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
