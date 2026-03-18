'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const paletteColors = [
  { name: 'Emerald Green', hex: '#10B981' },
  { name: 'Royal Purple', hex: '#6366F1' },
  { name: 'Orange Burst', hex: '#F97316' },
];

const tabsData = [
  {
    id: 'quem-somos',
    title: 'Quem Somos',
    content: (
      <div className="flex flex-col md:flex-row-reverse gap-8 animate-fadeIn">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-emerald-400">Sobre a FlowerBush.web</h3>
          <p className="text-stone-300">
            Somos uma Equipe de Desenvolvimento de Software do curso Engenharia de Computação do IFMS Campus Três Lagoas focados em web e inovação.
          </p>
          <p className="text-stone-300">
            Nossa missão é transformar linhas de código em soluções orgânicas e eficientes pensadas especialmente em você e na sua empresa.
          </p>
          <p className="text-stone-300">
            Com uma abordagem colaborativa e criativa, buscamos criar sistemas que <strong>floresçam</strong> em qualquer ambiente digital, entregando resultados que superem expectativas.
          </p>
        </div>

        <div className="relative w-64 h-64 mx-auto md:mx-0 border-2 border-[#6366F1] rounded-lg overflow-hidden group shrink-0">
          <Image 
            src="/flower-bush-logo.png"
            alt="Logo da Equipe"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#6366F1]/10 pointer-events-none" />
        </div>
      </div>
    )
  },
  {
    id: 'o-time',
    title: 'O Time',
    content: (
      <div className="flex flex-col md:flex-row-reverse gap-8 animate-fadeIn text-left">
        <div className="relative w-64 h-64 mx-auto md:mx-0 border-2 border-[#6366F1] rounded-lg overflow-hidden group shrink-0">
          <Image 
            src="/equipe.png"
            alt="Foto da Equipe feita pelo Gemini"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

        <div className="absolute inset-0 bg-[#6366F1]/10 pointer-events-none" />
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-emerald-400">Nossa Equipe</h3>
            <p className="text-stone-300">
              Nossa equipe é formada por <strong>5 desenvolvedores</strong> comprometidos, apaixonados pelo que fazem e prontos para transformar suas ideias em realidade digital.
            </p>
            <p className="text-stone-300">
              Com habilidades que vão desde o frontend até o backend, cada membro traz uma perspectiva única e valiosa para nossos projetos, garantindo soluções criativas e eficientes pensadas para você!
            </p>
          </div>
      </div>
    ) 
  },
  {
    id: 'projetos',
    title: 'Projetos',
    content: (
      <div className="flex flex-col md:flex-row md:items-start gap-8 animate-fadeIn text-left">
      
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-emerald-400">O Que Fazemos e Nossas Soluções</h3>
            <p className="text-stone-300">
              Conheça os sistemas open-source e as ferramentas digitais desenvolvidas com a <strong>engenharia</strong> da FlowerBush.
            </p>
            <p className="text-stone-300">
              Aqui, desenvolvemos sistemas integrados, plataformas web e soluções tecnológicas com foco na experiência do usuário.
            </p>
            <p className="text-stone-300">
              Acesse nosso repositório no GitHub para explorar nossos projetos, contribuir ou simplesmente conhecer o que estamos construindo.
            </p>
          </div>

          <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
            <div className="relative w-full max-w-sm md:max-w-none md:w-96 aspect-video mx-auto md:mx-0 border-2 border-[#6366F1] rounded-lg overflow-hidden group">
              <Image 
                src="/code1.png"
                alt="Código Exemplo da própria página"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#6366F1]/10 pointer-events-none" />
            </div>
            
            <div className="flex justify-center md:justify-start w-full">
              <a 
                href="https://github.com/isamartins-engcomput/FlowerBush.web" 
                target="_blank" 
                className="inline-flex items-center w-full md:w-full justify-center gap-3 px-5 py-3 bg-stone-900/50 border border-[#F97316] rounded-lg hover:bg-[#F97316]/20 transition-all group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#F97316] group-hover:scale-110 transition-transform">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-stone-500 uppercase font-bold">Repositório</span>
                  <span className="text-sm text-stone-200">github.com/flowerbush.web</span>
                </div>
              </a>
            </div>
          </div>
      </div>
    )
  },
  {
    id: 'contato',
    title: 'Fale Conosco',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 animate-fadeIn text-left">
        
        <div className="space-y-6 md:col-start-1 md:row-start-1">
          <h3 className="text-2xl font-bold text-emerald-400">Conecte-se com a gente</h3>
          <p className="text-stone-300">
            <strong>Precisa de uma solução tecnológica inovadora?</strong>
          </p>
          <p className="text-stone-300">
            Escolha um de nossos canais oficiais para iniciar uma conversa e fale com a nossa equipe para orçamentos, dúvidas ou parcerias.
          </p>
          <p className="text-stone-300">
            Estamos ansiosos para ouvir suas ideias e ajudar a transformá-las em realidade digital!
          </p>
        </div>

        <div className="relative w-64 h-64 mx-auto md:mx-0 border-2 border-[#6366F1] rounded-lg overflow-hidden group shrink-0 md:col-start-2 md:row-start-1 md:row-span-2">
          <Image 
            src="/contato.webp"
            alt="Pessoa digitando em um celular"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#6366F1]/10 pointer-events-none" />
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:col-start-1 md:row-start-2">
          <a 
            href="https://instagram.com/isadoramartins1906" 
            target="_blank" 
            className="flex items-center gap-3 px-5 py-3 bg-stone-900/50 border border-[#6366F1] rounded-lg hover:bg-[#6366F1]/20 transition-all group"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#6366F1] group-hover:scale-110 transition-transform">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-xs text-stone-500 uppercase font-bold">Instagram</span>
              <span className="text-sm text-stone-200">@FlowerBush.web</span>
            </div>
          </a>

          <a 
            href="https://wa.me/67992456668" 
            target="_blank" 
            className="flex items-center gap-3 px-5 py-3 bg-stone-900/50 border border-[#10B981] rounded-lg hover:bg-[#10B981]/20 transition-all group"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#10B981] group-hover:scale-110 transition-transform">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-xs text-stone-500 uppercase font-bold">WhatsApp</span>
              <span className="text-sm text-stone-200">Enviar Mensagem</span>
            </div>
          </a>
        </div>
      </div>
    )
  },
  {
    id: 'localizacao',
    title: 'Localização',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 animate-fadeIn text-left">
        
        <div className="space-y-4 md:col-start-1 md:row-start-1">
          <h3 className="text-2xl font-bold text-emerald-400">Onde nos Encontrar</h3>
          <p className="text-stone-300">
            Estamos sediados no Instituto Federal de Mato Grosso do Sul (IFMS) - Campus Três Lagoas.
          </p>
          <p className="text-stone-300">
            Venha nos visitar para conhecer nossa equipe, discutir projetos ou simplesmente <strong>tomar um café</strong> e falar sobre tecnologia!
          </p>
        </div>

        <div className="relative w-64 h-64 mx-auto md:mx-0 border-2 border-[#6366F1] rounded-lg overflow-hidden group shrink-0 md:col-start-2 md:row-start-1 md:row-span-2">
          <Image 
            src="/cafe.jpeg"
            alt="Mão segurando uma xícara de café do IFMS"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#6366F1]/10 pointer-events-none" />
        </div>

        <div className="flex justify-center md:justify-start pt-4 md:pt-0 md:col-start-1 md:row-start-2">
          <a 
            href="https://maps.app.goo.gl/8B1pB6Yn28FC5TEk7?g_st=aw" 
            target="_blank" 
            className="inline-flex items-center gap-3 px-5 py-3 bg-stone-900/50 border border-[#F97316] rounded-lg hover:bg-[#F97316]/20 transition-all group"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#F97316] group-hover:scale-110 transition-transform">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-xs text-stone-500 uppercase font-bold">Localização</span>
              <span className="text-sm text-stone-200">IFMS - Campus Três Lagoas</span>
            </div>
          </a>
        </div>

      </div>
    )
  },
];

