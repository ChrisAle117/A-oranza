import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationsSection } from './components/LocationsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ParallaxDivider } from './components/ParallaxDivider';

const heroImage = 'https://images.unsplash.com/photo-1604766734578-c76b292a316d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZmlyZSUyMHBpdCUyMHJlc3RhdXJhbnQlMjBldmVuaW5nJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc3MTAyMzA5Nnww&ixlib=rb-4.1.0&q=80&w=1080';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <HeroSection heroImage={heroImage} />
      
      {/* Parallax Divider 1: After Hero */}
      <ParallaxDivider
        image="https://images.unsplash.com/photo-1770670644176-100813bce5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwb3ZlbiUyMGZpcmUlMjBhcnRpc2FuJTIwcGl6emElMjBmbGFtZXN8ZW58MXx8fHwxNzcxMDIzMDk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
        height="500px"
        quote={{
          text: "El fuego del bosque transforma la masa en recuerdos.",
          author: "Tradición Añoranza"
        }}
      />
      
      <MenuSection />
      
      {/* Parallax Divider 2: After Menu */}
      <ParallaxDivider
        image="https://images.unsplash.com/photo-1742196735389-5eafc353bef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB3b29kZW4lMjB0YWJsZSUyMGNhbmRsZWxpZ2h0JTIwd2FybSUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzcxMDIzMDk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
        height="450px"
        quote={{
          text: "Bajo la luz de velas y estrellas, cada momento se vuelve eterno."
        }}
      />
      
      <ReservationSection />
      
      {/* Parallax Divider 3: After Reservation */}
      <ParallaxDivider
        image="https://images.unsplash.com/photo-1649675602217-416a4fafcecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWYlMjBoYW5kcyUyMGRvdWdoJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzEwMTk5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        height="400px"
        quote={{
          text: "Cada masa es amasada con paciencia, horneada con pasión."
        }}
      />
      
      <LocationsSection />
      
      {/* Parallax Divider 4: After Locations */}
      <ParallaxDivider
        image="https://images.unsplash.com/photo-1546989334-2723e3eb4887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lJTIwdHJlZXMlMjBmb2clMjBtaXN0eSUyMGZvcmVzdCUyMG5hdHVyYWx8ZW58MXx8fHwxNzcxMDIzMDk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
        height="450px"
        quote={{
          text: "Entre la niebla y los pinos, encontramos nuestra esencia.",
          author: "Añoranza"
        }}
      />
      
      <ReviewsSection />
      <Footer />
    </div>
  );
}
