import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <div className="max-w-7xl mx-auto text-white font-montserrat text-[80%]">
      <Header />
      <Hero />
      <Products />
      <Footer />

      <hr className="border m-8 mt-16" />

      <p className="p-10 font-semibold text-center">
        2023 &copy; HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED.
      </p>

    </div>
  );
}

export default App;
