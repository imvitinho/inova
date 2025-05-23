import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const services = [
    {
      image: "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg",
      title: "Pedreiro",
      description: "Construção e reformas"
    },
    {
      image: "https://images.pexels.com/photos/3637837/pexels-photo-3637837.jpeg",
      title: "Marceneiro",
      description: "Móveis sob medida"
    },
    {
      image: "https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg",
      title: "Faxineira",
      description: "Limpeza residencial"
    },
    {
      image: "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg",
      title: "Encanador",
      description: "Reparos hidráulicos"
    },
    {
      image: "https://images.pexels.com/photos/5725003/pexels-photo-5725003.jpeg",
      title: "Limpador de Piscina",
      description: "Manutenção de piscinas"
    },
    {
      image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg",
      title: "Jardineiro",
      description: "Paisagismo e jardins"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + services.length) % services.length);
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Conecte-se com todos os serviços em um toque.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Conectamos você aos melhores profissionais para qualquer serviço, usando inteligência artificial para encontrar a combinação perfeita entre suas necessidades e as habilidades dos prestadores.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contratar" 
                className="flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Quero Contratar
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#prestar" 
                className="flex items-center justify-center px-8 py-3 border-2 border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500/10 transition-colors duration-300"
              >
                Quero Prestar Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-8 flex items-center text-sm text-gray-400">
              <span className="inline-block h-1 w-1 rounded-full bg-gray-400 mr-1"></span>
              <span>Mais de 10.000 profissionais cadastrados</span>
              <span className="mx-2">•</span>
              <span className="inline-block h-1 w-1 rounded-full bg-gray-400 mr-1"></span>
              <span>Atendimento em todo o Brasil</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-6 left-20 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6">
                <div className="relative overflow-hidden rounded-lg aspect-video">
                  <div className="transition-transform duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}>
                    {services.map((service, index) => (
                      <div key={index} className="min-w-full">
                        <img 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-white text-xl font-bold">{service.title}</h3>
                          <p className="text-white/80">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <button 
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-4 max-w-xs">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                      <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User" />
                      <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User" />
                      <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium text-white">100% IA-powered</p>
                      <p className="text-gray-300">Combinações inteligentes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;