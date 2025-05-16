import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
        <footer>
      Built by <a href="https://github.com/smilligan-sm" target="_blank">Sarah Milligan</a>, is open-sourced on <a href="https://github.com/smilligan-sm/React-weather-app" target="_blank">Github</a
      > and hosted on <a href="https://sm-react-weather-app.netlify.app/" target="_blank">Netlify</a>
    </footer>
    </div>
  );
}
