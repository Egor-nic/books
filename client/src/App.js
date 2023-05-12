import "./index.css";
import { Route, Routes } from 'react-router-dom';
import SearchBooksPages from "./pages/books/index";
import BookDescriptions from "./pages/books/bookDescriptions";

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path={'/'} element={<SearchBooksPages />}/> 
        <Route path={'/book-descriptions/:id'} element={<BookDescriptions />}/> 
      </Routes>
    </div>
  );
}

export default App;
