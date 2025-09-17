import React from 'react';
import { User, CreditCard, Smartphone, CheckCircle, ArrowRight, Building, Globe, Zap } from 'lucide-react';

const ComoFunciona = () => {
  const pessoaSteps = [
    {
      icon: <User className="w-8 h-8" />,
      title: "1. Faça seu cadastro",
      description: "Baixe o app e cadastre-se em 3 minutos com apenas seu CPF e foto dos documentos"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "2. Conta aprovada",
      description: "Análise automática em tempo real. Sua conta digital fica pronta instantaneamente"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "3. Peça seu cartão",
      description: "Cartão virtual liberado na hora. Cartão físico chega em casa em até 7 dias úteis"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "4. Use e aproveite",
      description: "PIX grátis, investimentos, compras em crypto e cashback em todas as transações"
    }
  ];

  const empresaSteps = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "1. Cadastro empresarial",
      description: "Cadastre sua empresa em minutos com CNPJ e documentos do representante legal"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "2. Integração da API",
      description: "Documentação completa e SDKs para integração rápida em qualquer plataforma"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "3. Testes e homologação",
      description: "Ambiente de testes gratuito para validar integrações antes de ir ao ar"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "4. Comece a vender",
      description: "Aceite pagamentos PIX, cartões e crypto com aprovação em milissegundos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {' '}Funciona
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Processos simples e rápidos para pessoas físicas e empresas. 
            Comece a usar FlowPay em poucos minutos.
          </p>
        </div>

        {/* For Individuals */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-4">
              <User className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Para Pessoas Físicas</span>
            </div>
            <h3 className="text-3xl font-bold">Abra sua conta em 4 passos simples</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {pessoaSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 hover:from-purple-500/5 hover:to-purple-600/5 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < pessoaSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Começar Agora - Pessoa Física
            </button>
          </div>
        </div>

        {/* For Companies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 text-sm mb-4">
              <Building className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300">Para Empresas</span>
            </div>
            <h3 className="text-3xl font-bold">Integre o gateway em 4 etapas</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {empresaSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 hover:from-blue-500/5 hover:to-blue-600/5 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < empresaSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Integrar Gateway
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Precisa de ajuda?</h3>
              <p className="text-gray-300 mb-6">
                Nossa equipe de especialistas está pronta para ajudar você em cada etapa. 
                Suporte técnico e comercial disponível 24/7.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Documentação completa e atualizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">SDKs para todas as linguagens</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Suporte técnico especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Ambiente de testes gratuito</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-flex flex-col space-y-4">
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:border-purple-400">
                  Falar com Especialista
                </button>
                <button className="border border-gray-500 text-gray-400 hover:bg-gray-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:border-gray-400">
                  Ver Documentação
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;