import React, { useState } from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://media.pathe.sn/movie/alex/HO00000558/poster/md/1/movie&uuid=A0E01815-5702-4478-A35D-44FDCDBFDAE4',
      rating: 8.8,
    },
    {
      title: 'vaiana 2',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality.',
      posterURL: 'https://media.pathe.sn/movie/alex/HO00000512/poster/md/1/movie&uuid=3DA1E149-35B3-4B3D-965A-38880B4A6239',
      rating: 8.7,
      videoURL: 'https://www.youtube.com/watch?v=8hYlB38asDY',
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = () => {
    const newMovie = {
      title: 'Nouveau Film',
      description: 'Description du nouveau film.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 9.0,
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterRating === '' || movie.rating >= filterRating)
  );

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    document.body.style.color = theme === 'light' ? 'black' : 'white';
  };

  return (
    <div className={`App ${theme}`}>
      <nav className={`navbar ${theme}`}>
        <a href="home" className='tet'>home</a>
        <a href="film"  className='tet'>film</a>
        <a href="cinema"  className='tet'>cinema</a>
        <a href="offres" className='tet'>offres</a>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <Search size={16} />
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>
      </nav>

      <div>
        <img src="https://media.pathe.sn/home/featuring/backdrop/162473/lg/3/cine2401-venom-pathe-date-bg-1920x850.jpg" alt="" className="image" />
      </div>

      <div className='cqrd'>
        <div>
          <a href="https://www.youtube.com/watch?v=--SVBGJl5rI">
            <img src="https://media.pathe.sn/movie/alex/HO00000518/poster/md/1/movie&uuid=CB4C38B4-4B8D-45CE-9BCF-8EBCC2930A7A" alt="" className="image2" />
          </a>
          <h3>1778!thierno souleymane baal</h3>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=DA9z4laT4I4">
            <img src="https://media.pathe.sn/movie/alex/HO00000585/poster/md/1/movie&uuid=2D511917-9688-4672-BABA-54910A19051E" alt="" className="image2" />
          </a>
          <h3>ni chaine ni Maitre</h3>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=GdkSkRnc94s">
            <img src="https://media.pathe.sn/movie/alex/HO00000559/poster/md/1/movie&uuid=9F297A73-A10C-4747-90B8-9FA23ABF05C4" alt="" className="image2" />
          </a>
          <h3>pieces by pieces</h3>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=APv2lidaDmo">
            <img src="https://media.pathe.sn/movie/alex/HO00000538/poster/md/1/movie&uuid=213C56A5-516E-4B6F-9408-7804DCA6CECE" alt="" className="image2" />
          </a>
          <h3>gladiator II</h3>
        </div>
      </div>

      <AddMovieForm addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
