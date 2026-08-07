/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { ArrowDown, Gamepad2, TrendingUp, Sparkles, ArrowUpRight } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-neutral-100 font-sans selection:bg-orange-500 selection:text-neutral-950">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 relative overflow-hidden">
        {/* Glow de fundo laranja suave */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Fortunaty Studios
            </h1>

            <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-light">
              Estúdio focado em criar <span className="text-orange-400 font-normal">jogos web envolventes</span> e <span className="text-orange-400 font-normal">aplicativos financeiros inteligentes</span> com design moderno e minimalista.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projetos" 
                className="bg-orange-500 hover:bg-orange-600 text-neutral-950 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 flex items-center gap-2"
              >
                <span>Ver Projetos</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a 
                href="#sobre" 
                className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 font-medium px-6 py-3.5 rounded-xl transition-all duration-300"
              >
                Sobre o Estúdio
              </a>
            </div>
          </div>

          {/* Cards Rápidos de Destaque no Início */}
          <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-900">
            <a 
              href="#top-rush" 
              className="group p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-orange-500/40 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-white font-semibold text-base group-hover:text-orange-400 transition-colors">Top Rush Car</h2>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 transition-colors" />
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2">
                  Jogo de corrida web endless runner low-poly com missões e recompensas.
                </p>
              </div>
            </a>

            <a 
              href="#plantei-ativos" 
              className="group p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-orange-500/40 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-white font-semibold text-base group-hover:text-orange-400 transition-colors">Plantei Ativos</h2>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 transition-colors" />
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2">
                  App minimalista de gestão de carteira e acompanhamento de rendimentos para mobile.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Destaque de Projetos */}
      <section id="projetos" className="py-20 border-t border-neutral-900 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-500">Portfólio em Destaque</span>
              <h2 className="text-3xl font-bold text-white mt-1">Projetos Principais</h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md">
              Uma seleção modular de aplicações que refletem foco em gameplay e engenharia financeira.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              id="top-rush"
              title="Top Rush Car" 
              category="Jogo de Corrida Web"
              description="Endless runner com visual low-poly limpo e moderno. Serve como o carro-chefe de entretenimento do estúdio Fortunaty, oferecendo corrida ágil e dinâmica diretamente no navegador."
              highlights={[
                'Mecânicas de desvio de obstáculos e aceleração',
                'Sistema de missões diárias e HUD intuitivo',
                'Monetização e recompensas integradas',
                'Hospedado na Vercel para acesso web direto'
              ]}
              tags={['GameDev', 'LowPoly', 'EndlessRunner', 'Vercel', 'FortunatyStudio']}
              type="game"
              actionLabel="Jogar na Web (Vercel)"
              actionUrl="#"
              videoUrl="https://assets.mixkit.co/videos/preview/mixkit-polygon-wireframe-grid-tunnel-31518-large.mp4"
            />
            <ProjectCard 
              id="plantei-ativos"
              title="Plantei Ativos" 
              category="Finanças & Investimentos"
              description="Aplicativo focado em gestão de carteira, análise de rendimentos e organização de ativos financeiros com uma experiência minimalista projetada para dispositivos móveis."
              highlights={[
                'Gestão e organização centralizada de carteira',
                'Análise de rendimentos e métricas financeiras',
                'Interface minimalista focada no uso mobile',
                'Rápido direcionamento para uso e download'
              ]}
              tags={['Fintech', 'MobileFirst', 'Investimentos', 'UXMinimalista', 'React']}
              type="finance"
              actionLabel="Conhecer App Mobile"
              actionUrl="#contato"
              imageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=300&q=80"
            />
          </div>
        </div>
      </section>

      <AboutSection />
      <ContactSection />
    </div>
  );
}

