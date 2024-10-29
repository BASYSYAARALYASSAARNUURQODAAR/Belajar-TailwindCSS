import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomePage from "./pages/HomePage";

function App() {
  return (
   <div>
      {/* Navbar */}
      <Navbar />

      {/* COntent */}
      <HomePage />

      {/* Footer */} 
      <Footer />
    </div>
  );
}

export default App;

