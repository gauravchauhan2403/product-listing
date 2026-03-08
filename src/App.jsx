import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage/ProductDetailPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <p className="text-gray-500 text-lg">Loading page...</p>
        </div>
      }>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App
