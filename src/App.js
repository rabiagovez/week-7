import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";
function App() {
  const key = "b08a0fe7bd1a79244ea6f02624469e9a";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="City name"
        />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
