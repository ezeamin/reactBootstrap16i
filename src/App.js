import CarrouselMario from './components/CarrouselMario/CarrouselMario';
import GrillaCards from './components/GrillaCards/GrillaCards';
import BarraNavegacion from './components/Navbar/BarraNavegacion';

const App = () => {
  return (
    <div className='bg-dark app'>
      <header>
        <BarraNavegacion />
      </header>
      <main>
        <CarrouselMario />
        <GrillaCards />
      </main>
    </div>
  );
};

export default App;
