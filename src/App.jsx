import { useState } from "react";
import "./App.css";
import Header from "./templates/header";
import PetCard from "./components/petcard";

function App() {
  return (
    <>
      <main>
        <div>
          <Header />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </main>
    </>
  );
}

export default App;
