import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ParallaxDividerProps {
  image: string;
  height?: string;
  overlay?: boolean;
  quote?: {
    text: string;
    author?: string;
  };
}

export function ParallaxDivider({ 
  image, 
  height = '400px', 
  overlay = true,
  quote 
}: ParallaxDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div 
      ref={ref}
      style={{ 
        height,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Parallax Image */}
      <motion.div
        style={{
          y,
          position: 'absolute',
          top: '-20%',
          left: 0,
          right: 0,
          bottom: '-20%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(26, 36, 25, 0.5) 0%, rgba(61, 90, 59, 0.4) 100%)'
          }}
        />
      )}

      {/* Quote Content */}
      {quote && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <p
              className="mb-4"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                color: '#E8DFD2',
                fontStyle: 'italic',
                lineHeight: '1.4',
                textShadow: '0 2px 20px rgba(26, 36, 25, 0.7)'
              }}
            >
              "{quote.text}"
            </p>
            {quote.author && (
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1rem',
                  color: '#E8DFD2',
                  fontWeight: '300',
                  letterSpacing: '1px',
                  textShadow: '0 2px 10px rgba(26, 36, 25, 0.7)'
                }}
              >
                — {quote.author}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
