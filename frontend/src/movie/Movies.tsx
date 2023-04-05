import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
//This file displays the Movies page pulling from the api
function MovieList() {
  const [listOMovies, setListOMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOMovies(temp);
    };
    fetchFood();
  }, []);

  return (
    <>
      <div>
        <h1>Movie Collection</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
            <th>Lent to</th>
          </tr>
        </thead>
        <tbody>
          {listOMovies.map((m) => (
            <tr key={m.movieId}>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.category}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default MovieList;
