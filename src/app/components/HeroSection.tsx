import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Warm overlay for organic feel */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(26, 36, 25, 0.45) 0%, rgba(26, 36, 25, 0.6) 100%)'
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Main Heading */}
          <h1
            className="mb-6"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              color: '#E8DFD2',
              letterSpacing: '0.05em',
              fontWeight: '600',
              textShadow: '0 4px 30px rgba(26, 36, 25, 0.9), 0 2px 10px rgba(61, 90, 59, 0.4)'
            }}
          >
            Añoranza Pizzería
          </h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-12 max-w-3xl mx-auto"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: '#E8DFD2',
              lineHeight: '1.6',
              fontWeight: '300',
              letterSpacing: '0.02em',
              textShadow: '0 2px 15px rgba(26, 36, 25, 0.9)'
            }}
          >
            Un refugio de sabor entre la niebla y los pinos
          </motion.p>

          {/* Location Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-12 rounded-full backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(232, 223, 210, 0.15)',
              border: '1px solid rgba(232, 223, 210, 0.3)'
            }}
          >
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.875rem',
                color: '#E8DFD2',
                letterSpacing: '1px',
                fontWeight: '400'
              }}
            >
              📍 Tres Marías, Morelos
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#reserva"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(132, 169, 140, 0.4)' }}
            className="inline-block px-10 py-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: '#3D5A3B',
              color: '#E8DFD2',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.125rem',
              letterSpacing: '0.5px',
              fontWeight: '600',
              boxShadow: '0 8px 30px rgba(132, 169, 140, 0.3)'
            }}
          >
            Reservar Mesa
          </motion.a>

          {/* Opening Hours */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.95rem',
              color: '#E8DFD2',
              fontWeight: '300',
              letterSpacing: '0.5px',
              textShadow: '0 2px 10px rgba(26, 36, 25, 0.8)'
            }}
          >
            Jueves a Domingo • 5:00 – 10:00 p.m.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} style={{ color: '#E8DFD2' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
