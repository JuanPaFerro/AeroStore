import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Store from "./components/Store";
import { useGetUserInfo } from "./hooks/useGetUserInfo";

function App() {
  const { user, loading } = useGetUserInfo();

  if (loading) {
    return;
  }
  return (
    <div className="App">
      <Navigation user={user} />
      <Header />
      <Store user={user} />
    </div>
  );
}

export default App;
