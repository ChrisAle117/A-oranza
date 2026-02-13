import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Menú', href: '#menu' },
  { name: 'Reservar', href: '#reserva' },
  { name: 'Ubicación', href: '#ubicaciones' },
  { name: 'Reseñas', href: '#resenas' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(232, 223, 210, 0.95)' : 'rgba(232, 223, 210, 0.1)',
          backdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid rgba(61, 90, 59, 0.1)' : '1px solid transparent'
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.75rem',
              color: isScrolled ? '#1A2419' : '#E8DFD2',
              letterSpacing: '0.1em',
              fontWeight: '600',
              textShadow: isScrolled ? 'none' : '0 2px 10px rgba(26, 36, 25, 0.5)',
              transition: 'all 0.3s ease'
            }}
          >
            Añoranza
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.95rem',
                  color: isScrolled ? '#1A2419' : '#E8DFD2',
                  fontWeight: '500',
                  letterSpacing: '0.3px',
                  textShadow: isScrolled ? 'none' : '0 2px 8px rgba(26, 36, 25, 0.5)',
                  transition: 'all 0.3s ease'
                }}
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#3D5A3B' }}
                />
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#reserva"
              className="px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#3D5A3B',
                color: '#E8DFD2',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.95rem',
                letterSpacing: '0.3px',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(61, 90, 59, 0.4)'
              }}
            >
              Reservar Mesa
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: isScrolled ? '#1A2419' : '#E8DFD2' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full md:hidden z-40 px-6 py-24"
            style={{
              backgroundColor: 'rgba(232, 223, 210, 0.98)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-3 border-b"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '1.25rem',
                    color: '#1A2419',
                    fontWeight: '500',
                    borderColor: 'rgba(61, 90, 59, 0.2)'
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#reserva"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-8 py-4 rounded-full text-center"
                style={{
                  backgroundColor: '#3D5A3B',
                  color: '#E8DFD2',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.125rem',
                  letterSpacing: '0.5px',
                  fontWeight: '600'
                }}
              >
                Reservar Mesa
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
