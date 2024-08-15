import { Route, Routes } from "react-router";
import Header from "@components/header.jsx";
import Footer from "@components/footer.jsx";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import PaymentDone from "@/pages/PaymentDone";

function App() {
  return (
    <div className="font-archivo overflow-hidden flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex w-full py-4 md:px-8 lg:px-12 px-2">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<PaymentDone />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
