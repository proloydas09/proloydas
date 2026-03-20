import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdawjola", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setShowModal(true);
        form.reset();
      } else {
        setStatus('error');
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus('error');
      alert("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <section id="contact" className="section-padding container mx-auto px-12 flex justify-center relative">
      <div className="w-full max-w-4xl glass p-16 lg:p-24 text-center">
        <h2 className="text-6xl mb-6">Let's <span className="text-accent">Collaborate</span></h2>
        <p className="text-lg text-muted mb-16">Have a project in mind? Let's turn your vision into reality.</p>
        
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent transition-all"
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent transition-all"
              required 
            />
          </div>
          <textarea 
            name="message"
            placeholder="Message" 
            rows="5" 
            className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-accent transition-all"
            required
          ></textarea>
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className={`btn btn-primary self-center mt-4 ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        
        <div className="mt-20">
          <p className="text-xl font-medium mb-6">proloydas09@gmail.com</p>
          <div className="flex justify-center gap-10 text-muted text-sm uppercase tracking-widest">
            {['LinkedIn', 'Dribbble', 'Instagram'].map(social => (
              <a key={social} href="#" className="hover:text-accent transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="glass max-w-lg w-full p-12 text-center relative animate-slide-up">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-muted hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-4xl mb-4 font-serif">Message Sent!</h3>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              Thank you for reaching out. I've received your inquiry and will get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="btn btn-primary w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
