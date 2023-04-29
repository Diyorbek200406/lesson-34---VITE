// style import
import "./App.css";
// Components import
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// function arrow

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h2>Content</h2>
      </main>
      <Footer />
    </div>
  );
}
export default App;
