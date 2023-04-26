import { Routes,Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import BookDetailPage from "./Components/Pages/BookDetailPage";
import SearchResultsPage from "./Components/Pages/SearchResultsPage";
import Navbar from "./Components/Navbar";
function App() {
  return (
   <>
     <Navbar />
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/searchRes" element={<SearchResultsPage/>} />
      <Route path="/bookdetail" element={<BookDetailPage/>} />


     </Routes>
   </>
  );
}

export default App;
