import React from 'react';
import { CheckCircle, Clock, Search, Shield, ThumbsDown } from 'lucide-react';

const Problems = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solucionamos as dores de quem contrata e quem presta serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma utiliza inteligência artificial para conectar as pessoas certas, no momento certo, com total segurança e eficiência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contratante */}
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 border border-slate-700/50">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-full mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Para quem contrata</h3>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <ThumbsDown className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Dificuldade em encontrar profissionais confiáveis e com avaliações reais</p>
              </li>
              <li className="flex items-start">
                <ThumbsDown className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Tempo perdido com orçamentos que não se encaixam no perfil</p>
              </li>
              <li className="flex items-start">
                <ThumbsDown className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Incerteza sobre a qualidade do serviço antes da contratação</p>
              </li>
            </ul>
            
            <div className="border-t border-slate-700/50 pt-6 mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Como resolvemos:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Sistema de recomendação baseado em IA que encontra os melhores profissionais</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Verificação de identidade e histórico de todos os prestadores</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Avaliações verificadas e sistema de garantia de qualidade</p>
                </li>
              </ul>
            </div>
            
            <a 
              href="#contratar" 
              className="mt-8 inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              Saiba mais sobre contratar
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Prestador */}
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 border border-slate-700/50">
            <div className="inline-flex items-center justify-center p-3 bg-purple-500/20 rounded-full mb-6">
              <Search className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Para quem presta serviços</h3>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <ThumbsDown className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Dificuldade em encontrar clientes compatíveis com suas habilidades</p>
              </li>
              <li className="flex items-start">
                <ThumbsDown className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Tempo perdido com propostas que não se concretizam</p>
              </li>
              <li className="flex items-start">
                <ThumbsDown className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Desafio de gerenciar agenda, pagamentos e comunicação com clientes</p>
              </li>
            </ul>
            
            <div className="border-t border-slate-700/50 pt-6 mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Como resolvemos:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Recomendação inteligente de oportunidades alinhadas ao seu perfil</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Sistema de agendamento integrado com seu calendário</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Garantia de pagamento e sistema de avaliações justo</p>
                </li>
              </ul>
            </div>
            
            <a 
              href="#prestar" 
              className="mt-8 inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors"
            >
              Saiba mais sobre prestar serviços
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;