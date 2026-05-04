import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  accentColor: 'amber' | 'rose';
}

export default function Header({ title, accentColor }: HeaderProps) {
  const navigate = useNavigate();
  const accentClasses = {
    amber: 'text-amber-400 hover:text-amber-300',
    rose: 'text-rose-300 hover:text-rose-200',
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className={`flex items-center gap-2 ${accentClasses[accentColor]} transition-colors duration-300 cursor-pointer border-none bg-transparent p-0`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm uppercase tracking-wider font-sans font-semibold hidden sm:inline">
            Geri Dön
          </span>
        </button>
        <h1 className="text-white font-serif text-xl md:text-2xl font-bold tracking-wider">
          {title}
        </h1>
        <div className="w-20" />
      </div>
    </motion.header>
  );
}
