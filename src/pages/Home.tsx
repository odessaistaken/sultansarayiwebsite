
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import bungalovs from '../assets/sapanca_resim5.png';

const SAPANCA_BG =
  bungalovs;
const KAYNARCA_BG =
  'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600';

type Side = 'sapanca' | 'kaynarca' | null;

export default function Home() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<Side>(null);

  const getWidth = (side: Side) => {
    if (hovered === null) return '50%';
    if (hovered === side) return '65%';
    return '35%';
  };

  const getOverlayOpacity = (side: Side) => {
    if (hovered === null) return 0.52;
    if (hovered === side) return 0.32;
    return 0.7;
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* ── Desktop: side-by-side ── */}
      <div className="hidden md:flex w-full h-full">
        {/* Left — Sapanca */}
        <motion.section
          className="relative h-full overflow-hidden cursor-pointer"
          animate={{ width: getWidth('sapanca') }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          onHoverStart={() => setHovered('sapanca')}
          onHoverEnd={() => setHovered(null)}
        >
          <img
            src={SAPANCA_BG}
            alt="Sapanca bungalov"
            className="absolute inset-0 w-full h-full object-cover scale-[1.04]"
          />
          <motion.div
            className="absolute inset-0 bg-black"
            animate={{ opacity: getOverlayOpacity('sapanca') }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-12 pb-16">
            <motion.span
              className="text-amber-400 uppercase tracking-[0.3em] text-[11px] font-sans font-semibold mb-5 block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Doğa &amp; Lüks
            </motion.span>
            <h1 className="text-white text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.15] mb-3 drop-shadow-lg font-serif">
              Sultan Sarayı<br />
              <span className="text-amber-300">Sapanca</span>
            </h1>
            <p className="text-white/75 text-base xl:text-lg font-sans font-light max-w-[280px] leading-relaxed mb-9">
              Lüks Bungalov Tatili ve<br />Doğa Kaçamakları
            </p>
            <button
              onClick={() => navigate('/sapanca')}
              className="group inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-7 py-4 transition-all duration-300 shadow-lg hover:shadow-amber-500/40 cursor-pointer border-none"
            >
              Sapanca'yı Keşfet
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </motion.section>

        {/* Right — Kaynarca */}
        <motion.section
          className="relative h-full overflow-hidden cursor-pointer"
          animate={{ width: getWidth('kaynarca') }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          onHoverStart={() => setHovered('kaynarca')}
          onHoverEnd={() => setHovered(null)}
        >
          <img
            src={KAYNARCA_BG}
            alt="Kaynarca düğün salonu"
            className="absolute inset-0 w-full h-full object-cover scale-[1.04]"
          />
          <motion.div
            className="absolute inset-0 bg-black"
            animate={{ opacity: getOverlayOpacity('kaynarca') }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col items-end justify-end p-12 pb-16 text-right">
            <motion.span
              className="text-rose-300 uppercase tracking-[0.3em] text-[11px] font-sans font-semibold mb-5 block"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Zarafet &amp; Prestij
            </motion.span>
            <h1 className="text-white text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.15] mb-3 drop-shadow-lg font-serif">
              Sultan Sarayı<br />
              <span className="text-rose-300">Kaynarca</span>
            </h1>
            <p className="text-white/75 text-base xl:text-lg font-sans font-light max-w-[280px] leading-relaxed mb-9">
              Unutulmaz Düğünler ve<br />Organizasyonlar
            </p>
            <button
              onClick={() => navigate('/kaynarca')}
              className="group inline-flex items-center gap-3 bg-rose-800 hover:bg-rose-700 text-white font-sans font-semibold text-[11px] uppercase tracking-[0.2em] px-7 py-4 transition-all duration-300 shadow-lg hover:shadow-rose-800/40 cursor-pointer border-none"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1.5"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Etkinliğini Planla
            </button>
          </div>
        </motion.section>
      </div>

      {/* ── Mobile: stacked ── */}
      <div className="flex md:hidden flex-col w-full h-full">
        <div className="relative flex-1 overflow-hidden">
          <img src={SAPANCA_BG} alt="Sapanca" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-7 pb-10">
            <span className="text-amber-400 uppercase tracking-[0.25em] text-[10px] font-sans font-semibold mb-3 block">
              Doğa &amp; Lüks
            </span>
            <h1 className="text-white text-2xl font-bold leading-snug mb-2 font-serif">
              Sultan Sarayı <span className="text-amber-300">Sapanca</span>
            </h1>
            <p className="text-white/75 text-sm font-sans font-light mb-5 leading-relaxed">
              Lüks Bungalov Tatili ve Doğa Kaçamakları
            </p>
            <button
              onClick={() => navigate('/sapanca')}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-sans font-semibold text-[10px] uppercase tracking-widest px-5 py-3 transition-all duration-300 cursor-pointer border-none"
            >
              Sapanca'yı Keşfet
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <img src={KAYNARCA_BG} alt="Kaynarca" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col items-end justify-end p-7 pb-10 text-right">
            <span className="text-rose-300 uppercase tracking-[0.25em] text-[10px] font-sans font-semibold mb-3 block">
              Zarafet &amp; Prestij
            </span>
            <h1 className="text-white text-2xl font-bold leading-snug mb-2 font-serif">
              Sultan Sarayı <span className="text-rose-300">Kaynarca</span>
            </h1>
            <p className="text-white/75 text-sm font-sans font-light mb-5 leading-relaxed">
              Unutulmaz Düğünler ve Organizasyonlar
            </p>
            <button
              onClick={() => navigate('/kaynarca')}
              className="inline-flex items-center gap-2 bg-rose-800 hover:bg-rose-700 text-white font-sans font-semibold text-[10px] uppercase tracking-widest px-5 py-3 transition-all duration-300 cursor-pointer border-none"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Etkinliğini Planla
            </button>
          </div>
        </div>
      </div>

      {/* ── Absolute Center Overlay ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
        <div className="flex flex-col items-center select-none">
          <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent to-white/40 mb-1" />
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 px-8 py-5 text-center shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-px bg-amber-400/80" />
              <span className="text-white/90 text-[9px] uppercase tracking-[0.45em] font-sans">Est. 2010</span>
              <div className="w-8 h-px bg-rose-400/80" />
            </div>
            <h2 className="text-white font-serif text-xl md:text-2xl xl:text-3xl font-bold tracking-[0.18em] drop-shadow-xl uppercase whitespace-nowrap">
              Sultan Sarayı
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-white/90 font-sans text-[9px] tracking-[0.35em] uppercase">Sapanca</span>
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/90 font-sans text-[9px] tracking-[0.35em] uppercase">Kaynarca</span>
            </div>
          </div>
          <div className="hidden md:block w-px h-20 bg-gradient-to-b from-white/40 to-transparent mt-1" />
        </div>
      </div>
    </div>
  );
}
