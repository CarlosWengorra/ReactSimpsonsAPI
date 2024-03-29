import React, { useEffect, useState } from "react";
import "./App.css"
import { Header } from "./header/header";
import { Pages } from "./Pages/Pages";
import { Personajes } from "./Personajes/Personajes";
import { Box } from "./Box/Box";
import { Footer } from "./Footer/Footer";
import { Homer } from "./Homer/Homer"

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  

  const FetchPersonajes = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data=> {
      setPersonajes(data.docs);
      setTotalPages(data.totalPages);
    })
    .catch(error => console.log('error'))
  };

  useEffect(() =>{
    const initialUrl = `https://apisimpsons.fly.dev/api/personajes?limit=8&page=${currentPage}`;
    FetchPersonajes(initialUrl);
  }, [currentPage])

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="app">

      <Header/>

      <Pages
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        currentPage={currentPage}
        totalPages={totalPages}
      >
        <Box>
          <Personajes personajes={personajes} />
        </Box>
      </Pages>

      <Footer/>
      <Homer/>

    </div>
  );
}

export default App;