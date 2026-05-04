import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface BookingFormProps {
  title: string;
  subtitle?: string;
  formType: 'sapanca' | 'kaynarca';
  accentColor: 'amber' | 'rose';
}

export default function BookingForm({
  title,
  subtitle,
  formType,
  accentColor,
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: '',
    eventType: 'wedding',
  });

  const [submitted, setSubmitted] = useState(false);

  const accentClasses = {
    amber: 'text-amber-400 border-amber-400/30',
    rose: 'text-rose-400 border-rose-400/30',
  };

  const buttonClasses = {
    amber: 'bg-amber-500 active:bg-amber-400',
    rose: 'bg-rose-700 active:bg-rose-600',
  };

  const successTextClasses = {
    amber: 'text-amber-400',
    rose: 'text-rose-400',
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendWhatsApp = async () => {
    const PHONE = '905510415162';
    const APIKEY = '2177337';

    let message = '';

    if (formType === 'sapanca') {
      message =
        `🏡 YENİ REZERVASYON - Sultan Sarayı Sapanca\n` +
        `Ad: ${formData.name}\n` +
        `Telefon: ${formData.phone}\n` +
        `E-posta: ${formData.email}\n` +
        `Giriş: ${formData.checkIn}\n` +
        `Çıkış: ${formData.checkOut}\n` +
        `Konuk Sayısı: ${formData.guests}\n` +
        (formData.message ? `Not: ${formData.message}` : '');
    } else {
      const eventLabels: Record<string, string> = {
        wedding: 'Düğün',
        henna: 'Kına Gecesi',
        corporate: 'Kurumsal Etkinlik',
        other: 'Diğer',
      };
      message =
        `💍 YENİ TEKLİF TALEBİ - Sultan Sarayı Kaynarca\n` +
        `Ad: ${formData.name}\n` +
        `Telefon: ${formData.phone}\n` +
        `E-posta: ${formData.email}\n` +
        `Etkinlik: ${eventLabels[formData.eventType] ?? formData.eventType}\n` +
        `Kişi Sayısı: ${formData.guests}\n` +
        (formData.message ? `Not: ${formData.message}` : '');
    }

    const encoded = encodeURIComponent(message);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${PHONE}&text=${encoded}&apikey=${APIKEY}`;

    try {
      await fetch(url, { method: 'GET', mode: 'no-cors' });
    } catch {
      // Hata olsa bile kullanıcıya bildirim göster
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendWhatsApp();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        message: '',
        eventType: 'wedding',
      });
    }, 3000);
  };


  return (
    <section className="py-14 md:py-24 px-5 sm:px-6 bg-neutral-950">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <div className={`inline-block border-b pb-2 mb-4 ${accentClasses[accentColor]}`}>
              <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
                {formType === 'sapanca' ? 'Rezervasyon' : 'Teklif'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/60 text-sm sm:text-base font-light font-sans px-2">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg p-6 sm:p-8 md:p-10"
          >
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label className="block text-white text-sm font-semibold mb-2 font-sans">
                  Adınız *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300 font-sans text-sm"
                  placeholder="Tam adınız"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-semibold mb-2 font-sans">
                  E-posta *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300 font-sans text-sm"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            {/* Phone + Guests */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label className="block text-white text-sm font-semibold mb-2 font-sans">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300 font-sans text-sm"
                  placeholder="+90 (5XX) XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-semibold mb-2 font-sans">
                  Konuk Sayısı *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors duration-300 font-sans appearance-none cursor-pointer text-sm"
                >
                  {formType === 'sapanca' ? (
                    <>
                      <option value="1" className="bg-neutral-900">1 Kişi</option>
                      <option value="2" className="bg-neutral-900">2 Kişi</option>
                      <option value="4" className="bg-neutral-900">4 Kişi</option>
                      <option value="6" className="bg-neutral-900">6+ Kişi</option>
                    </>
                  ) : (
                    <>
                      <option value="50" className="bg-neutral-900">50 Kişi</option>
                      <option value="100" className="bg-neutral-900">100 Kişi</option>
                      <option value="200" className="bg-neutral-900">200 Kişi</option>
                      <option value="500" className="bg-neutral-900">500+ Kişi</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Date or event type */}
            {formType === 'sapanca' ? (
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2 font-sans">
                    Giriş Tarihi *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors duration-300 font-sans text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2 font-sans">
                    Çıkış Tarihi *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors duration-300 font-sans text-sm"
                  />
                </div>
              </div>
            ) : (
              <div className="mb-4 sm:mb-6">
                <label className="block text-white text-sm font-semibold mb-2 font-sans">
                  Etkinlik Türü *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors duration-300 font-sans appearance-none cursor-pointer text-sm"
                >
                  <option value="wedding" className="bg-neutral-900">Düğün</option>
                  <option value="henna" className="bg-neutral-900">Kına Gecesi</option>
                  <option value="corporate" className="bg-neutral-900">Kurumsal Etkinlik</option>
                  <option value="other" className="bg-neutral-900">Diğer</option>
                </select>
              </div>
            )}

            {/* Message */}
            <div className="mb-5 sm:mb-6">
              <label className="block text-white text-sm font-semibold mb-2 font-sans">
                İletiniz
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors duration-300 font-sans resize-none text-sm"
                placeholder="Özel istekleriniz ve detaylar..."
              />
            </div>

            {/* Submit — whileTap only (no whileHover, safe for touch) */}
            <motion.button
              type="submit"
              className={`w-full ${buttonClasses[accentColor]} text-white font-semibold py-4 rounded-lg transition-colors duration-200 uppercase tracking-wide text-sm font-sans cursor-pointer border-none`}
              whileTap={{ scale: 0.97 }}
            >
              {submitted ? '✓ Gönderildi!' : 'Bize Ulaşın'}
            </motion.button>

            {submitted && (
              <motion.p
                className={`text-center ${successTextClasses[accentColor]} mt-4 text-sm font-sans`}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Teşekkürler! Size en kısa sürede geri dönülecektir.
              </motion.p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
