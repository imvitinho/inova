import React from 'react';
import { Brain, Calendar, Filter, BarChart, TrendingUp } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      title: "Recomendações Personalizadas",
      description: "Nossa IA analisa seu histórico, preferências e necessidades para recomendar os melhores profissionais para cada serviço.",
      color: "blue"
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-400" />,
      title: "Agendamento Inteligente",
      description: "Sistema que otimiza horários, sugere melhores datas e sincroniza com seu calendário para máxima produtividade.",
      color: "purple"
    },
    {
      icon: <Filter className="h-8 w-8 text-indigo-400" />,
      title: "Filtro de Oportunidades",
      description: "Para prestadores, nossa IA seleciona as melhores oportunidades baseadas em suas habilidades e disponibilidade.",
      color: "indigo"
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-400" />,
      title: "Metas e Desempenho",
      description: "Acompanhe seu desempenho, receba insights para melhorias e defina metas realistas para seu crescimento.",
      color: "blue"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
      title: "Análise de Mercado",
      description: "Tenha acesso a dados de mercado, tendências de preços e demanda por diferentes tipos de serviços na sua região.",
      color: "purple"
    }
  ];

  return (
    <section id="recursos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Inteligência Artificial a serviço da sua produtividade
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossas funcionalidades premium utilizam o que há de mais avançado em inteligência artificial para conectar pessoas e serviços.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#planos" 
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Conheça nossos planos
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;