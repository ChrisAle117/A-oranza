import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation as NavigationIcon } from 'lucide-react';

export function LocationsSection() {
  const handleViewMap = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=19.0833,-99.2500', '_blank');
  };

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=19.0833,-99.2500', '_blank');
  };

  return (
    <section id="ubicaciones" className="py-24 px-6 md:px-12" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#1A2419',
              letterSpacing: '0.02em'
            }}
          >
            Nuestro Refugio
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.125rem',
              color: '#2F4538',
              lineHeight: '1.7',
              fontWeight: '300'
            }}
          >
            Entre pinos y niebla, te esperamos en el corazón de las montañas.
          </p>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-[24px] overflow-hidden mb-12"
          style={{
            backgroundColor: '#D9CFC0',
            boxShadow: '0 8px 40px rgba(47, 69, 56, 0.15)'
          }}
        >
          <div className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1759576680785-7d1fc2321f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjByZXN0YXVyYW50JTIwbmF0dXJlJTIwb3V0ZG9vciUyMGRpbmluZ3xlbnwxfHx8fDE3NzEwMjMwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Añoranza Pizzería - Tres Marías"
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(47, 62, 70, 0.4) 100%)'
              }}
            />
            
            {/* Floating Badge */}
            <div
              className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md"
              style={{
                background: 'rgba(132, 169, 140, 0.9)',
                boxShadow: '0 4px 20px rgba(47, 62, 70, 0.2)'
              }}
            >
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.875rem',
                  color: '#E8DFD2',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}
              >
                En el bosque
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <h3
              className="mb-2"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem',
                color: '#1A2419',
                letterSpacing: '0.02em'
              }}
            >
              Añoranza Pizzería
            </h3>
            <p
              className="mb-8"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1rem',
                color: '#2F4538',
                fontStyle: 'italic',
                fontWeight: '300'
              }}
            >
              Donde el fuego y el bosque se encuentran.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={22} style={{ color: '#84A98C', marginTop: '2px', flexShrink: 0 }} />
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.95rem',
                    color: '#2F3E46',
                    lineHeight: '1.6'
                  }}
                >
                  Golondrina, Tres Marías, Morelos, C.P. 62515
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={22} style={{ color: '#3D5A3B', flexShrink: 0 }} />
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.95rem',
                    color: '#1A2419'
                  }}
                >
                  +52 55 1234 5678
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock size={22} style={{ color: '#3D5A3B', flexShrink: 0 }} />
                <div>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.95rem',
                      color: '#1A2419',
                      fontWeight: '600'
                    }}
                  >
                    Jueves a Domingo
                  </p>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.875rem',
                      color: '#2F4538',
                      fontWeight: '300'
                    }}
                  >
                    5:00 – 10:00 p.m.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleViewMap}
                className="flex-1 py-3.5 px-6 rounded-[24px] transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                style={{
                  backgroundColor: '#3D5A3B',
                  color: '#E8DFD2',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.95rem',
                  letterSpacing: '0.3px',
                  fontWeight: '600'
                }}
              >
                <MapPin size={18} />
                Ver en el mapa
              </button>
              
              <button
                onClick={handleGetDirections}
                className="flex-1 py-3.5 px-6 rounded-[24px] transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                style={{
                  border: '2px solid #3D5A3B',
                  color: '#1A2419',
                  backgroundColor: 'transparent',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.95rem',
                  letterSpacing: '0.3px',
                  fontWeight: '600'
                }}
              >
                <NavigationIcon size={18} />
                Cómo llegar
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-[24px] overflow-hidden h-[500px] relative"
          style={{
            backgroundColor: '#F4F1EA',
            boxShadow: '0 8px 40px rgba(82, 121, 111, 0.12)'
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30140.891234567!2d-99.2500!3d19.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdffb3e7c1234%3A0x1234567890abcdef!2sTres%20Mar%C3%ADas%2C%20Morelos!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Añoranza Pizzería - Ubicación"
          />
          
          {/* Custom overlay */}
          <div 
            className="absolute top-6 left-6 px-5 py-3 rounded-[20px] backdrop-blur-md pointer-events-none"
            style={{
              background: 'rgba(253, 251, 247, 0.95)',
              boxShadow: '0 4px 20px rgba(47, 62, 70, 0.15)'
            }}
          >
            <div className="flex items-center gap-2">
              <MapPin size={20} style={{ color: '#3D5A3B' }} />
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.125rem',
                  color: '#2F3E46',
                  fontWeight: '600'
                }}
              >
                Tres Marías, Morelos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
