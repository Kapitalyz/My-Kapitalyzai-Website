import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Us</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Technology should serve the business, not the other way around.
          </p>
        </div>

        {/* Story */}
        <section className="mb-20 space-y-6 text-slate-700 leading-7">
          <p>
            We started <span className="font-bold text-slate-900">kapitalyz.ai</span> because we saw a gap. Large enterprises were adopting AI rapidly, while small & medisum sized businesses were getting left behind due to complexity and cost.
          </p>
          <p>
            We believe AI isn't magic—it's engineering. It requires structure, clean data, and clear goals. Our mission is to democratize access to these powerful tools, helping smaller teams punch above their weight class.
          </p>
        </section>

        {/* Principles */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-slate-100">Our Principles</h2>
          <ul className="grid md:grid-cols-2 gap-8">
            <li className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-salmon flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Pragmatism Over Hype</h3>
                <p className="text-slate-600 text-sm">We only build what drives value. If a spreadsheet works better, we’ll tell you.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-salmon flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Transparency</h3>
                <p className="text-slate-600 text-sm">No black boxes. You own your data, your models, and your strategy.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-salmon flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Speed to Value</h3>
                <p className="text-slate-600 text-sm">We prototype fast. You see results in weeks, not months.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-salmon flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Security Standard</h3>
                <p className="text-slate-600 text-sm">Enterprise-grade data protection is our baseline, regardless of client size.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Who We Help */}
        <section className="mb-20 bg-slate-50 p-8 rounded-lg border border-slate-100">
          <h2 className="text-2xl font-bold mb-6">Who We Help</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-salmon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-slate-700">Small and mid-sized teams ready to modernize operations with AI</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-salmon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-slate-700">Businesses looking to improve speed, quality, and throughput without adding headcount</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-salmon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-slate-700">Organizations that want AI solutions built around the tools they already use without hiring a full technical team</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-100">
          <h3 className="text-2xl font-bold mb-6">Ready to modernize your operations?</h3>
          <Button to="/book" variant="primary">Book a Consultation</Button>
        </div>

      </div>
    </Layout>
  );
};

export default About;