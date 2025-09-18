import { Smartphone, Zap, Globe, TrendingUp, Shield, Users, Send, CreditCard as CreditCardIcon } from 'lucide-react';

const BancoDigital = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Conta 100% Digital",
      description: "Abra sua conta em minutos pelo app, sem filas, sem papelada e sem complicação"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "PIX Instantâneo",
      description: "Transfira e receba dinheiro 24h por dia, 7 dias por semana, sem taxas"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Conta Internacional",
      description: "Receba pagamentos do exterior e mantenha saldo em diferentes moedas"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investimentos Integrados",
      description: "Invista em ações, fundos, crypto e renda fixa direto do app"
    }
  ];

  const benefits = [
    "Abertura de conta gratuita em 5 minutos",
    "PIX ilimitado sem taxas",
    "TED gratuita para qualquer banco",
    "Cartão sem anuidade",
    "Saque gratuito na rede Banco24Horas",
    "Cashback em todas as compras",
    "Suporte 24h via chat no app",
    "Notificações em tempo real"
  ];

  return (
    <section id="banco" className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm mb-4 md:mb-6">
            <Smartphone className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
            <span className="text-purple-300">Para Você</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Banco Digital
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent block">
              Completo e Gratuito
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Uma conta digital completa com tudo que você precisa para gerenciar seu dinheiro. 
            Sem taxas abusivas, com tecnologia de ponta e segurança bancária.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-16">
          {/* App Mockup */}
          <div className="relative order-2 lg:order-last mt-8 lg:mt-0">
            <div className="mx-auto w-64 h-[450px] md:w-80 md:h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-2 md:p-3 shadow-2xl border border-gray-700">
              <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                {/* Phone Screen Content */}
                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-400 text-sm">Olá,</div>
                      <div className="text-white font-semibold text-lg">Maria Silva</div>
                    </div>
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Balance Card */}
                  <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl p-6 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-sm opacity-80">Saldo em conta</div>
                        <div className="text-3xl font-bold">R$ 8.247,32</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-80">Conta</div>
                        <div className="text-sm font-mono">****-1234</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm opacity-80">
                      <Shield className="w-4 h-4" />
                      <span>Protegido pelo FGC</span>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div>
                    <div className="text-white font-medium mb-4">Ações rápidas</div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                          <Send className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="text-xs text-gray-400">PIX</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                          <CreditCardIcon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="text-xs text-gray-400">Cartão</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                          <TrendingUp className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="text-xs text-gray-400">Investir</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                          <Globe className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="text-xs text-gray-400">Câmbio</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Transactions */}
                  <div>
                    <div className="text-white font-medium mb-3">Últimas movimentações</div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-900 rounded-xl p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">↓</span>
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">PIX recebido</div>
                            <div className="text-gray-400 text-xs">João Silva • 13:45</div>
                          </div>
                        </div>
                        <div className="text-green-400 font-semibold">+R$ 250,00</div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-gray-900 rounded-xl p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <CreditCardIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Compra no cartão</div>
                            <div className="text-gray-400 text-xs">Amazon • 11:22</div>
                          </div>
                        </div>
                        <div className="text-gray-300 font-semibold">-R$ 89,90</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 md:-top-4 -right-3 md:-right-4 animate-bounce delay-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-green-400 font-bold text-xs md:text-sm">PIX</span>
              </div>
            </div>
            
            <div className="absolute -bottom-3 md:-bottom-4 -left-3 md:-left-4 animate-bounce delay-700">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-first">
            <div className="grid gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-gray-900/50 border border-gray-700 rounded-2xl hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Por que escolher o <span className="text-purple-400">FlowPay</span>?
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 mb-3 md:mb-4">
            Abrir Minha Conta Digital
          </button>
          <p className="text-gray-400 text-sm md:text-base">
            Gratuito • Aprovação instantânea • Cartão sem anuidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default BancoDigital;