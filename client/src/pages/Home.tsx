import { Button } from "@/components/ui/button";
import { Mail, Music, Headphones } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modernismo Minimalista com Tipografia Ousada
 * - Bauhaus contemporâneo com influência do design suíço moderno
 * - Cores: Branco puro com neon elétrico (#00FF88) para CTAs
 * - Tipografia: Montserrat Bold para títulos, Inter para corpo
 * - Layout: Assimétrico com blocos desalinhados e espaço em branco estratégico
 */

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container flex items-center justify-between h-20">
          <div className="text-2xl font-black font-montserrat text-foreground">
            Animal Records
          </div>
          <div className="flex gap-4">
            <a
              href="/artists"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Artistas
            </a>
            <button
              onClick={() => setShowForm(true)}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Inscreva-se
            </button>
            <a
              href="https://www.tiktok.com/@animal_records_?_r=1&_t=ZS-96aeKMv1LGC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 relative overflow-hidden">
        {/* Background image with geometric overlay */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663684719473/eTbGvhP66rdsFzyY3omaBh/hero-background-UkPjbTBFJBaTMzqUfjNySP.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-white/85" />

        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content - Asymmetric positioning */}
            <div className="animate-fade-in-up">
              <h1 className="text-6xl lg:text-7xl font-black font-montserrat text-foreground mb-6 leading-tight">
                Animal Records
              </h1>
              <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-md">
                é uma agência, gravadora e produtora musical. Transformamos sonhos em realidade através da música.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-primary bg-primary text-white font-montserrat font-bold px-8 py-4 rounded-sm transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
                  style={{
                    boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
                  }}
                >
                  <Music size={20} />
                  Inscreva-se na agência agora!!!
                </button>
                <a
                  href="https://www.tiktok.com/@animal_records_?_r=1&_t=ZS-96aeKMv1LGC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-2 border-foreground text-foreground font-montserrat font-bold px-8 py-4 rounded-sm transition-all duration-200 hover:bg-foreground hover:text-white inline-flex items-center justify-center gap-2"
                >
                  <Headphones size={20} />
                  Entre em contato!!!
                </a>
              </div>
            </div>

            {/* Right side - Decorative element */}
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="w-96 h-96 rounded-lg opacity-80"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663684719473/eTbGvhP66rdsFzyY3omaBh/abstract-music-pattern-NycVGjhuPUHFNbX6cXBmAS.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container">
          <h2 className="text-5xl font-black font-montserrat text-foreground mb-16 text-center">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Music className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-foreground mb-4">
                Produção Musical
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Criamos trilhas sonoras de alta qualidade para seus projetos, com produção profissional e equipamento de ponta.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Headphones className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-foreground mb-4">
                Agência de Talentos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Representamos artistas talentosos e gerenciamos suas carreiras com estratégia e dedicação.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-foreground mb-4">
                Consultoria
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecemos consultoria especializada para artistas e produtores que desejam crescer no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-foreground z-10"
            >
              ✕
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-black font-montserrat text-foreground mb-6">
                Inscreva-se na Animal Records
              </h2>

              {/* Embedded Google Form */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe4u9_XRu_1XWvTIOHDIuDMcavhCO82XOLmFC7BwLtoAo1EPg/viewform?embedded=true"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                Carregando…
              </iframe>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold font-montserrat mb-4">Animal Records</h4>
              <p className="text-gray-300">
                Transformando sonhos em realidade através da música.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold font-montserrat mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="/artists"
                    className="hover:text-primary transition-colors"
                  >
                    Artistas
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setShowForm(true)}
                    className="hover:text-primary transition-colors"
                  >
                    Inscreva-se
                  </button>
                </li>
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
            <div>
              <h4 className="text-lg font-bold font-montserrat mb-4">Contato</h4>
              <p className="text-gray-300">
                Entre em contato através de nossas redes sociais
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Animal Records. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
