import { Shield, Lock, Eye, FileCheck, Server, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

const Seguranca = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Criptografia de Ponta",
      description: "Dados protegidos com AES-256 e comunicação TLS 1.3. O mesmo padrão usado por bancos centrais."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Autenticação Biométrica",
      description: "Impressão digital, reconhecimento facial e autenticação em duas etapas para máxima segurança."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Monitoramento 24/7",
      description: "IA avançada monitora transações em tempo real, detectando e bloqueando atividades suspeitas."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Conformidade Regulatória",
      description: "Licenciado pelo Banco Central, seguimos todas as normas LGPD, PCI DSS e regulamentações financeiras."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infraestrutura Blindada",
      description: "Servidores em data centers de nível 4, backup redundante e recuperação automática em caso de falhas."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tokenização Avançada",
      description: "Dados sensíveis nunca são armazenados. Utilizamos tokens únicos para cada transação."
    }
  ];

  const certifications = [
    { name: "PCI DSS Level 1", description: "Padrão ouro para segurança de dados de cartão" },
    { name: "ISO 27001", description: "Gestão de segurança da informação" },
    { name: "SOC 2 Type II", description: "Auditoria independente de controles de segurança" },
    { name: "LGPD Compliant", description: "Total conformidade com proteção de dados" }
  ];

  return (
    <section id="seguranca" className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm mb-4 md:mb-6">
            <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
            <span className="text-green-300">Segurança Máxima</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Seu dinheiro
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block">
              100% Protegido
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Utilizamos a tecnologia de segurança mais avançada do mundo financeiro. 
            Seus dados e seu dinheiro estão protegidos com padrão bancário internacional.
          </p>
        </div>

        {/* Security Shield Visual */}
        <div className="relative mb-12 md:mb-16">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full border-4 border-green-500/30 flex items-center justify-center">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-gradient-to-br from-green-600/30 to-green-500/30 rounded-full border-2 border-green-400/50 flex items-center justify-center">
                  <Shield className="w-16 h-16 md:w-24 md:h-24 text-green-400" />
                </div>
              </div>
              
              {/* Floating Security Icons */}
              <div className="absolute -top-8 -left-8 animate-bounce delay-300">
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Lock className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 animate-bounce delay-700">
                <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 animate-bounce delay-1000">
                <div className="w-16 h-16 bg-yellow-500/20 border border-yellow-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 animate-bounce delay-500">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 hover:from-green-500/5 hover:to-green-600/5 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Certificações e <span className="text-green-400">Compliance</span>
            </h3>
            <p className="text-gray-300">
              Auditados e certificados pelas principais organizações de segurança mundial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-600 hover:border-green-500/50 transition-colors">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div className="font-semibold text-white mb-2">{cert.name}</div>
                <div className="text-gray-400 text-sm">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Promise */}
        <div className="bg-gradient-to-br from-green-900/20 to-black rounded-2xl p-8 border border-green-500/30 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Nossa <span className="text-green-400">Promessa</span> de Segurança
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Garantia de Reembolso</div>
                    <div className="text-gray-400">100% do valor reembolsado em caso de fraude comprovada</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Monitoramento Contínuo</div>
                    <div className="text-gray-400">IA monitora sua conta 24/7 contra atividades suspeitas</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Transparência Total</div>
                    <div className="text-gray-400">Relatórios de segurança e notificações em tempo real</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Suporte Especializado</div>
                    <div className="text-gray-400">Time de segurança disponível 24h para emergências</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black rounded-xl p-6 border border-gray-600">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <div className="text-2xl font-bold text-green-400 mb-2">99.99% Uptime</div>
                <div className="text-gray-400 mb-4">Disponibilidade garantida</div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gray-900 rounded-lg p-3">
                    <span className="text-gray-300">Tentativas de invasão bloqueadas</span>
                    <span className="text-red-400 font-bold">1.2M+</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-900 rounded-lg p-3">
                    <span className="text-gray-300">Transações protegidas hoje</span>
                    <span className="text-green-400 font-bold">847K</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-900 rounded-lg p-3">
                    <span className="text-gray-300">Taxa de falso positivo</span>
                    <span className="text-blue-400 font-bold">0.001%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">
            Sua segurança é nossa <span className="text-green-400">prioridade #1</span>
          </h3>
          
          <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 mb-4">
            Conta Segura e Gratuita
          </button>
          
          <p className="text-gray-400">
            Protegido pelo FGC até R$ 250.000 • Criptografia bancária • Monitoramento 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default Seguranca;