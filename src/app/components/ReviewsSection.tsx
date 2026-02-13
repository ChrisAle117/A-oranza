import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: 'María González',
    rating: 5,
    comment: 'Un lugar mágico entre los pinos. La pizza es excepcional y el ambiente te transporta a otro mundo. Perfecto para desconectar.',
    date: 'Enero 2026'
  },
  {
    name: 'Carlos Ramírez',
    rating: 5,
    comment: 'La experiencia completa: naturaleza, fuego, y las mejores pizzas artesanales. El atardecer desde la terraza es inolvidable.',
    date: 'Diciembre 2025'
  },
  {
    name: 'Ana Martínez',
    rating: 5,
    comment: 'Añoranza es el nombre perfecto. Cada visita te deja con ganas de volver. Los ingredientes frescos y la masa madre son impecables.',
    date: 'Febrero 2026'
  },
  {
    name: 'Luis Torres',
    rating: 4,
    comment: 'Excelente concepto, ambiente único en medio del bosque. Las pizzas del bosque son mi favorito absoluto.',
    date: 'Enero 2026'
  },
  {
    name: 'Patricia Flores',
    rating: 5,
    comment: 'El refugio perfecto para una tarde especial. La fogata, las luces, y por supuesto, la pizza. Todo simplemente perfecto.',
    date: 'Diciembre 2025'
  },
  {
    name: 'Roberto Silva',
    rating: 5,
    comment: 'Vale cada kilómetro del camino. La atención es cálida y la comida deliciosa. Un must en Tres Marías.',
    date: 'Febrero 2026'
  }
];

export function ReviewsSection() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  useEffect(() => {
    if (!sliderRef) {
      return;
    }

    const resizeTimer = window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);

    return () => window.clearTimeout(resizeTimer);
  }, [sliderRef]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="resenas" className="py-24 px-6 md:px-12" style={{ backgroundColor: '#D9CFC0' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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
            Voces del Bosque
          </h2>
          <p
            className="max-w-2xl mx-auto mb-8"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.125rem',
              color: '#2F4538',
              lineHeight: '1.7',
              fontWeight: '300'
            }}
          >
            Historias de quienes ya encontraron su refugio.
          </p>

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-[24px]"
            style={{
              backgroundColor: '#E8DFD2',
              boxShadow: '0 4px 20px rgba(61, 90, 59, 0.2)'
            }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  fill={i < 4 || i === 4 ? '#3D5A3B' : 'none'}
                  stroke={i === 4 ? '#3D5A3B' : '#3D5A3B'}
                  strokeWidth={i === 4 ? 2 : 0}
                  style={{ 
                    opacity: i === 4 ? 0.8 : 1,
                    clipPath: i === 4 ? 'inset(0 20% 0 0)' : 'none'
                  }}
                />
              ))}
            </div>
            <div className="text-left">
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2rem',
                  color: '#1A2419',
                  fontWeight: '600',
                  lineHeight: '1'
                }}
              >
                4.8
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.75rem',
                  color: '#2F4538',
                  fontWeight: '300',
                  letterSpacing: '0.5px'
                }}
              >
                50+ reseñas
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="reviews-carousel"
        >
          <Slider ref={setSliderRef} {...sliderSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-3">
                <div
                  className="p-8 rounded-[24px] h-auto"
                  style={{
                    backgroundColor: '#E8DFD2',
                    boxShadow: '0 4px 20px rgba(47, 69, 56, 0.15)',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < review.rating ? '#3D5A3B' : 'none'}
                        stroke="#3D5A3B"
                        strokeWidth={i < review.rating ? 0 : 2}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p
                    className="mb-6 flex-grow"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.95rem',
                      color: '#1A2419',
                      lineHeight: '1.7',
                      fontWeight: '300',
                      fontStyle: 'italic'
                    }}
                  >
                    "{review.comment}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t" style={{ borderColor: 'rgba(61, 90, 59, 0.2)' }}>
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.875rem',
                        color: '#1A2419',
                        fontWeight: '600',
                        marginBottom: '2px'
                      }}
                    >
                      {review.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.75rem',
                        color: '#2F4538',
                        fontWeight: '300'
                      }}
                    >
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style>{`
        .reviews-carousel .slick-dots {
          bottom: -50px;
        }
        
        .reviews-carousel .slick-dots li button:before {
          color: #84A98C;
          font-size: 10px;
          opacity: 0.3;
        }
        
        .reviews-carousel .slick-dots li.slick-active button:before {
          color: #84A98C;
          opacity: 1;
        }
        
        .reviews-carousel .slick-slide {
          height: auto;
        }

        .reviews-carousel .slick-slide > div {
          height: auto;
        }

        .reviews-carousel .slick-track {
          display: flex;
          align-items: flex-start;
        }
      `}</style>
    </section>
  );
}
