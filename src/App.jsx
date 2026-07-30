import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import CustomCursor from "./components/Common/CustomCursor";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;