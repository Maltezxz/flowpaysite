import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube, Smartphone, Building, CreditCard, Shield, HelpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="text-white text-2xl font-bold">FlowPay</span>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md">
                A plataforma completa que combina gateway de pagamentos e banco digital. 
                Tecnologia financeira de ponta para pessoas e empresas.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">contato@flowpay.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">(21) 99999-0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Rio de Janeiro, Brasil</span>
                </div>
              </div>
            </div>

            {/* Produtos */}
            <div>
              <h4 className="text-white font-semibold mb-4">Produtos</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('banco')}
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors w-full text-left"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Conta Digital</span>
                </button>
                <button 
                  onClick={() => scrollToSection('gateway')}
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors w-full text-left"
                >
                  <Building className="w-4 h-4" />
                  <span>Gateway</span>
                </button>
                <div className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  <CreditCard className="w-4 h-4" />
                  <span>Cartões</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  <span className="w-4 h-4 text-center">₿</span>
                  <span>Crypto</span>
                </div>
              </div>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <div className="space-y-3">
                <div className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  Sobre nós
                </div>
                <div className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  Carreiras
                </div>
                <div className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  Imprensa
                </div>
                <div className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  Blog
                </div>
              </div>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors w-full text-left"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>FAQ</span>
                </button>
                <button 
                  onClick={() => scrollToSection('seguranca')}
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors w-full text-left"
                >
                  <Shield className="w-4 h-4" />
                  <span>Segurança</span>
                </button>
                <div className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  Central de Ajuda
                </div>
                <div className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  Status dos Serviços
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social and Legal */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Siga-nos:</span>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-gray-800 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <Youtube className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <div className="hover:text-purple-400 transition-colors cursor-pointer">
                Termos de Uso
              </div>
              <div className="hover:text-purple-400 transition-colors cursor-pointer">
                Política de Privacidade
              </div>
              <div className="hover:text-purple-400 transition-colors cursor-pointer">
                Política de Cookies
              </div>
              <div className="hover:text-purple-400 transition-colors cursor-pointer">
                Ouvidoria
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm text-gray-400">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <div>© 2025 FlowPay. Todos os direitos reservados.</div>
              <div className="flex items-center space-x-4">
                <span>CNPJ: 12.345.678/0001-90</span>
                <span>|</span>
                <span>Autorizado pelo Banco Central</span>
              </div>
            </div>
            
            <div className="text-xs text-center lg:text-right max-w-md">
              <p className="mb-1">
                FlowPay Instituição de Pagamento S.A.  • Rio de Janeiro/RJ
              </p>
              <p>
                Recursos garantidos pelo FGC até R$ 250.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;