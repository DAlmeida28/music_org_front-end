import { useEffect, useState } from 'react';

const GenreList = () => {
  const [genres, setGenres] = useState([]);

    useEffect(() => {
    const getGenres = async() => {
    try {
      const response = await fetch('http://127.0.0.1:3001/genre');
      const json = await response.json();
      setGenres(json);
    } catch (error) {
      console.log("error fetching genres:", error);
    }
  };

  getGenres();
}, []);

if (!genres.length) return <h2>Fetching Genre's</h2>;

return(
<>
      <h1>List of Genre's</h1>
      <ul>
        {genres.map((genre) => (
        <li key={genre.id}>
          <h2>{genre.name}</h2>
          </li>
        ))}
      </ul>
</>
);
}

export default GenreList;
