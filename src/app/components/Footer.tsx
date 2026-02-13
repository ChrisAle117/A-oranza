import { motion } from 'motion/react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { ImageWithFallback } from './fallbacks/ImageWithFallback';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const instagramImages = [
  'https://images.unsplash.com/photo-1769733338940-c406b721583f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBmcmVzaCUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc3MTAxNzc3N3ww&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1566843972705-1aad0ee32f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWclMjBnb3Jnb256b2xhJTIwcGl6emElMjBhcnVndWxhfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1530632789071-8543f47edb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMGhlcmJzfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBwaXp6YSUyMGRvdWdoJTIwYmFzaWwlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMDE3Nzc3fDA&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1646257094600-9179d8386f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcxMDE3Nzc4fDA&ixlib=rb-4.1.0&q=80&w=400',
  'https://images.unsplash.com/photo-1759369984848-c40905c76459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMG91dGRvb3J8ZW58MXx8fHwxNzcxMDE3Nzc5fDA&ixlib=rb-4.1.0&q=80&w=400'
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por unirte a La Comunidad del Trigo!');
    setEmail('');
  };

  return (
    <footer style={{ backgroundColor: '#1A2419' }}>
      {/* Newsletter Section */}
      <div className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#E8DFD2',
                letterSpacing: '0.02em'
              }}
            >
              Entre Pinos y Fuego
            </h3>
            <p
              className="mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1rem',
                color: '#52664F',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Únete a nuestra comunidad. Recibe noticias de eventos especiales, nuevos sabores del bosque y experiencias únicas.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-6 py-4 rounded-[24px] outline-none"
                style={{
                  backgroundColor: '#D9CFC0',
                  border: '2px solid transparent',
                  color: '#1A2419',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-[24px] transition-all duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: '#3D5A3B',
                  color: '#E8DFD2',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1rem',
                  letterSpacing: '0.5px',
                  fontWeight: '500'
                }}
              >
                Unirme
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Instagram Feed - Infinite Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pb-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p
            className="text-center mb-6"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.875rem',
              color: '#52664F',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            @anoranza_pizza
          </p>
        </div>
        <div className="instagram-carousel">
          <Slider
            infinite={true}
            speed={3000}
            slidesToShow={6}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={0}
            cssEase="linear"
            arrows={false}
            pauseOnHover={true}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 3
                }
              }
            ]}
          >
            {[...instagramImages, ...instagramImages].map((img, index) => (
              <div key={index} className="px-1">
                <a
                  href="#"
                  className="relative block aspect-square overflow-hidden rounded-lg group"
                  style={{ display: 'block' }}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Instagram post ${(index % instagramImages.length) + 1}`}
                    className="w-full h-full object-cover"
                    style={{ filter: 'saturate(0.9) brightness(0.95)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2419] to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500 flex items-center justify-center">
                    <Instagram className="text-[#E8DFD2] opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" size={32} />
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Footer Content */}
      <div className="px-6 md:px-12 py-12 border-t" style={{ borderColor: 'rgba(82, 102, 79, 0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h4
                className="mb-4"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2rem',
                  color: '#E8DFD2',
                  letterSpacing: '0.05em'
                }}
              >
                Añoranza
              </h4>
              <p
                className="mb-6 max-w-md"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.875rem',
                  color: '#52664F',
                  lineHeight: '1.7',
                  fontWeight: '300'
                }}
              >
                Un refugio entre pinos donde el fuego transforma masa artesanal en memorias. 
                Ingredientes del bosque, tradición y un profundo respeto por la naturaleza.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#3D5A3B' }}
                >
                  <Instagram size={18} style={{ color: '#E8DFD2' }} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#3D5A3B' }}
                >
                  <Facebook size={18} style={{ color: '#E8DFD2' }} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#3D5A3B' }}
                >
                  <Mail size={18} style={{ color: '#E8DFD2' }} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h5
                className="mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.875rem',
                  color: '#E8DFD2',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: '600'
                }}
              >
                Servicios
              </h5>
              <ul className="space-y-2">
                {['Consumo en el lugar', 'Para llevar', 'Entrega a domicilio'].map((service) => (
                  <li
                    key={service}
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.875rem',
                      color: '#52664F',
                      opacity: 0.9
                    }}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5
                className="mb-4"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.875rem',
                  color: '#E8DFD2',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: '600'
                }}
              >
                Contacto
              </h5>
              <ul className="space-y-2">
                <li
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.875rem',
                    color: '#52664F',
                    opacity: 0.9
                  }}
                >
                  hola@anoranza.mx
                </li>
                <li
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.875rem',
                    color: '#52664F',
                    opacity: 0.9
                  }}
                >
                  +52 55 1234 5678
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t text-center" style={{ borderColor: 'rgba(82, 102, 79, 0.3)' }}>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.75rem',
                color: '#52664F',
                opacity: 0.7,
                letterSpacing: '0.5px'
              }}
            >
              © 2026 Añoranza Pizzería. Todos los derechos reservados. Entre la niebla y los pinos.
            </p>
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      <motion.a
        href="#reserva"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 px-6 py-4 rounded-full shadow-2xl z-40 hidden md:flex items-center gap-2 hover:scale-105 transition-all duration-300"
        style={{
          backgroundColor: '#2F4538',
          color: '#E8DFD2',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.95rem',
          letterSpacing: '0.5px',
          fontWeight: '600'
        }}
      >
        Reservar Mesa
      </motion.a>

      <style>{`
        .instagram-carousel .slick-slide {
          padding: 0 4px;
        }
        
        .instagram-carousel .slick-track {
          display: flex;
          align-items: center;
        }
        
        .instagram-carousel .slick-list {
          overflow: hidden;
        }
      `}</style>
    </footer>
  );
}
