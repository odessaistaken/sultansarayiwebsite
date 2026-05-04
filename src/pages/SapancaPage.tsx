import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Waves,
  Flame,
  UtensilsCrossed,
  Wifi,
  Sparkles,
  Mountain,
} from 'lucide-react';
import Header from '../components/Header';
import ScrollReveal from '../components/ScrollReveal';
import FeatureGrid from '../components/FeatureGrid';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import villaImg from '../assets/sapanca_resim1.png';
import manzara from '../assets/sapanca_resim2.png';
import bungresim from '../assets/sapanca_resim3.png';
import yatakresim from '../assets/sapanca_resim4.png';
import bungalovs from '../assets/sapanca_resim5.png';

const bunglowFeatures = [
  {
    icon: <Waves className="w-6 h-6" />,
    title: 'Özel Havuz',
    description: 'Her bungalonda özel dışarı havuz, huzurlu bir tatil deneyimi için.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Jakuzi',
    description: 'Rahatlatıcı jakuzi, doğanın içinde sakinleşmek için mükemmel.',
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: 'Şömine',
    description: 'Kışın sıcak ve konforlu ortam, romatic akşamlar için.',
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: 'BBQ Alanı',
    description: 'Tam donanımlı bahçe barbekü, dış mekan yemek için.',
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: 'Yüksek Hızlı WiFi',
    description: 'Bağlı kalın, dünyayla iletişim halinde olun.',
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    title: 'Doğa Aktiviteleri',
    description: 'Göl kenarında yürüyüş ve macera aktiviteleri.',
  },
];

const galleryImages = [
  villaImg,
  bungresim,
  yatakresim,
];

export default function SapancaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black overflow-x-hidden">
      <Header title="Sultan Sarayı Sapanca" accentColor="amber" />

      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] mt-14 md:mt-20">
        <img
          src={bungalovs}
          alt="Sapanca Bungalows"
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
            <span className="text-amber-400 uppercase tracking-[0.3em] text-[10px] sm:text-xs font-sans font-semibold">
              Lüks Bungalov Kaçamağı
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white font-serif my-3 md:my-4 leading-tight">
              Sultan Sarayı Sapanca
            </h1>
            <p className="text-white/80 text-sm sm:text-lg md:text-xl font-light font-sans max-w-xl mx-auto mb-8 leading-relaxed px-2">
              Doğanın kalbinde, Sapanca Gölü'nün kenarında lüks bungalolarımızda
              unutulmaz anılar yaratın.
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

      {/* Features Section */}
      <FeatureGrid
        features={bunglowFeatures}
        title="Konaklama Birimleri"
        subtitle="Her bungaloda bulacağınız özel özellikleri keşfedin"
        accentColor="amber"
      />

      {/* About Section */}
      <section className="py-14 md:py-24 px-5 sm:px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-block border-b pb-2 mb-4 text-amber-400 border-amber-400/30">
                  <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
                    Aktiviteler
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif mb-4 leading-tight">
                  Doğa ile İç İçe
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light font-sans mb-4">
                  Sapanca Gölü'nün güzel doğasında kayıkla tur, balık tutma veya sahil yürüyüşü yapın.
                  Dağ bisikleti, yüzme ve piknik gibi aktiviteleri keşfedin.
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light font-sans">
                  Her mevsimde farklı bir güzellik sunacak, bölge size dışarıya çıkma ve hayatı
                  daha doğal hale getirmek için bir davetiye sunar.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 mt-4 md:mt-0">
                <img
                  src={manzara}
                  alt="Nature activities"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery images={galleryImages} title="Fotoğraf Galerisi" accentColor="amber" />

      {/* Booking Form */}
      <BookingForm
        title="Rezervasyon Yap"
        subtitle="Size en uygun tarihte lüks bungalovu rezerve etmek için bizimle iletişime geçin"
        formType="sapanca"
        accentColor="amber"
      />

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/10 py-10 sm:py-12 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-white text-lg font-serif font-bold mb-2">Sultan Sarayı Sapanca</h3>
          <p className="text-white/60 text-sm font-sans mb-4">
            Sapanca Gölü Kenarı, Sapanca / Sakarya, Türkiye
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 text-white/40 text-xs font-sans mb-6">
            <span>+90 (264) 555 0000</span>
            <span className="hidden sm:inline">·</span>
            <span>info@sultansarayisapanca.com</span>
          </div>
          <p className="text-white/30 text-xs font-sans">
            © 2026 Sultan Sarayı. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
