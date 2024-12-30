import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Main } from "./Components/Main/Main";
import { Catalogue } from "./Components/Header/Catalogue/Catalogue";
import { Portfolio } from "./Components/Header/Portfolio/Portfolio";
import { Contact } from "./Components/Header/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
