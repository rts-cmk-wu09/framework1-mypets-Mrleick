import { useState } from "react";
import "./App.css";
import Header from "./templates/header";
import PetCard from "./components/petcard";
import Sortbutton from "./components/sortbutton";

function App() {
  return (
    <>
      <main>
        <div>
          <Header />
        </div>
        <Sortbutton />
        <PetCard />
      </main>
    </>
  );
}

export default App;
