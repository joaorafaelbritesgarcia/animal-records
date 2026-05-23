import { Music, ExternalLink, Play } from "lucide-react";

/**
 * Design Philosophy: Modernismo Minimalista com Tipografia Ousada
 * - Página dedicada aos artistas do Spotify da Animal Records
 * - Integração com Spotify Embed para mostrar catálogos
 * - Layout assimétrico com cards de artistas
 */

export default function Artists() {
  const artists = [
    {
      name: "Lady Safa",
      role: "Cantora & Artista",
      description:
        "Lady Safa é uma artista talentosa representada pela Animal Records. Sua música combina elementos modernos com autenticidade e criatividade.",
      spotifyId: "7Eo0lITjAqLmrFWPMCDYtG",
      spotifyEmbed:
        "https://open.spotify.com/embed/artist/7Eo0lITjAqLmrFWPMCDYtG",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663684719473/eTbGvhP66rdsFzyY3omaBh/abstract-music-pattern-NycVGjhuPUHFNbX6cXBmAS.webp",
    },
    {
      name: "Passarilha",
      role: "Cantora & Artista",
      description:
        "Passarilha é uma artista da Animal Records com um som único e envolvente. Suas produções refletem inovação e dedicação à música.",
      spotifyId: "6ijeN3MhwnbRfo86gH5McZ",
      spotifyEmbed:
        "https://open.spotify.com/embed/artist/6ijeN3MhwnbRfo86gH5McZ",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663684719473/eTbGvhP66rdsFzyY3omaBh/studio-aesthetic-mmwG7g28dE4vbyRi9ZKs7B.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-black font-montserrat text-foreground">
            Animal Records
          </a>
          <div className="flex gap-4">
            <a
              href="/"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="/artists"
              className="text-sm font-semibold text-primary transition-colors"
            >
              Artistas
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />

        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl lg:text-7xl font-black font-montserrat text-foreground mb-6">
              Artistas no Spotify
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Conheça os talentosos artistas representados pela Animal Records. Ouça suas músicas, explore seus catálogos e descubra novos sons.
            </p>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Artist Card */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg">
                  {/* Artist Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-3xl font-black font-montserrat text-white mb-2">
                        {artist.name}
                      </h2>
                      <p className="text-sm text-gray-200 font-semibold">
                        {artist.role}
                      </p>
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {artist.description}
                    </p>

                    {/* Spotify Links */}
                    <div className="flex gap-4 mb-8">
                      <a
                        href={`https://open.spotify.com/artist/${artist.spotifyId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-white font-montserrat font-bold px-6 py-3 rounded-sm hover:scale-105 transition-all duration-200"
                        style={{
                          boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)",
                        }}
                      >
                        <Music size={18} />
                        Ouça no Spotify
                      </a>
                      <a
                        href={`https://open.spotify.com/artist/${artist.spotifyId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border-2 border-foreground text-foreground font-montserrat font-bold px-6 py-3 rounded-sm hover:bg-foreground hover:text-white transition-all duration-200"
                      >
                        <ExternalLink size={18} />
                        Perfil
                      </a>
                    </div>

                    {/* Spotify Stats */}
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-sm text-gray-600 mb-4">
                        Explore o catálogo completo de {artist.name} no Spotify
                      </p>
                      <a
                        href={`https://open.spotify.com/artist/${artist.spotifyId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      >
                        <Play size={16} />
                        Ver todas as músicas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lançamentos Recentes Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-5xl font-black font-montserrat text-foreground mb-16 text-center">
            Lançamentos Recentes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lady Safa Releases */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold font-montserrat text-foreground mb-8">
                Lady Safa
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Single • 2026</p>
                  <h4 className="text-lg font-bold font-montserrat text-foreground mb-2">
                    Ana Júlia
                  </h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Novo lançamento de Lady Safa, disponível em todas as plataformas.
                  </p>
                  <a
                    href="https://open.spotify.com/search/Lady%20Safa%20Ana%20J%C3%BAlia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    <Play size={16} />
                    Ouvir no Spotify
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Single • 2026</p>
                  <h4 className="text-lg font-bold font-montserrat text-foreground mb-2">
                    Siricou (feat. Passarilha)
                  </h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Colaboração especial entre Lady Safa e Passarilha, produzido pela Animal Records.
                  </p>
                  <a
                    href="https://open.spotify.com/search/Siricou%20Lady%20Safa%20Passarilha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    <Play size={16} />
                    Ouvir no Spotify
                  </a>
                </div>
              </div>
            </div>

            {/* Passarilha Releases */}
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-2xl font-bold font-montserrat text-foreground mb-8">
                Passarilha
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                  <p className="text-sm text-gray-600 font-semibold mb-2">EP • 2026</p>
                  <h4 className="text-lg font-bold font-montserrat text-foreground mb-2">
                    7IMITE
                  </h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Novo EP de Passarilha com produções exclusivas e inovadoras.
                  </p>
                  <a
                    href="https://open.spotify.com/search/Passarilha%207IMITE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    <Play size={16} />
                    Ouvir no Spotify
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Single • 2026</p>
                  <h4 className="text-lg font-bold font-montserrat text-foreground mb-2">
                    Elas Chegaram (feat. Arita Blues)
                  </h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Colaboração de Passarilha com Arita Blues em um single envolvente.
                  </p>
                  <a
                    href="https://open.spotify.com/search/Passarilha%20Elas%20Chegaram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    <Play size={16} />
                    Ouvir no Spotify
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotify Embeds Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl font-black font-montserrat text-foreground mb-16 text-center">
            Ouça Agora
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <h3 className="text-2xl font-bold font-montserrat text-foreground mb-6">
                  {artist.name}
                </h3>
                <div className="w-full">
                  <iframe
                    src={`${artist.spotifyEmbed}?utm_source=generator`}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-foreground text-white">
        <div className="container text-center">
          <h2 className="text-5xl font-black font-montserrat mb-6">
            Quer trabalhar com a Animal Records?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Se você é um artista talentoso e deseja fazer parte do nosso catálogo, entre em contato conosco!
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white font-montserrat font-bold px-8 py-4 rounded-sm hover:scale-105 transition-all duration-200"
            style={{
              boxShadow: "0 0 20px rgba(0, 255, 136, 0.4)",
            }}
          >
            <Music size={20} />
            Voltar para Início
          </a>
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
                  <a href="/" className="hover:text-primary transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="/artists"
                    className="hover:text-primary transition-colors"
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
