import { useState } from "react";
import Banner from "./Componentes/Banner";
import Button from "./Componentes/Boton";
import DefaultPage from "./DefaultPage";
import MultipleSlider from "./Componentes/Carrusel/slider";
import Categorias from "./Componentes/Titulos";

function App() {

  const [categorias, actualizarCategorias] = useState([
    {
      titulo:"Back End"
    },
    {
      titulo:"Innovación y Gestión"
    }

  ])
  const [videos, actualizarVideos] = useState([
    {
      equipo:"Front End",
      video1:"/img/f1.png",
      video2:"/img/f2.png",
      video3:"/img/f3.png"
    },
    {
      equipo:"Back End",
      video1:"/img/b1.png",
      video2:"/img/b2.png",
      video3:"/img/b3.png"
    },
    {
      equipo:"Innovación y Gestión",
      video1:"/img/ig1.png",
      video2:"/img/ig2.png",
      video3:"/img/ig3.png"
    }
  ])

  return (
    <div className="App">
      <DefaultPage />
      <Button />
      <Banner />
      <Categorias />
      {
        videos.map((video) => <MultipleSlider 
          datos={video}
          key={video.equipo}
          categorias={categorias.filter( categoria => categoria.titulo != "Front end" )}
        />)} 
    </div>
  );
}

export default App;
