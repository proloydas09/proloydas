const Contact = () => {
  return (
    <section id="contact" className="section-padding container mx-auto px-12 flex justify-center">
      <div className="w-full max-w-4xl glass p-16 lg:p-24 text-center">
        <h2 className="text-6xl mb-6">Let's <span className="text-accent">Collaborate</span></h2>
        <p className="text-lg text-muted mb-16">Have a project in mind? Let's turn your vision into reality.</p>
        
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent transition-all"
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent transition-all"
              required 
            />
          </div>
          <textarea 
            placeholder="Message" 
            rows="5" 
            className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent transition-all"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary self-center mt-4">Send Message</button>
        </form>
        
        <div className="mt-20">
          <p className="text-xl font-medium mb-6">hello@janedoe.com</p>
          <div className="flex justify-center gap-10 text-muted text-sm uppercase tracking-widest">
            {['LinkedIn', 'Dribbble', 'Instagram'].map(social => (
              <a key={social} href="#" className="hover:text-accent transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
