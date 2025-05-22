import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  ctaText: string;
  highlight: boolean;
  color: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  ctaText, 
  highlight, 
  color 
}) => {
  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
      border: 'border-blue-400/20',
      text: 'text-blue-400',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-600 to-purple-800',
      border: 'border-purple-400/20',
      text: 'text-purple-400',
      button: 'bg-purple-600 hover:bg-purple-700'
    },
    gray: {
      bg: 'bg-gradient-to-br from-slate-600 to-slate-800',
      border: 'border-slate-400/20',
      text: 'text-slate-400',
      button: 'bg-slate-600 hover:bg-slate-700'
    }
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses];

  return (
    <div 
      className={`rounded-2xl ${highlight ? 'transform -translate-y-4 scale-105' : ''} transition-all duration-300 overflow-hidden shadow-xl group backdrop-blur-md bg-slate-800/50 border border-slate-700/50`}
    >
      {/* Header */}
      <div className={`${selectedColor.bg} text-white p-6`}>
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="opacity-80 mb-4">{description}</p>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="ml-2 opacity-80">{period}</span>
        </div>
      </div>
      
      {/* Body */}
      <div className="p-6">
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
              ) : (
                <XCircle className="h-6 w-6 text-gray-500 mr-3 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <a
          href="#assinar"
          className={`block w-full py-3 rounded-lg text-center font-medium text-white transition-colors duration-300 ${selectedColor.button}`}
        >
          {ctaText}
        </a>
      </div>
      
      {/* Highlight tag */}
      {highlight && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full transform rotate-12">
          Mais Popular
        </div>
      )}
    </div>
  );
};

export default PlanCard;