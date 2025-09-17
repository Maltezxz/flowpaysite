import React from 'react';
import { CreditCard, Smartphone, Globe, Shield, Zap, DollarSign } from 'lucide-react';

const Cartoes = () => {
  const cardBenefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cashback até 5%",
      description: "Ganhe dinheiro de volta em todas as compras"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sem IOF no exterior",
      description: "Use no mundo todo sem taxas abusivas"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Seguro",
      description: "Tecnologia contactless e tokenização"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Compras em Crypto",
      description: "Pague com Bitcoin e USDT direto do cartão"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
            <CreditCard className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300">Cartões Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cartões FlowPay
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent block">
              Físico e Virtual
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cartões premium com tecnologia avançada. Use em cripto, no exterior sem IOF, 
            com cashback em todas as compras e controle total pelo app.
          </p>
        </div>

        {/* Cards Display */}
        <div className="relative mb-16">
          <div className="flex justify-center items-center space-x-8">
            {/* Physical Card */}
            <div className="relative group">
              <div className="w-80 h-48 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 rounded-2xl shadow-2xl transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                <div className="absolute inset-0 bg-black/20 rounded-2xl" />
                <div className="relative p-6 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm opacity-80">FlowPay</div>
                      <div className="text-xl font-bold">Premium</div>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-lg font-mono tracking-wider">
                      **** **** **** 1234
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>MARIA SILVA</span>
                      <span>12/28</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 animate-bounce">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-orange-400 font-bold text-xs">₿</span>
                </div>
              </div>
            </div>

            {/* Virtual Card */}
            <div className="relative group">
              <div className="w-80 h-48 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-2xl border border-purple-500/30 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500">
                <div className="absolute inset-0 bg-purple-500/10 rounded-2xl" />
                <div className="relative p-6 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm opacity-80">FlowPay</div>
                      <div className="text-xl font-bold">Virtual</div>
                    </div>
                    <Smartphone className="w-6 h-6 text-purple-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-lg font-mono tracking-wider">
                      **** **** **** 5678
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>VIRTUAL CARD</span>
                      <span>12/28</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 animate-bounce delay-500">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-green-400 font-bold text-xs">$</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Crypto Icons */}
          <div className="absolute top-10 left-10 animate-float">
            <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-orange-400 font-bold text-lg">₿</span>
            </div>
          </div>
          
          <div className="absolute top-20 right-10 animate-float delay-1000">
            <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-green-400 font-bold text-sm">USDT</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cardBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group text-center p-6 bg-gray-900/50 border border-gray-700 rounded-2xl hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Crypto Integration */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Primeira fintech com
                <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent block">
                  Cartões Crypto
                </span>
              </h3>
              <p className="text-gray-300 mb-6">
                Use Bitcoin e USDT para compras do dia a dia. Conversão automática na hora da compra, 
                com as melhores taxas do mercado e total transparência.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Pague com Bitcoin em qualquer lugar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Suporte nativo a USDT</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Conversão automática em tempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Taxas transparentes e competitivas</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black rounded-2xl p-8 border border-gray-600">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-4xl mb-2">💳</div>
                    <div className="text-xl font-bold text-white mb-2">Compra Aprovada!</div>
                    <div className="text-gray-400 text-sm">Starbucks • Shopping Center</div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Valor:</span>
                      <span className="text-white font-semibold">R$ 25,90</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Pago com:</span>
                      <span className="text-orange-400 font-semibold">0.0008 BTC</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Taxa:</span>
                      <span className="text-gray-300">R$ 0,50</span>
                    </div>
                  </div>
                  
                  <div className="text-green-400 text-sm">
                    ✓ Transação confirmada na blockchain
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Pedir Cartão Físico
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:border-purple-400">
              Cartão Virtual Grátis
            </button>
          </div>
          <p className="text-gray-400">
            Sem anuidade • Sem taxas escondidas • Aprovação instantânea
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cartoes;