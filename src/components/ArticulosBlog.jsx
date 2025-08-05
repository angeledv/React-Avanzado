import React, { useState, useEffect } from "react";
import "./ArticulosBlog.css";

// export default function ArticulosBlog(){
//     const [articulos, setArticulos] = useState([]);
//     const [isLoading, setIsLoading] = useState(true); // Se inicializa en true porque al inicio no se cuenta con información
//     const [error, setError] = useState(null);

//     useEffect(()=> {
//         fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
//         .then(res => {
//             if(!res.ok) throw new Error('Error al obtener los artículos');
//             return res.json();
//         })
//         .then(data => setArticulos(data))
//         .catch(err => setError(err))
//         .finally(() => setIsLoading(false));
//     }, []);

//     if(isLoading) return <h2>Cargando artículos...</h2>;
//     if(error) return <h2>Error: {error}</h2>;

//     return (
//         <div className="articulos">
//             <h2>Artículos de Mi Blog</h2>
//             {articulos.map(articulo =>(
//                 <div className="card" key={articulo.id}>
//                     <h3>{articulo.title}</h3>
//                     <p>{articulo.body}</p>
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default function CharactersBlog() {
//     const [characters, setCharacters] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('https://rickandmortyapi.com/api/character')
//             .then(res => {
//                 if (!res.ok) throw new Error('Error al obtener los personajes');
//                 return res.json();
//             })
//             .then(data => setCharacters(data.results))
//             .catch(err => setError(err))
//             .finally(() => setIsLoading(false));
//     }, []);

//     if (isLoading) return <h2>Cargando personajes...</h2>;
//     if (error) return <h2>Error: {error.message}</h2>;

//     return (
//         <div className="characters">
//             <h2>Personajes de Mi Blog</h2>
//             {characters.map(character => (
//                 <div className="card" key={character.id}>
//                     <h3>{character.name}</h3>
//                     <img src={character.image} alt={character.name}></img>
//                     <p>Estatus: {character.status}</p>
//                     <p>Especie: {character.species}</p>
//                     <p>Género: {character.gender}</p>
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     );
// }

export default function DogsBlog() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/12")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los personajes");
        return res.json();
      })
      .then((data) => setDogs(data.message))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h2>Cargando personajes...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div className="characters">
      <h2>Dog API</h2>

      <div className="images-container">
        {dogs.map((dog, index) => (
          <div className="dogCard" key={index}>
            <h3>Perrito {index + 1}</h3>
            <img className="dogImg" src={dog} alt={"Perrito " + index}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
