import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Store from "./components/Store";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Store />
    </div>
  );
}

export default App;
