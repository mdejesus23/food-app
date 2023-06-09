import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
