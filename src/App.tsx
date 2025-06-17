import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, User, Briefcase, MessageCircle, ChevronDown, Star, Award, Users, Coffee } from 'lucide-react';
import { motion } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Moving grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
            }}
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { name: 'Home', id: 'home', icon: User },
                  { name: 'About', id: 'about', icon: User },
                  { name: 'Projects', id: 'projects', icon: Briefcase },
                  { name: 'Contact', id: 'contact', icon: MessageCircle }
                ].map(({ name, id, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group flex items-center space-x-2"
                  >
                    <Icon size={16} />
                    <span>{name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Home', id: 'home', icon: User },
                { name: 'About', id: 'about', icon: User },
                { name: 'Projects', id: 'projects', icon: Briefcase },
                { name: 'Contact', id: 'contact', icon: MessageCircle }
              ].map(({ name, id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="w-full text-left flex items-center space-x-3 px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  <Icon size={18} />
                  <span>{name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm text-gray-300">Available for itern</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white leading-tight">
                  Hello, I'm{' '}

                </h2>

                <span className="text-4xl sm:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Anjes Vernanda
                </span>

                <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed">
                  Web Developer & UI/UX Designer
                </p>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                {/* I create beautiful, functional, and user-centered digital experiences.
                With expertise in modern web technologies and a passion for clean design,
                I bring ideas to life through code. */}
                A sixth-semester Informatics student at Atma Jaya University Yogyakarta with a strong interest in Web Development, Mobile Application Development, and Graphic Design.
                Skilled in using tools such as Visual Studio Code, Microsoft Office, Canva, CapCut, and VN. Experienced in creating graphic designs for posters and Instagram content, with a keen eye for visual communication and user-oriented design
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  View My Work
                  <ExternalLink className="ml-2" size={20} />
                </button>

                <a
                  href='/I Putu Anjes Vernanda CV FIX.pdf'
                  download
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-400 hover:bg-gray-800/50 transform hover:scale-105 transition-all duration-300">
                  Download CV
                </a>

              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 pt-4">
                <a
                  href="https://github.com/Lilscube"
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anjesvernanda9"
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                {/* <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a> */}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 20px 50px rgba(0,0,0,0.4)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl px-8 py-8 border border-gray-700/50">
                <div className="space-y-6">

                  <img
                    src="/images2.JPG"
                    alt="My Profile"
                    className=" h-[350px] rounded-xl mx-auto"
                  />
                </div>
              </motion.div>
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-teal-300/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-300/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section >

      {/* Stats Section */}
      < section className="py-16 bg-gray-800/30 backdrop-blur-sm relative z-10" >
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { number: '15+', label: 'Projects Completed', icon: Briefcase },
              { number: '2+', label: 'Years Experience', icon: Award },
            ].map(({ number, label, icon: Icon }, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {number}
                </div>
                <div className="text-gray-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* About Section */}
      < section id="about" className="py-20 relative z-10" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer with a keen eye for design and a love for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I create beautiful, functional, and user-centered digital experiences.
                With expertise in modern web technologies and a passion for clean design,
                I bring ideas to life through code. I focus on building responsive interfaces that work seamlessly across devices and platforms.
                Every line of code I write is driven by usability, performance, and a commitment to delivering meaningful impact.
              </p>
              {/* <p className="text-lg text-gray-300 leading-relaxed">
              
              </p> */}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
              <div className="space-y-4">
                {[
                  { name: 'React & TypeScript', level: 80 },
                  { name: 'Node.js & Laravel', level: 80 },
                  { name: 'UI/UX Design', level: 85 },
                  { name: 'Database Design', level: 75 }
                ].map(({ name, level }, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{name}</span>
                      <span className="text-blue-400">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Projects Section */}
      < section id="projects" className="py-20 bg-gray-800/30 backdrop-blur-sm relative z-10" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and creative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-teal-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">Project {project}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">
                    A modern web application built with React and TypeScript, featuring responsive design and smooth animations.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-teal-600/20 text-teal-400 rounded-full text-sm">TypeScript</span>
                    </div>
                    <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="py-20 relative z-10" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">anjesvernanda9@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub</h3>
                  <p className="text-gray-400">https://github.com/Lilscube</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl flex items-center justify-center">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <p className="text-gray-400">www.linkedin.com/in/anjesvernanda9</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <form
                action="https://formspree.io/f/xovwwpbq"
                method="POST"
                className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name='name'
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name='email'
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                  name='message'
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="py-8 border-t border-gray-800/50 relative z-10" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Anjes Vernanda. All rights reserved.</p>
          </div>
        </div>
      </footer >
    </div >
  );
}

export default App;