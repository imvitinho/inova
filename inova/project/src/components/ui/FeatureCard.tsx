import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      hover: 'hover:border-blue-500/30',
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      hover: 'hover:border-purple-500/30',
    },
    indigo: {
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
      hover: 'hover:border-indigo-500/30',
    },
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses];

  return (
    <div 
      className={`${selectedColor.bg} border ${selectedColor.border} rounded-xl p-6 ${selectedColor.hover} transition-all duration-300 hover:shadow-lg relative overflow-hidden group backdrop-blur-md`}
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-white/10 to-white/0 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="mb-4">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;