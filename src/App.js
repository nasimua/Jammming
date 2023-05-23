import './App.css';
import Playlist from './Components/Playlist';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Track from './Components/Track';
import Tracklist from './Components/Tracklist';

function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
    </div>
  );
}

export default App;
