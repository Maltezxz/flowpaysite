import React from 'react';
import { ArrowRight, Zap, Globe, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Tecnologia Financeira do Futuro</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              A nova forma de{' '}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                pagar e investir
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              FlowPay combina gateway de pagamentos avançado com banco digital completo. 
              Pagamentos instantâneos, cartões crypto e conta internacional em uma única plataforma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Abra sua conta agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:border-purple-400">
                Integrar Gateway
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50K+</div>
                <div className="text-sm text-gray-400">Empresas confiam</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">R$ 2B+</div>
                <div className="text-sm text-gray-400">Volume processado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Uptime garantido</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Phone Mockup */}
              <div className="mx-auto w-80 h-96 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl border border-gray-700">
                <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white font-semibold">FlowPay</div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl p-4 text-white">
                        <div className="text-sm opacity-80">Saldo disponível</div>
                        <div className="text-2xl font-bold">R$ 12.547,89</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-800 rounded-xl p-3 text-center">
                          <div className="text-purple-400 text-xs mb-1">PIX</div>
                          <div className="text-white text-sm">Instantâneo</div>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-3 text-center">
                          <div className="text-purple-400 text-xs mb-1">Crypto</div>
                          <div className="text-white text-sm">USDT</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">↓</span>
                            </div>
                            <div>
                              <div className="text-white text-sm">Recebimento PIX</div>
                              <div className="text-gray-400 text-xs">Hoje, 14:32</div>
                            </div>
                          </div>
                          <div className="text-green-400 font-semibold">+R$ 850,00</div>
                        </div>
                        
                        <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">₿</span>
                            </div>
                            <div>
                              <div className="text-white text-sm">Compra Bitcoin</div>
                              <div className="text-gray-400 text-xs">Ontem, 10:15</div>
                            </div>
                          </div>
                          <div className="text-purple-400 font-semibold">-R$ 500,00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-10 -left-10 animate-bounce delay-300">
              <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            
            <div className="absolute bottom-10 -right-10 animate-bounce delay-700">
              <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;