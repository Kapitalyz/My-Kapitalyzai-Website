import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY_NAME, EMAIL_CONTACT } from '../constants';
import Button from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-salmon selection:text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-etna font-bold text-lg rounded-sm group-hover:bg-salmon transition-colors">
              K
            </div>
            <span className="font-bold text-xl tracking-tight">{COMPANY_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-salmon' 
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button to="/book" variant="primary" className="py-2.5 px-5 text-sm">
              Book a Consultation
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 shadow-lg flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-salmon' : 'text-slate-900'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button to="/book" variant="primary" className="w-full justify-center mt-2" onClick={closeMenu}>
              Book a Consultation
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center font-etna font-bold text-xs rounded-sm">K</div>
                <span className="font-bold text-lg">{COMPANY_NAME}</span>
              </div>
              <p className="text-slate-500 text-sm max-w-md">
                Bespoke AI Solutions, Crafted for the Way You Work.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400">Contact</h4>
              <a href={`mailto:${EMAIL_CONTACT}`} className="text-slate-900 hover:text-salmon transition-colors">
                {EMAIL_CONTACT}
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <div className="flex gap-6">
               <span className="cursor-pointer hover:text-slate-600">Privacy Policy</span>
               <span className="cursor-pointer hover:text-slate-600">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;