import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Encontrar prestadores de serviço qualificados sempre foi um desafio para minha empresa. Com a plataforma, consigo localizar profissionais verificados em questão de minutos, com recomendações que realmente combinam com minhas necessidades.",
      author: "Carlos Mendes",
      role: "Empresário",
      company: "Mendes Construções",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "contratante"
    },
    {
      content: "Desde que comecei a usar a plataforma, minha agenda está sempre cheia com clientes que realmente valorizam meu trabalho. O sistema de IA entende meu perfil e me conecta com projetos que fazem sentido para minhas habilidades.",
      author: "Amanda Silva",
      role: "Designer de Interiores",
      company: "Autônoma",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "prestadora"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de contratantes e prestadores de serviço que transformaram sua experiência com nossa plataforma.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 relative border border-slate-700/50 ${
                testimonial.type === 'contratante' ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-purple-500'
              }`}
            >
              <Quote className={`absolute top-6 right-6 h-12 w-12 opacity-10 ${
                testimonial.type === 'contratante' ? 'text-blue-400' : 'text-purple-400'
              }`} />
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.author}</h4>
                  <p className="text-gray-300">{testimonial.role}, {testimonial.company}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-300 italic mb-4">
                "{testimonial.content}"
              </blockquote>
              
              <div className={`text-sm font-medium ${
                testimonial.type === 'contratante' ? 'text-blue-400' : 'text-purple-400'
              }`}>
                {testimonial.type === 'contratante' ? 'Contratante' : 'Prestador de Serviços'}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#mais-depoimentos" 
            className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
          >
            Ver mais depoimentos
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;