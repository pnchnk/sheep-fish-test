import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ProductPage from "./screens/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
