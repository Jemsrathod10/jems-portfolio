import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Database, Layout, Smartphone, FileText } from 'lucide-react';

// --- Data for your Portfolio ---
const projects = [
  {
    id: 1,
    title: "Harivan - Live Plant Nursery",
    category: "PHP / MySQL / Web Hosting",
    description: "A fully functional e-commerce platform for plant enthusiasts. Features a dynamic product catalog, database-driven inventory, and a clean user interface. Hosted on a live server.",
    image: "p17.jpg", 
    liveLink: "https://harivan.kesug.com/",
    githubLink: "https://github.com/Jemsrathod10/harivan.github.io"
  },
  {
    id: 2,
    title: "GreeneryWorld - Full Stack Project",
    category: "Backend Development / Render / Netlify",
    description: "A sophisticated plant selling application focusing on backend architecture. Integrated with Render for server-side logic and Netlify for frontend deployment. (Work in Progress)",
    image: "p10.jpg",
    liveLink: "https://greeneryworld.netlify.app/",
    githubLink: "https://github.com/Jemsrathod10/plant-selling-backend"
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-dark selection:bg-secondary selection:text-black overflow-hidden">
      
      {/* --- Background Glow Effects --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>

      {/* --- Navbar --- */}
      <nav className="fixed w-full z-50 top-0 px-6 py-4 flex justify-center">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 px-8 py-3 rounded-full flex gap-8 shadow-lg shadow-primary/10">
          {['Home', 'About', 'Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-20 max-w-7xl mx-auto">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 z-10"
        >
          <h2 className="text-xl md:text-2xl text-secondary font-light tracking-wide">Hi, I'm Jems Rathod</h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Full-Stack <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Developer.</span>
          </h1>
          <p className="text-gray-400 font-body max-w-md leading-relaxed">
            I craft immersive web experiences with modern technologies. 
            Turning complex problems into beautiful, simple interfaces.
          </p>
       <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
  {/* Hire Me / Contact Scroll Link */}
  <a 
    href="#contact" 
    className="px-8 py-3 bg-gradient-to-r from-primary to-purple-800 rounded-full font-bold shadow-lg shadow-primary/40 hover:scale-105 transition-transform"
  >
    Hire Me
  </a>

  {/* Resume Download Link */}
  <a 
    href="/Jems_Rathod_Resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-8 py-3 border border-secondary text-secondary rounded-full font-bold hover:bg-secondary/10 transition-all flex items-center gap-2"
  >
    <FileText size={18} /> Download CV
  </a>
</div>
<div className="flex flex-wrap gap-4 mt-8 items-center justify-center md:justify-start">
  {/* Quick Social Links */}
  <div className="flex gap-4 ml-2">
    <a href="https://github.com/Jemsrathod10" target="_blank" className="text-gray-400 hover:text-secondary transition-colors">
      <Github size={24} />
    </a>
    <a href="linkedin.com/in/jems-rathod-659032393" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
      <Linkedin size={24} />
    </a>
  </div>
</div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative"
        >
          {/* Circular Image Frame */}
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-primary via-white to-secondary">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark bg-gray-800">
             
              <img src="profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </section>
{/* --- About / Skills Section --- */}
      <section id="about" className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-gray-300 font-body max-w-3xl mx-auto leading-relaxed text-lg">
              I am a <span className="text-secondary font-bold">Hybrid Developer</span>. 
              I don't just write code; I design the experience. My background in Graphic Design helps me build 
              interfaces that look as good as they function. I am comfortable working with backend logic (Java, PHP) 
              and frontend magic (React, CSS).
            </p>
          </motion.div>

          {/* --- Skills Grid --- */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Column 1: Technical Skills (Code) */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-secondary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-secondary w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Development</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", 
                  "Tailwind", "Java", "PHP", "ASP.NET", "MySQL","Python",
                  "Node.js","Github","MongoDB", "Linux"
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-bold shadow-[0_0_10px_rgba(12,255,255,0.2)] hover:bg-secondary hover:text-black transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Creative Skills (Design) */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Layout className="text-primary w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Creative & Design</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Photoshop", "Premiere Pro", "Canva", "UI/UX Design","Lightroom", 
                  "Graphic Designing", "Content Creation", "Video Editing"
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold shadow-[0_0_10px_rgba(220,0,211,0.2)] hover:bg-primary hover:text-white transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- Recent Work Section --- */}
<section id="work" className="py-20 px-6 bg-dark">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-20 text-center">My <span className="text-secondary">Projects</span></h2>
    
    <div className="space-y-32">
      {projects.map((project, index) => (
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
        >
          {/* Project Text */}
          <div className="md:w-1/2 space-y-4">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase">{project.category}</span>
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <div className="p-6 bg-card border border-white/5 rounded-2xl shadow-xl backdrop-blur-sm">
              <p className="text-gray-300 font-body leading-relaxed">{project.description}</p>
            </div>
            
            {/* Real Links */}
            <div className="flex gap-6 pt-4">
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Github size={20} /> <span className="text-sm font-bold">Code</span>
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <ExternalLink size={20} /> <span className="text-sm font-bold">Live Demo</span>
              </a>
            </div>
          </div>

          {/* Project Image */}
          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-primary rounded-xl rotate-2 opacity-10 group-hover:rotate-4 transition-transform"></div>
            <img src={project.image} alt={project.title} className="relative rounded-xl shadow-2xl w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  <div className="mt-12 p-6 border border-white/10 rounded-xl bg-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
  <div>
    <h4 className="text-xl font-bold mb-2 italic">Need my full technical background?</h4>
    <p className="text-gray-400 text-sm">Download my 2025 Resume for a detailed look at my BCA projects and certifications.</p>
  </div>
  <a 
    href="/Jems_Rathod_Resume.pdf" 
    className="bg-secondary text-black px-6 py-2 rounded font-bold hover:bg-white transition-colors"
  >
    VIEW RESUME
  </a>
</div>
</section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-card to-dark border border-white/10 p-10 rounded-3xl md:flex gap-12">
          
          <div className="md:w-1/3 space-y-8">
            <h2 className="text-3xl font-bold">Drop me a <span className="text-primary">Message</span></h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-white/5 rounded-lg"><Mail size={18} className="text-secondary"/></div>
                <span>jemsrathod08@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-white/5 rounded-lg"><MapPin size={18} className="text-primary"/></div>
                <span>Surat,Gujarat, India</span>
              </div>
            </div>
          </div>

         <form 
  action="https://formspree.io/f/YOUR_ID_HERE" 
  method="POST" 
  className="md:w-2/3 space-y-4 mt-8 md:mt-0"
>
  <div className="grid grid-cols-2 gap-4">
    <input type="text" name="name" placeholder="Name" required className="bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary w-full" />
    <input type="email" name="email" placeholder="Email" required className="bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary w-full" />
  </div>
  <textarea name="message" rows="4" placeholder="Message" required className="bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-primary w-full"></textarea>
  <button type="submit" className="w-full py-3 bg-secondary text-black font-bold rounded-lg hover:bg-white transition-colors">
    Send Message
  </button>
</form>

        </div>
        
        <footer className="text-center text-gray-500 text-sm mt-20">
          © 2025 Jems Rathod. Created with React & Tailwind.
        </footer>
      </section>



    </div>
  );
};

export default App;
