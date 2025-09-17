import React from 'react';
import { Building, Zap, BarChart3, Shield, Smartphone, Globe, CreditCard, DollarSign } from 'lucide-react';

const Gateway = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Pagamentos Instantâneos",
      description: "PIX, cartões de crédito e débito processados em tempo real com aprovação em milissegundos"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboard Completo",
      description: "Acompanhe vendas, relatórios detalhados e analytics em tempo real da sua operação"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Avançada",
      description: "Tokenização, 3DS 2.0 e monitoramento antifraude com machine learning"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "API Moderna",
      description: "Integração simples com SDKs para todas as linguagens e documentação completa"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Vendas Internacionais",
      description: "Aceite pagamentos de qualquer lugar do mundo com conversão automática"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Repasses Automáticos",
      description: "Configure quando e como receber seus pagamentos com total flexibilidade"
    }
  ];

  const paymentMethods = [
    { name: "PIX", color: "bg-green-500" },
    { name: "Visa", color: "bg-blue-500" },
    { name: "Mastercard", color: "bg-red-500" },
    { name: "American Express", color: "bg-blue-600" },
    { name: "Elo", color: "bg-yellow-500" },
    { name: "Hipercard", color: "bg-purple-500" }
  ];

  return (
    <section id="gateway" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
            <Building className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300">Para Empresas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gateway de Pagamentos
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent block">
              Ultra Moderno
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aceite todos os métodos de pagamento com a tecnologia mais avançada do mercado. 
            Integração em minutos, aprovação instantânea e taxas competitivas.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Métodos de Pagamento Aceitos</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 hover:border-purple-500/50 transition-colors">
                <div className={`w-3 h-3 rounded-full ${method.color}`} />
                <span className="text-gray-300">{method.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration Preview */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Integração em <span className="text-purple-400">5 minutos</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Nossa API REST é simples e poderosa. Comece a aceitar pagamentos 
                hoje mesmo com nossa documentação completa e suporte especializado.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-gray-300">Crie sua conta empresarial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-gray-300">Obtenha suas chaves da API</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-gray-300">Integre em seu sistema</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <span className="text-gray-300">Comece a receber pagamentos</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Começar Integração
              </button>
            </div>
            
            <div className="bg-black rounded-lg p-6 border border-gray-600">
              <div className="text-sm text-gray-400 mb-2">Exemplo de código</div>
              <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST \\
  https://api.flowpay.com/v1/payments \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 10000,
    "currency": "BRL",
    "payment_method": "pix",
    "description": "Compra #1234"
  }'`}
              </pre>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105">
            Quero o Gateway FlowPay
          </button>
          <p className="text-gray-400 mt-4">Sem taxa de setup • Sem mensalidades • Só pague pelo que usar</p>
        </div>
      </div>
    </section>
  );
};

export default Gateway;