import React from "react";
import { Header } from "./components/Header";
import { PokemonStorage } from "./PokemonContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.css";
import { Pokemon } from "./components/Pokemon";
import { Home } from "./components/Home";
import { Pokedex } from "./components/Pokedex";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <PokemonStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/pokedex" element={<Pokedex />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PokemonStorage>
    </>
  );
}

export default App;