const FallingFlowers = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    const numParticles = 20;
    const spacing = 100 / numParticles;

    const generatedParticles = Array.from({ length: numParticles }).map((_, i) => ({
      id: i,
      left: (i * spacing) + (Math.random() * (spacing / 2)), 
      delay: Math.random() * 15, 
      duration: 12 + Math.random() * 15,
      size: 20 + Math.random() * 25
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Esta é a classe que estava faltando */
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .flower-particle {
          position: absolute;
          opacity: 0;
          animation: fall linear infinite both;
        }
      `}</style>
      {particles.map((p) => (
        <img
          key={p.id}
          src="/flor.png"
          alt=""
          className="flower-particle"
          style={{
            left: `${p.left}vw`,
            animationDelay: `-${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <main 
      className="min-h-screen bg-background text-foreground font-sans flex flex-col relative overflow-x-hidden"
      style={{ fontFamily: '"Liberation Mono", monospace' }}
    >
      
      <FallingFlowers />

      <header className="flex items-center justify-between w-full p-4 md:p-6 border-b border-stone-800 bg-black/20 md:bg-black/50 backdrop-blur-sm sticky top-0 z-50 gap-8 overflow-x-auto whitespace-nowrap scroll-smooth">
        
        <div className="flex items-center gap-3 shrink-0">
          <Image 
            src="/flor.png" 
            alt="Ícone Flower Bush" 
            width={40} 
            height={40}
            className="rounded-lg shadow-sm shadow-emerald-900"
          />
          <h1 className="text-xl font-bold tracking-tighter text-emerald-400">FlowerBush.web</h1>
        </div>

        <nav className="flex items-center gap-4 font-medium shrink-0">
            <a href="#home" className="text-stone-300 hover:text-emerald-400 transition-colors">Home</a>

            <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
            <a href="#sobre" onClick={() => setActiveTab('quem-somos')} className="text-stone-300 hover:text-emerald-400 transition-colors">Sobre</a>

            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
            <a href="#sobre" onClick={() => setActiveTab('o-time')} className="text-stone-300 hover:text-emerald-400 transition-colors">Nosso Time</a>

            <div className="w-2 h-2 rounded-full bg-[#F97316]" />
            <a href="#sobre" onClick={() => setActiveTab('projetos')} className="text-stone-300 hover:text-emerald-400 transition-colors">Produtos</a>

            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
            <a href="#sobre" onClick={() => setActiveTab('contato')} className="text-stone-300 hover:text-emerald-400 transition-colors">Contato</a>

            <div className="w-2 h-2 rounded-full bg-[#6366F1]" />
            <a href="#sobre" onClick={() => setActiveTab('localizacao')} className="text-stone-300 hover:text-emerald-400 transition-colors">Localização</a>
      </nav>
      </header>

      <section id="home" className="flex flex-col items-center justify-start pt-0 pb-20 px-4 text-center">
        
        <div className="relative -mb-5 max-w-xs w-full z-40">
          <Image 
            src="/caule.png" 
            alt="Flor com Caule"
            width={400}
            height={400}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="relative mb-0 max-w-md w-full z-20">
          <Image 
            src="/nomeMlr.png" 
            alt="Nome FlowerBush.web"
            width={500}
            height={150}
            className="w-full h-auto"
          />
        </div>

        <div className="relative flex items-center justify-center gap-6 p-3 bg-black border border-stone-800 rounded-full shadow-inner shadow-black/50 z-40 mt-4">
          {paletteColors.map((color) => (
            <div
              key={color.hex}
              className="relative group flex items-center justify-center"
              onMouseEnter={() => setHoveredColor(color.hex)}
              onMouseLeave={() => setHoveredColor(null)}
            >
              <div
                style={{ backgroundColor: color.hex }}
                className="w-12 h-12 rounded-full border-4 border-black/80 shadow-md transition-transform duration-200 ease-in-out cursor-pointer hover:scale-110"
              />

              {hoveredColor === color.hex && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-stone-950 font-mono text-xs px-3 py-1.5 rounded-md shadow-lg pointer-events-none whitespace-nowrap">
                  {color.hex}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="w-full max-w-4xl mx-auto px-4 pb-24 relative z-40">
        <div className="bg-black/30 backdrop-blur-sm md:bg-black/60 md:backdrop-blur-md border border-[#6366F1] rounded-xl shadow-2xl overflow-visible">
          <div className="flex items-center justify-between bg-stone-950/40 border-b border-[#6366F1] rounded-t-xl pr-4">
            <div className="flex overflow-x-auto no-scrollbar">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-2.5 text-base whitespace-nowrap transition-colors border-r border-[#6366F1] first:rounded-tl-xl ${
                    activeTab === tab.id
                      ? 'bg-black/40 text-[#F97316] font-bold'
                      : 'bg-transparent text-stone-500 font-medium hover:bg-stone-900/30 hover:text-stone-300'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="flex gap-2 shrink-0 ml-2">
              {paletteColors.map((color) => (
                <div
                  key={`terminal-dot-${color.hex}`}
                  className="relative group flex items-center justify-center"
                >
                  <div
                    style={{ backgroundColor: color.hex }}
                    className="w-3 h-3 rounded-full cursor-pointer group-hover:scale-125 transition-transform"
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-stone-950 font-mono text-[10px] px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {color.hex}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 min-h-[300px]">
            <div className="flex items-center gap-2 mb-6 font-mono text-sm text-emerald-500 opacity-80">
              <span>root@flowerbush:~/{activeTab}#</span>
              <span className="w-2 h-4 bg-emerald-500 animate-pulse"></span>
            </div>
            <div key={activeTab}>
              {tabsData.find(tab => tab.id === activeTab)?.content}
            </div>
          </div>
          </div>
      </section>
    </main>
  );
}