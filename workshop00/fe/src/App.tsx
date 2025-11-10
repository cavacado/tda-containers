import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { getQuote } from "./http/get-quote";

function App() {
  const [quote, setQuote] = React.useState(
    "There are 10 kinds of people. Those who know binary and those who don't."
  );
  const [trigger,setTrigger] = React.useState(true)
  React.useEffect(() => {
    const run = async () => {
      const quote = await getQuote();
      setQuote(quote?.data);
    };
    run()
  }, [trigger]);

  return (
    <>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <h1>random-quotes</h1>
      <div className="card">
        <p>{quote}</p>
        <br></br>
        <button onClick={() => setTrigger(!trigger)}>refresh</button>
      </div>
      <p className="read-the-docs">
        repository name:{" "}
        <a href="https://github.com/cavacado/tda-containers" target="_blank">
          https://github.com/cavacado/tda-containers
        </a>
      </p>
    </>
  );
}

export default App;
