import React from 'react';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para transformar sua experiência com serviços?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já estão economizando tempo e dinheiro com nossa plataforma inteligente.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#criar-conta" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              Criar Conta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#saber-mais" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              Saber Mais
            </a>
          </div>
          
          <p className="mt-8 text-sm text-white/80">
            Não é necessário cartão de crédito • Cancelamento a qualquer momento
          </p>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-16" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          fill="rgb(15 23 42)"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Cta;