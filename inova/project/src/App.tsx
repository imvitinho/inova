import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Features from './components/Features';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/20 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Problems />
        <Features />
        <Plans />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;