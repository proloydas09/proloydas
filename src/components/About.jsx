const About = () => {
  return (
    <section id="about" className="section-padding container mx-auto px-12">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1">
          <h2 className="text-6xl mb-8 text-left">The <span className="text-accent">Philosophy</span></h2>
          <p className="text-xl text-muted leading-relaxed mb-6">
            With over 8 years of experience in the design industry, my approach is rooted in the belief that great design is a balance between form and function. I specialize in crafting digital products that are not only visually stunning but also deeply intuitive.
          </p>
          <p className="text-xl text-muted leading-relaxed mb-10">
            I've had the privilege of working with startups and Fortune 500 companies, helping them translate complex ideas into simple, elegant solutions. My toolkit includes UI/UX design, design systems, rapid prototyping, and user research.
          </p>
          <div className="flex flex-wrap gap-4">
            {['UI/UX Design', 'Visual Design', 'Design Systems', 'Prototyping', 'Motion Design', 'User Research'].map(skill => (
              <span key={skill} className="px-5 py-2 border border-accent text-accent rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-[0.8] flex justify-center">
          <div className="w-full max-w-md aspect-[1/1.2] glass p-4">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop" 
              alt="Jane Doe" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
