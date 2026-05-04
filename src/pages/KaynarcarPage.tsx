import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Music,
  ChefHat,
  Crown,
  Sparkles,
  Heart,
} from 'lucide-react';
import Header from '../components/Header';
import ScrollReveal from '../components/ScrollReveal';
import FeatureGrid from '../components/FeatureGrid';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';

const HERO_BG = '';

const eventServices = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Düğün Hizmetleri',
    description: 'Görkemli düğünler için tam hizmet. Dekorasyon, katering ve tüm detaylar.',
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: 'Kına Geceleri',
    description: 'Geleneksel kına geceleri için özel tasarlanmış salon.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Kurumsal Etkinlikler',
    description: 'Konferans, seminer ve toplantılar için eksiksiz imkanlar.',
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Sahne ve Ses Sistemi',
    description: 'Profesyonel ses, ışık ve sahne teknolojisi.',
  },
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: 'Gourmet Katering',
    description: 'Şef rehberliğinde lezzetli yemekler ve sunum.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Gelin Odası',
    description: 'Lüks gelin odası, dinlenme ve hazırlık için.',
  },
];

const galleryImages = [
  'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1144099/pexels-photo-1144099.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1144098/pexels-photo-1144098.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

export default function KaynarcarPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black overflow-x-hidden">
      <Header title="Sultan Sarayı Kaynarca" accentColor="rose" />

      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] mt-14 md:mt-20">
        <img
          src={HERO_BG}
          alt="Kaynarca Event Hall"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

        <div className="relative h-full flex flex-col items-center justify-center px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl"
          >
            <span className="text-rose-300 uppercase tracking-[0.3em] text-[10px] sm:text-xs font-sans font-semibold">
              Prestij ve Zarafet
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white font-serif my-3 md:my-4 leading-tight">
              Sultan Sarayı Kaynarca
            </h1>
            <p className="text-white/80 text-sm sm:text-lg md:text-xl font-light font-sans max-w-xl mx-auto mb-8 leading-relaxed px-2">
              Hayalinizdeki etkinliği gerçekleştirmek için mükemmel mekan. Düğünler,
              kına geceleri ve kurumsal etkinlikler için hazırız.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 sm:bottom-10 flex flex-col items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white/40 text-[10px] uppercase tracking-widest font-sans">
              Aşağı Kaydır
            </span>
            <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <FeatureGrid
        features={eventServices}
        title="Hizmetlerimiz"
        subtitle="Her etkinlik için kapsamlı ve profesyonel hizmetler"
        accentColor="rose"
      />

      {/* Hall Features Section */}
      <section className="py-14 md:py-24 px-5 sm:px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-block border-b pb-2 mb-4 text-rose-400 border-rose-400/30">
                <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
                  Salon Özellikleri
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif">
                Eksiksiz İmkanlar
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {[
              {
                title: 'Kapasite',
                details: [
                  'Ana salon: 1000 kişi',
                  'VIP alan: 300 kişi',
                  'Kokteyl alanı: 500+ kişi',
                ],
              },
              {
                title: 'Teknik Donanım',
                details: [
                  'Profesyonel ses sistemi',
                  'HD projeksiyon ve ekranlar',
                  'Özel sahne aydınlatması',
                  'WiFi ve canlı yayın kapasitesi',
                ],
              },
              {
                title: 'Catering & Tesis',
                details: [
                  'Profesyonel mutfak',
                  'Lüks gelin odası',
                  'VIP misafir odası',
                  'Otopark (300+ araç)',
                ],
              },
            ].map((section, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg p-6 sm:p-8 h-full">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-white/70 text-sm font-sans font-light flex items-start gap-3"
                      >
                        <span className="text-rose-400 mt-1 flex-shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery images={galleryImages} title="Etkinlik Galerisi" accentColor="rose" />

      {/* Booking Form */}
      <BookingForm
        title="Teklif Talep Et"
        subtitle="Etkinliğiniz için özel bir teklif almak için formu doldurun"
        formType="kaynarca"
        accentColor="rose"
      />

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/10 py-10 sm:py-12 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-white text-lg font-serif font-bold mb-2">Sultan Sarayı Kaynarca</h3>
          <p className="text-white/60 text-sm font-sans mb-4">
            Kaynarca Sahil Yolu, Kaynarca / Sakarya, Türkiye
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 text-white/40 text-xs font-sans mb-6">
            <span>+90 (264) 555 0001</span>
            <span className="hidden sm:inline">·</span>
            <span>events@sultansarayikaynarca.com</span>
          </div>
          <p className="text-white/30 text-xs font-sans">
            © 2024 Sultan Sarayı. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
