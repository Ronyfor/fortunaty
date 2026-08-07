import React from 'react';
import { ArrowUpRight, Gamepad2, TrendingUp } from 'lucide-react';

interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  type: 'game' | 'finance';
  actionLabel?: string;
  actionUrl?: string;
  highlights?: string[];
  videoUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({ 
  id,
  title, 
  description, 
  category, 
  tags, 
  type,
  actionLabel,
  actionUrl,
  highlights,
  videoUrl,
  imageUrl
}: ProjectCardProps) {
  const isGame = type === 'game';

  return (
    <div 
      id={id}
      className="bg-neutral-900/90 border border-neutral-800/90 rounded-2xl p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-900 group orange-glow-hover flex flex-col justify-between scroll-mt-24"
    >
      <div>
        {/* Bloco Visual Modular do Projeto / Preview */}
        <div className="w-full h-52 rounded-xl bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-800 p-4 mb-6 flex flex-col justify-between relative overflow-hidden group-hover:border-neutral-700 transition-colors">
          
          {/* Se houver vídeo, renderiza o vídeo em loop como fundo do preview */}
          {videoUrl ? (
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-neutral-950">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40 z-10 pointer-events-none"></div>
              <video 
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          ) : imageUrl ? (
            /* Se houver imagem (como um app mobile), renderiza dentro de um mockup de smartphone minimalista no centro */
            <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center bg-neutral-950/50 p-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              {/* Celular Minimalista */}
              <div className="w-[140px] h-[220px] rounded-[24px] border-[4px] border-neutral-800 bg-neutral-900 shadow-2xl relative overflow-hidden transform translate-y-4 group-hover:translate-y-2 group-hover:rotate-1 transition-all duration-500 flex flex-col">
                {/* Câmera/Notch do celular */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2 bg-neutral-800 rounded-full z-20"></div>
                
                {/* Print da Imagem */}
                <img 
                  src={imageUrl} 
                  alt={`Screenshot de ${title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ) : (
            /* Fallback com brilho abstrato de fundo */
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-500 pointer-events-none"></div>
          )}
          
          {/* Elementos flutuantes de cabeçalho no preview */}
          <div className="flex justify-between items-center z-10">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-950/90 border border-orange-500/20 text-orange-400 backdrop-blur-sm">
              {category}
            </span>
            <div className="w-9 h-9 rounded-lg bg-neutral-950/90 border border-neutral-800 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform backdrop-blur-sm">
              {isGame ? <Gamepad2 className="w-5 h-5" /> : <TrendingUp className="w-5 h-5" />}
            </div>
          </div>

          {/* Elementos flutuantes de rodapé no preview (apenas se não houver vídeo/imagem cobrindo) */}
          {(!videoUrl && !imageUrl) && (
            <div className="z-10 bg-neutral-950/80 border border-neutral-800/80 rounded-lg p-3 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5 font-mono">
                <span>{isGame ? "Fortunaty Studio • Vercel" : "Mobile App • iOS & Android"}</span>
                <span className="text-orange-400 text-[10px]">● ONLINE</span>
              </div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-orange-500 h-full rounded-full transition-all duration-1000 group-hover:w-full" 
                  style={{ width: isGame ? '85%' : '92%' }}
                ></div>
              </div>
            </div>
          )}

          {/* Indicador sutil de Status flutuando no canto quando há vídeo ou imagem */}
          {(videoUrl || imageUrl) && (
            <div className="z-10 flex items-center justify-between w-full mt-auto bg-neutral-950/70 border border-neutral-800/30 rounded-lg p-1.5 px-2.5 backdrop-blur-md">
              <span className="text-[10px] font-mono text-neutral-400">
                {isGame ? "Top Rush • Gameplay" : "Plantei Ativos • Interface"}
              </span>
              <span className="text-[9px] font-mono text-orange-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                LIVE PREVIEW
              </span>
            </div>
          )}
        </div>

        <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300 flex items-center justify-between">
          <span>{title}</span>
          <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Destaques em tópicos */}
        {highlights && highlights.length > 0 && (
          <ul className="mb-6 space-y-1.5">
            {highlights.map((item, idx) => (
              <li key={idx} className="text-xs text-neutral-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {/* Botão de ação (se fornecido) */}
        {actionLabel && (
          <a
            href={actionUrl || "#"}
            target={actionUrl ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="w-full mb-4 py-2.5 px-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-orange-500/50 text-neutral-200 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all duration-300 hover:bg-neutral-900"
          >
            <span>{actionLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
          </a>
        )}

        {/* Tags tecnológicas */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs text-neutral-400 font-mono bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

