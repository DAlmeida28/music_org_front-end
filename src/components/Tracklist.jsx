import {useState, useEffect} from 'react';

const Tracklist = () => {
  const [genres, setGenres] = useState([]);
  const [sets, setSets] = useState([]);

  const [trackGenre, setTrackGenre] = useState("");
  const [trackSet, setTrackSet] = useState("");
  const [trackName, setTrackName] = useState("");
  const [trackUrl, setTrackUrl] = useState("");

  useEffect(() => {
    const getGenres = async() => {
      try{
        const response = await fetch('http://127.0.0.1:3001/genre');
        const json = await response.json();
        setGenres(json);
      } catch(error) {
        console.log("error fetching genres:", error);
      }
    };

    getGenres();

    const getSets = async() => {
      try {
        const response = await fetch('http://127.0.0.1:3001/sets');
        const json = await response.json();
        setSets(json);
      } catch(error) {
        console.log("error fetching sets:", error);
      }
    };

    getSets();
  }, []);
  
    return (
  <>
    <h1>Submit a track</h1>
    <form>
      <label>Track Name: <input /></label>
      <label>Track URL: <input/></label>

      <label>Track Genre: </label>
        <select id="genre" value={trackGenre} onChange={(event) => {setTrackGenre(event.target.value)}}>
        <option value="genre">Select a genre</option>
         {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
          {genre.name}
        </option>
        ))}
        </select>

      <label>Set/Event: </label>
        <select id="set" value={trackSet} onChange={(event) => {setTrackSet(event.target.value)}}>
        <option value="set">Select an Set or Event</option>
         {sets.map((set) => (
          <option key={set.id} value={set.name}>
            {set.name}
          </option>
          ))}
        </select>
        <button>Submit</button>
      </form>
  </>
  )
}

export default Tracklist
