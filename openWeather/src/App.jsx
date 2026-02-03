import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const apiKey = import.meta.env.VITE_openWeather_API_KEY;

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState([]);
  const handle = async () => {
    try {

      if (!city) return alert("Enter city name");
      setLoading(true);

      const loc = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city},NP&limit=1&appid=${apiKey}`
      );
      console.log(loc.data)
      const lat = loc.data[0].lat;
      const lon = loc.data[0].lon;

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

      setWeather(res.data);
      console.log('res', res);


    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="text-3xl font-bold flex p-5 gap-5">
        <input
          type="text"
          placeholder="Enter city name"
          className="px-3 py-1 border text-center rounded-sm "
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          className="bg-blue-500 px-3 py-2 rounded-sm shadow-sm text-white"
          onClick={handle}
        >
          Enter
        </button>
      </div>

      {loading && (
        <div className="p-5">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
          </span>
        </div>
      )}

      {weather && (
        <div className="p-5">
          <h2>City: {weather.name}</h2>
          <p>Temp: {weather.main?.temp}°C</p>
          <p>Condition: {weather.weather?.main}</p>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
