import { Star, Clock, DollarSign, Shield, Headphones, TrendingUp, Users, Zap } from 'lucide-react';

const Beneficios = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cashback até 5%",
      description: "Ganhe dinheiro de volta em todas as compras com seu cartão FlowPay. Sem limites, sem complicação.",
      highlight: "5%"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte 24/7",
      description: "Atendimento humanizado 24 horas por dia via chat, WhatsApp ou telefone. Sempre que precisar.",
      highlight: "24h"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Taxas Transparentes",
      description: "Sem pegadinhas. Todas as taxas são claras e exibidas antes de qualquer transação.",
      highlight: "0%"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Velocidade Máxima",
      description: "PIX instantâneo, pagamentos aprovados em milissegundos e transferências em tempo real.",
      highlight: "1s"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Bancária",
      description: "Criptografia de ponta, autenticação biométrica e monitoramento 24h contra fraudes.",
      highlight: "100%"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Facilidade de Uso",
      description: "Interface intuitiva, processos simples e tudo que você precisa na palma da mão.",
      highlight: "Top"
    }
  ];

  const stats = [
    {
      number: "50K+",
      label: "Empresas confiam",
      description: "Grandes e pequenas empresas escolheram FlowPay"
    },
    {
      number: "R$ 2B+",
      label: "Volume processado",
      description: "Bilhões transacionados com segurança"
    },
    {
      number: "99.9%",
      label: "Uptime garantido",
      description: "Disponibilidade máxima para seus negócios"
    },
    {
      number: "4.9★",
      label: "Avaliação média",
      description: "Milhares de clientes satisfeitos"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm mb-4 md:mb-6">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
            <span className="text-purple-300">Diferenciais Únicos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Por que escolher
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent block">
              FlowPay
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Não somos apenas mais uma fintech. Somos a evolução do sistema financeiro, 
            combinando o melhor da tecnologia com atendimento humanizado.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 hover:from-purple-500/5 hover:to-purple-600/5 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1 text-purple-300 text-sm font-bold">
                  {benefit.highlight}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 border border-gray-700 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Números que <span className="text-purple-400">impressionam</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Resultados reais de uma empresa que cresce todos os dias
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-purple-400 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-gradient-to-br from-purple-900/20 to-black rounded-2xl p-8 border border-purple-500/30 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">FlowPay vs. Bancos Tradicionais</h3>
            <p className="text-gray-300">Veja por que somos a melhor escolha</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-gray-300">Recursos</th>
                  <th className="text-center py-4 px-6">
                    <div className="text-purple-400 font-bold">FlowPay</div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="text-gray-500">Bancos Tradicionais</div>
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Abertura de conta</td>
                  <td className="text-center py-4 px-6">
                    <div className="text-green-400 font-semibold">5 minutos</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400 font-semibold">Dias/semanas</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">PIX</td>
                  <td className="text-center py-4 px-6">
                    <div className="text-green-400 font-semibold">Gratuito ilimitado</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400 font-semibold">Limitado/pago</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Cartão sem anuidade</td>
                  <td className="text-center py-4 px-6">
                    <div className="text-green-400 font-semibold">✓ Sempre</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400 font-semibold">✗ Raramente</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-gray-300">Suporte 24h</td>
                  <td className="text-center py-4 px-6">
                    <div className="text-green-400 font-semibold">✓ Humanizado</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400 font-semibold">✗ Bot/filas</div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-300">Crypto no cartão</td>
                  <td className="text-center py-4 px-6">
                    <div className="text-green-400 font-semibold">✓ Bitcoin/USDT</div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="text-red-400 font-semibold">✗ Não oferece</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">
            Pronto para <span className="text-purple-400">revolucionar</span> suas finanças?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Começar Agora
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:border-purple-400">
              Falar com Especialista
            </button>
          </div>
          
          <p className="text-gray-400 text-sm">
            Junte-se a mais de 50.000 empresas que confiam no FlowPay
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;