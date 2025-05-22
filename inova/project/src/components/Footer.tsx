import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Dai.ly</h3>
            <p className="text-gray-400 mb-4">
              Conectando contratantes e prestadores de serviço com inteligência artificial desde 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links úteis */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Como Funciona</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Planos e Preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Carreiras</a></li>
            </ul>
          </div>
          
          {/* Para Contratantes */}
          <div>
            <h4 className="text-white font-semibold mb-4">Para Contratantes</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Encontrar Profissionais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Como Avaliar Serviços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Segurança e Garantia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>
          
          {/* Para Prestadores */}
          <div>
            <h4 className="text-white font-semibold mb-4">Para Prestadores</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cadastrar Serviços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Dicas de Perfil</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Receber Pagamentos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Suporte Técnico</a></li>
            </ul>
          </div>
        </div>
        
        {/* Contact and Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a href="mailto:contato@servicosai.com.br" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={18} className="mr-2" />
                contato@servicosai.com.br
              </a>
              <a href="tel:+551199999999" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={18} className="mr-2" />
                (11) 9999-9999
              </a>
            </div>
            
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ServiçosAI. Todos os direitos reservados.
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
            {' • '}
            <a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a>
            {' • '}
            <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;