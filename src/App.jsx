import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Package from './components/package/Package';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Package />
      <Footer />
    </div>
  );
}

export default App;