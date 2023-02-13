import Index from "./Homepage/body/Index";
import Success from "./Success";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <div className="bg-[#121B27]">
      <AnimatePresence mode="wait">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/sucess" element={<Success/>}/>
      </Routes>
      </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
