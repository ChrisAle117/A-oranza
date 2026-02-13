import { motion } from 'motion/react';
import { Leaf, Wheat, Sparkles, Package, Tag, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  dietary: ('vegan' | 'gluten-free')[];
  badge?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: 'clasicas',
    title: 'Clásicas',
    subtitle: 'Tradición artesanal con masa madre de fermentación lenta.',
    icon: <Sparkles size={24} />,
    items: [
      {
        name: 'Margherita',
        description: 'Tomate San Marzano, mozzarella di bufala, albahaca fresca',
        price: '$280',
        image: 'https://images.unsplash.com/photo-1769733338940-c406b721583f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBmcmVzaCUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc3MTAxNzc3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: []
      },
      {
        name: 'Napolitana',
        description: 'Tomate, mozzarella, anchoas, aceitunas negras, orégano',
        price: '$290',
        image: 'https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBwaXp6YSUyMGRvdWdoJTIwYmFzaWwlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMDE3Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: []
      },
      {
        name: 'Quattro Formaggi',
        description: 'Mozzarella, gorgonzola, parmesano, ricotta',
        price: '$320',
        image: 'https://images.unsplash.com/photo-1566843972705-1aad0ee32f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWclMjBnb3Jnb256b2xhJTIwcGl6emElMjBhcnVndWxhfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: []
      },
      {
        name: 'Diavola',
        description: 'Tomate, mozzarella, salami picante, chile de árbol',
        price: '$310',
        image: 'https://images.unsplash.com/photo-1530632789071-8543f47edb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMGhlcmJzfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: []
      }
    ]
  },
  {
    id: 'bosque',
    title: 'Del Bosque',
    subtitle: 'Ingredientes silvestres y de la tierra. Sabores únicos del entorno.',
    icon: <Leaf size={24} />,
    items: [
      {
        name: 'Hongos Silvestres',
        description: 'Mezcla de hongos del bosque, romero, aceite de trufa, parmesano',
        price: '$380',
        image: 'https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBwaXp6YSUyMGRvdWdoJTIwYmFzaWwlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMDE3Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: [],
        badge: 'Especial'
      },
      {
        name: 'Verde Montaña',
        description: 'Espinaca, acelga, queso de cabra, piñones tostados, miel',
        price: '$340',
        image: 'https://images.unsplash.com/photo-1530632789071-8543f47edb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMGhlcmJzfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: ['vegan']
      },
      {
        name: 'Ahumada del Pinar',
        description: 'Salmón ahumado, crema de eneldo, alcaparras, cebolla morada',
        price: '$420',
        image: 'https://images.unsplash.com/photo-1769733338940-c406b721583f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBmcmVzaCUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc3MTAxNzc3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: []
      },
      {
        name: 'Tierra y Fuego',
        description: 'Chorizo artesanal, pimientos asados, cebolla caramelizada',
        price: '$360',
        image: 'https://images.unsplash.com/photo-1566843972705-1aad0ee32f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWclMjBnb3Jnb256b2xhJTIwcGl6emElMjBhcnVndWxhfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: []
      }
    ]
  },
  {
    id: 'vegetarianas',
    title: 'Vegetarianas',
    subtitle: 'Hortalizas frescas y hierbas aromáticas del huerto.',
    icon: <Leaf size={24} />,
    items: [
      {
        name: 'Jardín Secreto',
        description: 'Calabacín, berenjena, pimientos, jitomate cherry, albahaca',
        price: '$300',
        image: 'https://images.unsplash.com/photo-1530632789071-8543f47edb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMGhlcmJzfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: ['vegan']
      },
      {
        name: 'Caprese Fresca',
        description: 'Tomate, mozzarella burrata, rúcula, reducción balsámica',
        price: '$330',
        image: 'https://images.unsplash.com/photo-1769733338940-c406b721583f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBmcmVzaCUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc3MTAxNzc3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: []
      },
      {
        name: 'Pesto & Piñones',
        description: 'Pesto de albahaca casero, jitomate seco, piñones, parmesano',
        price: '$320',
        image: 'https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBwaXp6YSUyMGRvdWdoJTIwYmFzaWwlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMDE3Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: []
      },
      {
        name: 'Higo & Miel',
        description: 'Higo fresco, queso azul, nuez, miel de agave, rúcula',
        price: '$350',
        image: 'https://images.unsplash.com/photo-1566843972705-1aad0ee32f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWclMjBnb3Jnb256b2xhJTIwcGl6emElMjBhcnVndWxhfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: []
      }
    ]
  },
  {
    id: 'paquetes',
    title: 'Experiencias',
    subtitle: 'Para compartir bajo las estrellas y los pinos.',
    icon: <Package size={24} />,
    items: [
      {
        name: 'Escapada de Pareja',
        description: '2 pizzas medianas + ensalada del bosque + postre + bebidas',
        price: '$850',
        image: 'https://images.unsplash.com/photo-1769733338940-c406b721583f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBmcmVzaCUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc3MTAxNzc3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: [],
        badge: 'Popular'
      },
      {
        name: 'Reunión Familiar',
        description: '3 pizzas grandes + 2 ensaladas + 6 bebidas artesanales',
        price: '$1,450',
        image: 'https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBwaXp6YSUyMGRvdWdoJTIwYmFzaWwlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMDE3Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: [],
        badge: 'Ahorra 15%'
      },
      {
        name: 'Degustación del Bosque',
        description: '5 pizzas artesanales (tamaño tasting) + vino + postres',
        price: '$1,850',
        image: 'https://images.unsplash.com/photo-1530632789071-8543f47edb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMGhlcmJzfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: [],
        badge: 'Premium'
      },
      {
        name: 'Vegetariano Completo',
        description: '2 pizzas vegetarianas + ensalada + limonadas naturales',
        price: '$780',
        image: 'https://images.unsplash.com/photo-1566843972705-1aad0ee32f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWclMjBnb3Jnb256b2xhJTIwcGl6emElMjBhcnVndWxhfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: ['vegan']
      }
    ]
  },
  {
    id: 'promociones',
    title: 'Ofertas del Mes',
    subtitle: 'Sabores que cambian con las estaciones del bosque.',
    icon: <Tag size={24} />,
    items: [
      {
        name: 'Pizza Febrero',
        description: 'Pera caramelizada, queso gorgonzola, nuez, miel de maple',
        price: '$290',
        image: 'https://images.unsplash.com/photo-1566843972705-1aad0ee32f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWclMjBnb3Jnb256b2xhJTIwcGl6emElMjBhcnVndWxhfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: [],
        badge: '-20%'
      },
      {
        name: 'Viernes de Fogata',
        description: 'Cualquier pizza + bebida artesanal - Solo viernes noche',
        price: '$350',
        image: 'https://images.unsplash.com/photo-1769733338940-c406b721583f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBmcmVzaCUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc3MTAxNzc3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: [],
        badge: 'Especial'
      },
      {
        name: 'Atardecer en el Bosque',
        description: 'Pizza mediana + entrada + postre - 17:00 a 19:00',
        price: '$420',
        image: 'https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBwaXp6YSUyMGRvdWdoJTIwYmFzaWwlMjBuYXR1cmFsJTIwbGlnaHR8ZW58MXx8fHwxNzcxMDE3Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: [],
        badge: 'Happy Hour'
      },
      {
        name: 'Domingo Familiar',
        description: '2 pizzas grandes + jarra de agua fresca - Solo domingos',
        price: '$650',
        image: 'https://images.unsplash.com/photo-1530632789071-8543f47edb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBmcmVzaCUyMGhlcmJzfGVufDF8fHx8MTc3MTAxNzc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        dietary: [],
        badge: 'Familia'
      }
    ]
  }
];

