import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard, Building, Shield, HelpCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-white text-2xl font-bold">FlowPay</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('gateway')}
              className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
            >
              <Building className="w-4 h-4" />
              <span>Gateway</span>
            </button>
            <button 
              onClick={() => scrollToSection('banco')}
              className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
            >
              <CreditCard className="w-4 h-4" />
              <span>Banco Digital</span>
            </button>
            <button 
              onClick={() => scrollToSection('seguranca')}
              className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
            >
              <Shield className="w-4 h-4" />
              <span>Segurança</span>
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              Entrar
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Abrir Conta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('gateway')}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 w-full text-left"
              >
                <Building className="w-4 h-4" />
                <span>Gateway</span>
              </button>
              <button 
                onClick={() => scrollToSection('banco')}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 w-full text-left"
              >
                <CreditCard className="w-4 h-4" />
                <span>Banco Digital</span>
              </button>
              <button 
                onClick={() => scrollToSection('seguranca')}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 w-full text-left"
              >
                <Shield className="w-4 h-4" />
                <span>Segurança</span>
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 w-full text-left"
              >
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </button>
              <div className="pt-4 border-t border-purple-500/20 space-y-3">
                <button className="text-purple-400 hover:text-purple-300 w-full text-left">
                  Entrar
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold w-full">
                  Abrir Conta
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;