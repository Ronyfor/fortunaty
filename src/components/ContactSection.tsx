import React from 'react';
import { Mail, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 border-t border-neutral-900 bg-neutral-950/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden orange-glow-hover">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Vamos Conversar</span>
            </div>
            
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              Pronto para construir o próximo projeto?
            </h2>
            
            <p className="text-neutral-400 text-base sm:text-lg mb-8 leading-relaxed">
              Interessado em desenvolver um jogo, um aplicativo de investimentos ou discutir ideias de desenvolvimento? Sinta-se à vontade para enviar uma mensagem.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="mailto:ronyfortunato@gmail.com" 
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-neutral-950 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-95"
              >
                <Mail className="w-5 h-5" />
                <span>Enviar E-mail</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-orange-400 hover:border-orange-500/40 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-orange-400 hover:border-orange-500/40 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} - Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com foco em</span>
            <span className="text-orange-400">Design Minimalista & Performance</span>
          </p>
        </div>
      </div>
    </section>
  );
}

