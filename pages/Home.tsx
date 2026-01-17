import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Stop Guessing. <br />
            <span className="text-salmon">Start Automating.</span>
          </h1>
          <p className="text-xl text-slate-600 font-bold mb-1 leading-relaxed max-w-2xl">
            Bespoke AI Solutions, Crafted for the Way You Work. 
          </p>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            We turn AI’s complexity into measurable business value. <br />No hype, just outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/book">Book a Consultation</Button>
            <Button onClick={() => scrollToSection('what-we-do')} variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="border-y border-slate-100 bg-slate-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4 text-sm font-medium text-slate-500 uppercase tracking-wide">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-salmon"></span> Data Security First
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-salmon"></span> ROI Focused
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-salmon"></span> Bespoke Strategy
            </span>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <div className="h-1 w-20 bg-salmon"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="p-8 border border-slate-100 rounded-lg hover:border-salmon/50 transition-colors bg-white shadow-sm hover:shadow-md">
            <h3 className="text-xl font-bold mb-3">AI Accelerator Blueprint</h3>
            <p className="text-slate-600 leading-relaxed">
              Clarify the best opportunities with an executive-ready AI roadmap.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="p-8 border border-slate-100 rounded-lg hover:border-salmon/50 transition-colors bg-white shadow-sm hover:shadow-md">
            <h3 className="text-xl font-bold mb-3">Workflow Academies</h3>
            <p className="text-slate-600 leading-relaxed">
              Enable your teams with role-based, hands-on workflow training.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="p-8 border border-slate-100 rounded-lg hover:border-salmon/50 transition-colors bg-white shadow-sm hover:shadow-md">
            <h3 className="text-xl font-bold mb-3">Turnkey Automation Packages</h3>
            <p className="text-slate-600 leading-relaxed">
              Deploy proven automations for high-friction processes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 border border-slate-100 rounded-lg hover:border-salmon/50 transition-colors bg-white shadow-sm hover:shadow-md">
            <h3 className="text-xl font-bold mb-3">Fractional AI Officer</h3>
            <p className="text-slate-600 leading-relaxed">
              Maintain momentum with ongoing strategy, governance, and system upkeep.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="h-1 w-20 bg-salmon"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-salmon text-5xl font-bold mb-4 opacity-50">01</div>
              <h3 className="text-xl font-bold mb-2">Align & Prioritize</h3>
              <p className="text-slate-400">
                We quickly understand how work happens today, identify where AI will drive the most value, and set clear priorities tied to business outcomes.
              </p>
            </div>
            <div>
              <div className="text-salmon text-5xl font-bold mb-4 opacity-50">02</div>
              <h3 className="text-xl font-bold mb-2">Build & Launch</h3>
              <p className="text-slate-400">
                We implement one high-impact workflow or automation, designed around your existing tools, then roll it into production with the right safeguards
              </p>
            </div>
            <div>
              <div className="text-salmon text-5xl font-bold mb-4 opacity-50">03</div>
              <h3 className="text-xl font-bold mb-2">Adopt & Scale</h3>
              <p className="text-slate-400">
                We equip your team with repeatable workflows and standards, measure results, and expand what works across more processes and departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">We are builders, not just advisors.</h2>
          <p className="text-slate-600 mb-6 text-lg">
            Our team combines decades of enterprise transformation experience with cutting-edge AI expertise. We don't sell hype; we deliver results.
          </p>
          <Link to="/about" className="text-salmon font-semibold hover:text-salmonHover underline underline-offset-4 decoration-2">
            Read our story &rarr;
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;