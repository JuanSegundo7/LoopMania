import React from "react";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Switch from "./components/Switch/Switch";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <main className={styles.main}>
        <Header />
        <Container maxWidth="lg">
          <section className={styles.container}>
            <Switch />
            <Footer />
          </section>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
