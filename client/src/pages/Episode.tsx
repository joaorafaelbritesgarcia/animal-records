import { useEffect, useRef } from "react";
import { Play, Volume2, Maximize, Settings } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modernismo Minimalista com Tipografia Ousada
 * - Página dedicada ao episódio de Miraculous Floptok
 * - Player de vídeo integrado com controles profissionais
 * - Aviso destacado com letras grandes
 */

export default function Episode() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Inicializar o player de vídeo
    const video = videoRef.current;
    if (video) {
      // Adicionar controles HTML5 nativos
      video.controls = true;
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-black font-montserrat text-foreground cursor-pointer">
            Animal Records
          </a>
          <div className="flex gap-4">
            <a
              href="/"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Início
            </a>
            <a
              href="/artists"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Artistas
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Announcement */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 to-white" />

        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-primary text-white px-6 py-3 rounded-full mb-6 font-bold">
              🎬 NOVO EPISÓDIO
            </div>
            <h1 className="text-7xl lg:text-8xl font-black font-montserrat text-foreground mb-6">
              Miraculous
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-primary mb-6">
              Floptok - Episódio Cancelado
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              O episódio tão esperado já está disponível! Assista agora e descubra o que acontece nesta aventura épica.
            </p>
            <button
              onClick={() => {
                const playerSection = document.getElementById("player-section");
                playerSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 bg-primary text-white font-montserrat font-bold px-10 py-5 rounded-sm hover:scale-105 transition-all duration-200 cursor-pointer border-0 text-xl"
              style={{
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)",
              }}
            >
              <Play size={28} />
              Assistir Agora
            </button>
          </div>
        </div>
      </section>

      {/* Video Player Section */}
      <section id="player-section" className="py-24 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Video Player */}
            <div className="relative bg-black aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full"
                controlsList="nodownload"
                poster="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=675&fit=crop"
              >
                <source src="/manus-storage/lv_0_20260524182542_clean_50109c39.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>

            {/* Video Info */}
            <div className="p-8">
              <h3 className="text-3xl font-bold font-montserrat text-foreground mb-4">
                Miraculous: Floptok - Episódio Cancelado
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Assista ao episódio exclusivo de Miraculous que foi cancelado. Uma produção especial da Animal Records com qualidade cinematográfica.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold">Duração</p>
                  <p className="text-lg font-bold text-foreground">45 min</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold">Qualidade</p>
                  <p className="text-lg font-bold text-foreground">Full HD</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold">Ano</p>
                  <p className="text-lg font-bold text-foreground">2026</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-semibold">Estúdio</p>
                  <p className="text-lg font-bold text-foreground">Animal Records</p>
                </div>
              </div>

              <button
                onClick={() => setLocation("/")}
                className="w-full bg-gray-100 hover:bg-gray-200 text-foreground font-semibold py-3 rounded-lg transition-colors"
              >
                Voltar para Início
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold font-montserrat mb-4">
                Animal Records
              </h4>
              <p className="text-gray-400">
                Gravadora, agência e produtora musical transformando sonhos em realidade.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold font-montserrat mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-primary transition-colors cursor-pointer">
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="/artists"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Artistas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold font-montserrat mb-4">
                Redes Sociais
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.tiktok.com/@animal_records_?_r=1&_t=ZS-96aeKMv1LGC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
            <p>&copy; 2026 Animal Records. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
