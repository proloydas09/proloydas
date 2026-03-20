const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between pt-[20vh] container mx-auto px-12">
      <div className="max-w-3xl">
        <h1 className="text-6xl lg:text-8xl mb-10 leading-none">
          Crafting <span className="text-accent italic">Digital</span> Experiences with Elegance.
        </h1>
        <p className="text-xl text-muted mb-12 max-w-xl leading-relaxed">
          Jane Doe — Senior UI/UX Designer specialized in creating premium, user-centric interfaces for global brands.
        </p>
        <div className="flex gap-6">
          <a href="#work" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Let's Talk</a>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 justify-end items-center relative">
        <div className="w-[500px] h-[500px] bg-accent/15 blur-[40px] animate-morph"></div>
      </div>
    </section>
  );
};

export default Hero;