function MenuCard({ item }: { item: MenuItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer rounded-[24px] overflow-hidden relative mx-3"
      style={{
        backgroundColor: '#F4F1EA',
        boxShadow: '0 4px 20px rgba(82, 121, 111, 0.08)'
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {item.badge && (
            <div
              className="px-3 py-1 rounded-full backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(132, 169, 140, 0.95)' }}
            >
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.75rem',
                  color: '#E8DFD2',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}
              >
                {item.badge}
              </span>
            </div>
          )}
          {item.dietary.includes('vegan') && (
            <div
              className="p-2 rounded-full backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(61, 90, 59, 0.9)' }}
            >
              <Leaf size={16} style={{ color: '#E8DFD2' }} />
            </div>
          )}
          {item.dietary.includes('gluten-free') && (
            <div
              className="p-2 rounded-full backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(61, 90, 59, 0.9)' }}
            >
              <Wheat size={16} style={{ color: '#E8DFD2' }} />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.5rem',
              color: '#1A2419',
              fontWeight: '600'
            }}
          >
            {item.name}
          </h3>
          <span
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.25rem',
              color: '#2F4538',
              fontWeight: '600'
            }}
          >
            {item.price}
          </span>
        </div>
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.875rem',
            color: '#2F4538',
            lineHeight: '1.6',
            fontWeight: '300'
          }}
        >
          {item.description}
        </p>
      </div>

      {/* Hover State Border */}
      <motion.div
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{
          border: '2px solid #3D5A3B',
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  useEffect(() => {
    if (!sliderRef) {
      return;
    }

    const resizeTimer = window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);

    return () => window.clearTimeout(resizeTimer);
  }, [sliderRef, activeCategory]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <section id="menu" className="py-24 px-6 md:px-12" style={{ backgroundColor: '#D9CFC0' }}>
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
            Sabores del Bosque
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
            Cada pizza honra la tradición y celebra los ingredientes de la tierra.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {menuCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(index)}
              className="group flex items-center gap-2 px-6 py-3 rounded-[24px] transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: activeCategory === index ? '#3D5A3B' : '#D9CFC0',
                color: activeCategory === index ? '#E8DFD2' : '#1A2419',
                border: `2px solid ${activeCategory === index ? '#3D5A3B' : '#52664F'}`,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.95rem',
                letterSpacing: '0.3px',
                fontWeight: '500'
              }}
            >
              <span style={{ color: activeCategory === index ? '#E8DFD2' : '#3D5A3B' }}>
                {category.icon}
              </span>
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Current Category Info */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3
            className="mb-2"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2rem',
              color: '#1A2419',
              letterSpacing: '0.02em'
            }}
          >
            {menuCategories[activeCategory].title}
          </h3>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.95rem',
              color: '#2F4538',
              fontWeight: '300',
              fontStyle: 'italic'
            }}
          >
            {menuCategories[activeCategory].subtitle}
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          key={`carousel-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="menu-carousel"
        >
          <Slider ref={setSliderRef} {...sliderSettings}>
            {menuCategories[activeCategory].items.map((item, itemIndex) => (
              <div key={`${item.name}-${itemIndex}`}>
                <MenuCard item={item} />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {menuCategories[activeCategory].items.map((_, index) => (
            <button
              key={index}
              onClick={() => sliderRef?.slickGoTo(index)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: '#3D5A3B',
                opacity: 0.3
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .menu-carousel .slick-slide {
          height: auto;
        }

        .menu-carousel .slick-slide > div {
          height: auto;
        }

        .menu-carousel .slick-track {
          display: flex;
          align-items: flex-start;
        }
      `}</style>
    </section>
  );
}
