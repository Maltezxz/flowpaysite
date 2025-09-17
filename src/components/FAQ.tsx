import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, User, Building, CreditCard, Shield } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqData = [
    {
      category: "Geral",
      icon: <HelpCircle className="w-5 h-5" />,
      questions: [
        {
          question: "O que é o FlowPay e como funciona?",
          answer: "FlowPay é uma plataforma completa que combina gateway de pagamentos para empresas com banco digital para pessoas físicas. Oferecemos soluções de pagamento instantâneo, cartões crypto, conta digital gratuita e muito mais, tudo integrado em uma única plataforma tecnológica."
        },
        {
          question: "FlowPay é seguro? Tem licença do Banco Central?",
          answer: "Sim, somos 100% seguros e licenciados pelo Banco Central do Brasil. Utilizamos criptografia bancária AES-256, tokenização avançada, autenticação biométrica e monitoramento 24/7 contra fraudes. Seus dados e dinheiro estão protegidos pelos mesmos padrões dos grandes bancos."
        },
        {
          question: "Posso usar FlowPay como pessoa física e empresa?",
          answer: "Sim! Você pode ter tanto uma conta pessoa física quanto uma conta empresarial. Cada uma tem suas funcionalidades específicas: a conta pessoal oferece banco digital completo, enquanto a empresarial inclui gateway de pagamentos e ferramentas para receber pagamentos online."
        }
      ]
    },
    {
      category: "Conta Pessoal",
      icon: <User className="w-5 h-5" />,
      questions: [
        {
          question: "Como abrir minha conta digital?",
          answer: "É muito simples! Baixe o app FlowPay, faça seu cadastro com CPF e foto dos documentos. A análise é automática e sua conta fica pronta em poucos minutos. Sem filas, sem papelada, 100% digital."
        },
        {
          question: "A conta tem taxa mensal ou anuidade?",
          answer: "Não! A conta FlowPay é 100% gratuita. Sem taxa mensal, sem anuidade no cartão, PIX ilimitado grátis. Você só paga pelos serviços que usar, sempre com total transparência."
        },
        {
          question: "Posso fazer PIX grátis?",
          answer: "Sim! PIX é completamente gratuito e ilimitado na sua conta FlowPay. Você pode enviar e receber PIX 24h por dia, 7 dias por semana, sem nenhuma taxa. TED também é gratuita para qualquer banco."
        },
        {
          question: "Como funciona o cashback?",
          answer: "Você ganha até 5% de cashback em todas as compras com seu cartão FlowPay. O dinheiro volta direto na sua conta, sem complicação. Quanto mais você usa, mais você ganha de volta."
        }
      ]
    },
    {
      category: "Empresas",
      icon: <Building className="w-5 h-5" />,
      questions: [
        {
          question: "Como integrar o gateway FlowPay?",
          answer: "A integração é muito simples! Cadastre sua empresa, obtenha as chaves da API e use nossa documentação completa com SDKs para todas as linguagens. Nosso time técnico te ajuda em todo o processo. A integração leva apenas alguns minutos."
        },
        {
          question: "Quais métodos de pagamento posso aceitar?",
          answer: "Você pode aceitar PIX, todos os cartões (Visa, Mastercard, Elo, Hipercard, American Express), pagamentos internacionais e até mesmo criptomoedas como Bitcoin e USDT. Tudo integrado em uma única API."
        },
        {
          question: "Como funcionam os repasses?",
          answer: "Você define quando quer receber: diário, semanal ou mensal. Os repasses são automáticos e você acompanha tudo em tempo real no dashboard. Sem surpresas, com total transparência de taxas."
        },
        {
          question: "Tem taxa de setup ou mensalidade?",
          answer: "Não cobramos taxa de setup nem mensalidade. Você só paga pelas transações que processar, com taxas competitivas e transparentes. Quanto mais você vende, melhores as condições."
        }
      ]
    },
    {
      category: "Cartões",
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          question: "Como funcionam os cartões crypto?",
          answer: "Nossos cartões permitem que você pague com Bitcoin e USDT em qualquer lugar do mundo. A conversão é feita automaticamente na hora da compra, com as melhores taxas do mercado. É o futuro dos pagamentos disponível hoje."
        },
        {
          question: "Posso usar o cartão no exterior?",
          answer: "Sim! Nosso cartão funciona em qualquer lugar do mundo onde Visa/Mastercard é aceita. Melhor ainda: sem IOF abusivo nas compras internacionais. Taxa justa e transparente para você viajar tranquilo."
        },
        {
          question: "Qual a diferença entre cartão físico e virtual?",
          answer: "O cartão virtual é gerado instantaneamente no app para compras online. O físico chega em casa em até 7 dias úteis para uso presencial. Ambos têm os mesmos benefícios: sem anuidade, cashback e suporte a crypto."
        }
      ]
    },
    {
      category: "Segurança",
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          question: "Meu dinheiro fica protegido?",
          answer: "Sim! Seu dinheiro é protegido pelo FGC (Fundo Garantidor de Créditos) até R$ 250.000. Além disso, utilizamos tecnologia bancária de ponta: criptografia AES-256, autenticação biométrica e monitoramento 24/7 contra fraudes."
        },
        {
          question: "Como posso recuperar minha conta se esquecer a senha?",
          answer: "É fácil! No app, clique em 'Esqueci minha senha', confirme sua identidade por SMS ou biometria, e crie uma nova senha. Todo o processo é seguro e leva poucos minutos."
        },
        {
          question: "O que fazer se suspeitar de fraude?",
          answer: "Entre em contato imediatamente pelo chat 24h do app ou WhatsApp. Nosso time de segurança bloqueia sua conta preventivamente e investiga a situação. Se confirmada a fraude, você é 100% reembolsado."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300">Perguntas Frequentes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tire suas
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {' '}dúvidas
            </span>
          </h2>
          
          <p className="text-xl text-gray-300">
            Respostas para as principais dúvidas sobre FlowPay. 
            Não encontrou o que procura? Fale conosco!
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="text-purple-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
              </div>

              {/* Questions */}
              <div className="divide-y divide-gray-700">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openFAQ === globalIndex;

                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-6 text-left hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-white pr-4">
                            {faq.question}
                          </h4>
                          <div className="text-purple-400 flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </div>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 -mt-2">
                          <div className="text-gray-300 leading-relaxed border-l-4 border-purple-500 pl-4 bg-purple-500/5 py-4 rounded-r-lg">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-300 mb-6">
            Nossa equipe está pronta para ajudar você 24 horas por dia, 7 dias por semana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Chat ao Vivo
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:border-purple-400">
              WhatsApp
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            Resposta em menos de 2 minutos • Suporte especializado
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;