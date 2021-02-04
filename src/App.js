import { useEffect } from "react";
import MovieSearch from "./components/MovieSearch";

function App() {
  useEffect(() => {
    localStorage.setItem("apiKey", "114529ed");
  }, []);

  return (
    <div>
      <MovieSearch />
    </div>
  );
}

export default App;
