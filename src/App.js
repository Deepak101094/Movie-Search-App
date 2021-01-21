//import './App.css';
import MovieSearch from "./components/MovieSearch";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from '@material-ui/icons/Menu';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
    <Navbar />
      <div className="container">
        <MovieSearch />
      </div>
    </div>
  );
}

export default App;
