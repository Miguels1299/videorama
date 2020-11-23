import './App.css';
import React from 'react'
import { Slider } from './components/Slider';
import { DBMovies } from './Data';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Videorama</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Inicio</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Cátalogo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sucursales</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      {
        DBMovies.map((datos, index) => {
          return (

            <Slider key={index} peliculas={datos.peliculas} titulo={datos.genero} />
          )
        })
      }
    </div>
  );
}

export default App;
