import {useState, useEffect} from 'react';

const Tracklist = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async() => {
      try{
        const response = await fetch('http://127.0.0.1:3001/genre');
        const json = await response.json();
        setGenres(json);
      } catch (error) {
        console.log("error fetchign genres:", error);
      }
    };

    getGenres();
  }, []);

  return (
  <>
    <h1>Submit a track</h1>
    <form>
      <label>Track Name: <input /></label>
      <label>Track URL: <input/></label>
      <label>track Genre: </label>
        <select id="genre" value={genres}>
        <option value="">Select a genre</option>
        {genres.map((genre) => (
        <option key={genre.id} value={genre.name}>
          {genre.name}
          </option>
        ))}
        </select>
      </form>
  </>
  )
}

export default Tracklist
