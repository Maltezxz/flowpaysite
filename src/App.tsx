import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gateway from './components/Gateway';
import BancoDigital from './components/BancoDigital';
import Cartoes from './components/Cartoes';
import Beneficios from './components/Beneficios';
import Seguranca from './components/Seguranca';
import ComoFunciona from './components/ComoFunciona';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Gateway />
      <BancoDigital />
      <Cartoes />
      <Beneficios />
      <Seguranca />
      <ComoFunciona />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;