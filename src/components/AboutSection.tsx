import React from 'react';
import { Code2, Gamepad, LineChart, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    {
      icon: <Gamepad className="w-5 h-5 text-orange-400" />,
      title: 'Game Development',
      description: 'Criação de mecânicas envolventes, físicas interativas e arquiteturas orientadas a performance.'
    },
    {
      icon: <LineChart className="w-5 h-5 text-orange-400" />,
      title: 'Aplicações Financeiras',
      description: 'Interfaces com foco em dashboards analíticos, gráficos dinâmicos e experiência do usuário fluida.'
    },
    {
      icon: <Code2 className="w-5 h-5 text-orange-400" />,
      title: 'Código Limpo & UI Modular',
      description: 'Construção de componentes reutilizáveis, design sistemas escuros e desacoplamento de lógica.'
    }
  ];

  return (
    <section id="sobre" className="py-24 border-t border-neutral-900 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Minha Trajetória</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            Sobre Mim
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Desenvolvedor e fundador do estúdio Fortunaty, apaixonado por transformar ideias em produtos digitais funcionais. 
            Combino design minimalista em tons escuros com código performático para criar desde jogos web interativos (como o <strong>Top Rush Car</strong>) até ferramentas de organização financeira focadas no mobile (como o <strong>Plantei Ativos</strong>).
          </p>
        </div>

        {/* Grade de Blocos Modulares */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-neutral-900/60 border border-neutral-800/80 p-6 rounded-2xl hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

