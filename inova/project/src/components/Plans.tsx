import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import PlanCard from './ui/PlanCard';

const Plans = () => {
  const plans = [
    {
      name: "Plano Gratuito",
      price: "R$ 0",
      period: "para sempre",
      description: "Ideal para experimentar a plataforma",
      features: [
        { text: "Acesso ao catálogo de profissionais", included: true },
        { text: "Perfil básico na plataforma", included: true },
        { text: "Até 3 solicitações por mês", included: true },
        { text: "Recomendações básicas", included: true },
        { text: "Suporte por email", included: true },
        { text: "Ferramentas de IA avançadas", included: false },
        { text: "Verificação prioritária", included: false },
        { text: "Destaque nas buscas", included: false },
      ],
      ctaText: "Começar Grátis",
      highlight: false,
      color: "gray"
    },
    {
      name: "Plano Premium",
      price: "R$ 39,90",
      period: "por mês",
      description: "Para usuários frequentes",
      features: [
        { text: "Acesso ao catálogo de profissionais", included: true },
        { text: "Perfil completo e verificado", included: true },
        { text: "Solicitações ilimitadas", included: true },
        { text: "Recomendações personalizadas de IA", included: true },
        { text: "Suporte prioritário 24/7", included: true },
        { text: "Ferramentas de IA avançadas", included: true },
        { text: "Verificação prioritária", included: true },
        { text: "Destaque nas buscas", included: false },
      ],
      ctaText: "Assinar Premium",
      highlight: true,
      color: "blue"
    },
    {
      name: "Plano Empresarial",
      price: "R$ 99,90",
      period: "por mês",
      description: "Para empresas e equipes",
      features: [
        { text: "Tudo do plano Premium", included: true },
        { text: "Múltiplos usuários (até 5)", included: true },
        { text: "Relatórios detalhados", included: true },
        { text: "API de integração", included: true },
        { text: "Gerente de conta dedicado", included: true },
        { text: "Ferramentas de IA avançadas", included: true },
        { text: "Verificação prioritária", included: true },
        { text: "Destaque nas buscas", included: true },
      ],
      ctaText: "Falar com Consultor",
      highlight: false,
      color: "purple"
    }
  ];

  return (
    <section id="planos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Temos opções para todos os perfis, desde usuários ocasionais até empresas com grandes demandas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              ctaText={plan.ctaText}
              highlight={plan.highlight}
              color={plan.color}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Todos os planos incluem nossa garantia de satisfação de 30 dias.
          </p>
          <a href="#comparativo" className="text-blue-400 hover:text-blue-300 font-medium">
            Ver comparativo completo de planos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;