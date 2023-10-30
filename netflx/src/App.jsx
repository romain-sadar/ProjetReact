import MoviesList from './components/MoviesList'
import Trending from './Pages/Trending';

function App() {
  const moviesArray = ["Fast and furious", "Barbie", "Nemo"]
  return (
    <>
    <div className='App'>
      <Trending/>
      <MoviesList movies={moviesArray}/>
    </div>
      
    </>
  );
}

export default App;